<template>
  <section class="bg-gray-800 py-12 rounded-lg shadow-md overflow-hidden relative">
    <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-white text-center text-3xl font-bold mb-8 tracking-tight" data-aos="fade-up">
        Server Information
      </h2>
      
      <div v-if="serverInfo && serverPreview" class="text-white text-center">
        <div class="mb-8" data-aos="zoom-in">
          <div class="relative inline-block">
            <img
              :src="serverInfo.icon ? `https://cdn.discordapp.com/icons/${serverInfo.id}/${serverInfo.icon}.png` : '/placeholder-server-icon.png'"
              alt="Server Icon"
              class="rounded-full w-24 h-24 mx-auto mb-4 object-cover shadow-xl ring-4 ring-purple-500/50"
              onerror="this.src='/placeholder-server-icon.png'"
            />
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse"></div>
          </div>
          <h3 class="text-3xl font-bold mb-2 tracking-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            {{ serverInfo.name }}
          </h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div class="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h4 class="text-lg font-medium mb-2 text-gray-300">Members</h4>
            <p class="text-3xl font-bold text-purple-400">
              {{ serverPreview.approximate_member_count }}
            </p>
          </div>

          <div class="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h4 class="text-lg font-medium mb-2 text-gray-300">Online</h4>
            <p class="text-3xl font-bold text-green-400">
              {{ serverPreview.approximate_presence_count }}
            </p>
          </div>

          <div class="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h4 class="text-lg font-medium mb-2 text-gray-300">Boosts</h4>
            <p class="text-3xl font-bold text-pink-400">
              {{ serverInfo.premium_subscription_count || 0 }}
            </p>
          </div>
        </div>

        <div class="mt-10" data-aos="fade-up" data-aos-delay="400">
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
      
      <div v-else-if="loading" class="text-white text-center p-8">
        <div class="loader"></div>
        <p class="mt-4 text-lg">Loading server information...</p>
      </div>
      
      <div v-else-if="error" class="text-red-500 text-center p-8">
        <p class="text-xl font-bold mb-2">Error loading server information:</p>
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
.discord-button {
  background-color: #5865f2;
  color: #ffffff;
  font-weight: bold;
  padding: 12px 28px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(88, 101, 242, 0.4);
  font-size: 1.125rem;
  position: relative;
  overflow: hidden;
}

.discord-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: 0.5s;
}

.discord-button:hover::after {
  transform: translateX(100%);
}

.discord-button:hover {
  background-color: #4752c4;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2), 0 15px 20px -3px rgba(88, 101, 242, 0.6);
}

.discord-arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.discord-button:hover .discord-arrow {
  transform: translateX(8px);
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #5865f2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>