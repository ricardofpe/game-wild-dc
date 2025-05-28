# 🚀 Discord Server Landing Page

A modern landing page to promote a Discord server. The page displays real-time information from the Discord API, such as member count and online users.

## 🛠️ Tech Stack

- **Frontend:**
  - Vue.js + TypeScript
  - Vite
  - Tailwind CSS

- **Backend:**
  - Node.js + TypeScript
  - Express
  - Discord API integration

## ✨ Features

- Fully responsive and fast landing page
- Real-time Discord server data
- Type-safe on both frontend and backend (TypeScript)
- Easy to deploy and maintain
- API secured with HMAC authentication

## 🔐 HMAC Authentication

The backend uses **HMAC (Hash-based Message Authentication Code)** to secure API requests coming from the frontend.

### How It Works:

- Every request from the frontend must include an HMAC signature in the headers.
- The signature is generated based on:
  - HTTP method (`GET`, `POST`, etc.)
  - Request path (e.g., `/route`)
  - Current timestamp in milliseconds
  - Shared secret key (`HMAC_SECRET_KEY`)
  - Body of requisition

### ✅ Signature Generation (Frontend):

1. Concatenate the following string:

```
<TIMESTAMP>:<HTTP_METHOD>:<REQUEST_PATH>:<BODY>
```

Example:

```
1722345678901:GET:/route:
```

2. Use HMAC SHA-256 to sign this string with the `HMAC_SECRET_KEY`.

### 🔗 Authorization Header Format:

```
Headers: X-HMAC-Signature: <signature>
         X-Timestamp: <timestamp>
```

- `<signature>` → Result of HMAC SHA-256 hashing.
- `<timestamp>` → Current timestamp in milliseconds.

### 🚫 Replay Attack Protection:

- The backend verifies the timestamp and rejects requests if the timestamp is too old (commonly 2-5 minutes).

### 🔐 Example Flow:

| Value           | Example                     |
|-----------------|------------------------------|
| HTTP Method     | GET                          |
| Request Path    | /route                       |
| Timestamp       | 1722345678901                |
| Body       | {}                |
| String to Sign  | GET|/route|1722345678901| 
| HMAC Key        | your_secret_key              |
| Generated Hash  | abc123... (sha256 hash)      |
| Authorization   | hmac abc123...:1722345678901 |

### ✅ Why HMAC?

- Verifies request authenticity.
- Protects from unauthorized usage.
- Mitigates replay attacks.
- No need to expose sensitive credentials in each request.

## 📦 Project Structure

```
.
├── backend/      # Node.js + TypeScript backend
└── frontend/     # Vue.js + TypeScript frontend
```

## 🚀 Getting Started

### ✅ Requirements

- Node.js >= 18
- npm or yarn
- Discord Bot Token with the necessary permissions
- Discord Server ID

## 🔧 Backend Setup

1. Go to the backend folder:

```
cd backend
```

2. Install dependencies:

```
npm install
# or
yarn install
```

3. Create a `.env` file in the backend folder with the following content:

```
DISCORD_BOT_TOKEN=your_discord_bot_token
DISCORD_SERVER_ID=your_discord_server_id
PORT=3000
HMAC_SECRET_KEY=your_secret_key
API_URL=your_api_url
```

4. Run the backend in development mode:

```
npm run dev
# or
yarn dev
```

Backend will be running at:

```
http://localhost:3000
```

## 🎨 Frontend Setup

1. Go to the frontend folder:

```
cd frontend
```

2. Install dependencies:

```
npm install
# or
yarn install
```

3. Create a `.env` file in the frontend folder with the following content:

```
VITE_API_URL=http://localhost:3000
VITE_HMAC_SECRET_KEY=your_secret_key
```

4. Run the frontend in development mode:

```
npm run dev
# or
yarn dev
```

Frontend will be running at:

```
http://localhost:5173
```

## 🏗️ Build for Production

### Backend:

```
npm run build
# or
yarn build
```

### Frontend:

```
npm run build
# or
yarn build
```

Frontend production files will be generated in `dist/`.

You can serve the frontend with any static file server or integrate it into the backend.

## 📜 License

This project is licensed under the MIT License.

## Contact

Ricardo F Pereira  
📧 rickcoderdev@gmail.com  
🌐 [rickcoder.vercel.app](https://rickcoder.vercel.app)  
