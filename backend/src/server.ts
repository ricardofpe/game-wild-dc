import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import axios from 'axios';
import crypto from 'crypto';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_SERVER_ID = process.env.DISCORD_SERVER_ID;
const HMAC_SECRET = process.env.HMAC_SECRET_KEY;

if (!HMAC_SECRET) {
  throw new Error('The HMAC_SECRET_KEY environment variable is not defined.');
}

const safeHMAC_SECRET = HMAC_SECRET as string;

function verifyHmac(req: Request, res: Response, next: NextFunction): void {
  const hmacHeader = req.header('X-HMAC-Signature');
  const timestamp = req.header('X-Timestamp');

  if (!hmacHeader || !timestamp) {
    res.status(401).json({ error: 'HMAC Signature or Timestamp missing' });
    return;
  }

  const now = Date.now();
  const timestampDiff = now - parseInt(timestamp, 10);

  if (timestampDiff > 5 * 60 * 1000) {
    res.status(400).json({ error: 'Timestamp expired' });
    return;
  }

  const method = req.method.toLowerCase();
  const url = req.originalUrl.replace('/api', '');
  let body = '';
  if (req.body && Object.keys(req.body).length > 0) {
    body = JSON.stringify(req.body);
  }

  const dataToSign = `${timestamp}:${method}:${url}:${body}`;

  const expectedHmac = crypto
    .createHmac('sha256', safeHMAC_SECRET)
    .update(dataToSign)
    .digest('hex');

  if (hmacHeader !== expectedHmac) {
    res.status(403).json({ error: 'Invalid HMAC Signature' });
    return;
  }

  next();
}

app.get('/api/discord-server-preview', verifyHmac, async (req: Request, res: Response) => {
  try {
    if (!DISCORD_BOT_TOKEN || !DISCORD_SERVER_ID) {
      throw new Error('Bot token or server ID not defined.');
    }

    const response = await axios.get(`https://discord.com/api/v10/guilds/${DISCORD_SERVER_ID}/preview`, {
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      },
    });

    res.json(response.data);
  } catch (error: any) {
    console.error('Error fetching Discord server information (preview):', error);
    res.status(500).json({ error: 'Failed to fetch Discord server information (preview)', details: error.message });
  }
});

app.get('/api/discord-server-info', verifyHmac, async (req: Request, res: Response) => {
  try {
    if (!DISCORD_BOT_TOKEN || !DISCORD_SERVER_ID) {
      throw new Error('Bot token or server ID not defined.');
    }

    const response = await axios.get(`https://discord.com/api/v10/guilds/${DISCORD_SERVER_ID}`, {
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      },
    });

    res.json(response.data);
  } catch (error: any) {
    console.error('Error fetching Discord server information (info):', error);
    res.status(500).json({ error: 'Failed to fetch Discord server information (info)', details: error.message });
  }
});

app.get('/ping', (req: Request, res: Response) => {
  res.status(200).send('pong');
});

function keepAlive() {
  setInterval(() => {
    axios.get(`${process.env.API_URL}/ping`)
      .then(() => console.log('Pinged server to keep it alive'))
      .catch(() => console.error('Failed to ping server'));
  }, 2 * 60 * 1000);
}

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
  keepAlive();
});