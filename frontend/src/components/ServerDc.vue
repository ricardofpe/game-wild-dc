<template>
  <section class="bg-gray-800 py-6 rounded-lg shadow-md overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-white text-center text-2xl font-bold mb-4 tracking-tight">
        Server Information
      </h2>
      <div v-if="serverInfo && serverPreview" class="text-white text-center">
        <div class="mb-6">
          <img
            :src="serverInfo.icon ? `https://cdn.discordapp.com/icons/${serverInfo.id}/${serverInfo.icon}.png` : '/placeholder-server-icon.png'"
            alt="Server Icon"
            class="rounded-full w-20 h-20 mx-auto mb-3 object-cover shadow-lg"
            onerror="this.src='/placeholder-server-icon.png'"
          />
          <h3 class="text-2xl font-semibold mb-1 tracking-tight">
            {{ serverInfo.name }}
          </h3>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <div class="bg-gray-700 p-3 rounded-lg shadow-md">
            <h4 class="text-lg font-medium mb-1 text-gray-300">Members</h4>
            <p class="text-xl font-bold">
              {{ serverPreview.approximate_member_count }}
            </p>
          </div>

          <div class="bg-gray-700 p-3 rounded-lg shadow-md">
            <h4 class="text-lg font-medium mb-1 text-gray-300">Online</h4>
            <p class="text-xl font-bold">
              {{ serverPreview.approximate_presence_count }}
            </p>
          </div>

          <div class="bg-gray-700 p-3 rounded-lg shadow-md">
            <h4 class="text-lg font-medium mb-1 text-gray-300">Boosts</h4>
            <p class="text-xl font-bold">
              {{ serverInfo.premium_subscription_count || 0 }}
            </p>
          </div>
        </div>

        <div class="mt-6">
          <a
            :href="`https://discord.com/channels/${serverInfo.id}`"
            target="_blank"
            class="discord-button group"
          >
            <span>Join Discord</span>
            <span class="discord-arrow">→</span>
          </a>
        </div>
      </div>
      <div v-else-if="loading" class="text-white text-center">
        <p>Loading server information...</p>
        <div class="loader"></div>
      </div>
      <div v-else-if="error" class="text-red-500 text-center">
        <p>Error loading server information:</p>
        <p>{{ error }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const serverInfo = ref<any>(null);
const serverPreview = ref<any>(null);
const loading = ref(false);
const error = ref<string | null>(null);

const HMAC_SECRET = import.meta.env.VITE_HMAC_SECRET_KEY;
const API_URL = import.meta.env.VITE_API_URL;


async function makeRequest(urlPath: string, data: any = null) {
  const timestamp = Date.now().toString();
  const method = 'get'; 
  const body = ''; 
  const dataToSign = `${timestamp}:${method}:${urlPath}:${body}`;

  const hmac = CryptoJS.HmacSHA256(dataToSign, HMAC_SECRET).toString(CryptoJS.enc.Hex);

  try {
    const response = await axios({
      method: method,
      url: `${API_URL}${urlPath}`, 
      headers: {
        'X-HMAC-Signature': hmac,
        'X-Timestamp': timestamp,
        'Content-Type': 'application/json',
      },
      data: data,
    });
    return response.data;
  } catch (error: any) {
    console.error('Request error:', error);
    throw error;
  }
}

onMounted(async () => {
  loading.value = true;
  error.value = null;

  try {
    const [info, preview] = await Promise.all([
      makeRequest('/discord-server-info'),
      makeRequest('/discord-server-preview'),
    ]);

    serverInfo.value = info;
    serverPreview.value = preview;
  } catch (err: any) {
    error.value = err.message || 'Unknown error';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.bg-gray-800 {
  background-color: #2d3748;
}

.bg-gray-700 {
  background-color: #4a5568;
}

.text-gray-300 {
  color: #d1d5db;
}

.discord-button {
  background-color: #5865f2;
  color: #ffffff;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
}

.discord-button:hover {
  background-color: #4752c4;
  transform: translateY(-2px);
}

.discord-arrow {
  transition: transform 0.2s ease;
  display: inline-block;
}

.discord-button:hover .discord-arrow {
  transform: translateX(5px);
}

.loader {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>