<template>
  <main class="bg-gray-900 text-white relative overflow-hidden">
    <div class="absolute w-full h-full">
      <div class="animate-blob blur-3xl opacity-30 bg-purple-600 absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply"></div>
      <div class="animate-blob animation-delay-2000 blur-3xl opacity-30 bg-yellow-600 absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply"></div>
      <div class="animate-blob animation-delay-4000 blur-3xl opacity-30 bg-pink-600 absolute top-0 right-20 w-72 h-72 rounded-full mix-blend-multiply"></div>
    </div>

    <section class="relative py-24 md:py-32 lg:py-40">
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center" data-aos="fade-up">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 glitch" data-text="Game Wild!">
            Game Wild!
          </h1>
          <p class="text-lg md:text-xl lg:text-2xl mb-12 font-medium tracking-wide max-w-3xl mx-auto leading-relaxed">
            {{ subtitle }}
          </p>
          <a href="https://discord.com/channels/1377076282495602738" target="_blank"
            class="discord-button group hover:scale-105 transform transition-all duration-300 ease-out">
            <span class="discord-icon"><PhDiscordLogo weight="fill" /></span>
            {{ buttonText }}
            <span class="discord-arrow">→</span>
          </a>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 w-full">
        <svg class="fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 300">
          <path d="M0 0C200 100 500 120 800 80C1100 40 1400 60 1600 120C1800 180 1920 300 1920 300H0V0Z" />
        </svg>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PhDiscordLogo } from "@phosphor-icons/vue";

const subtitle = ref<string>(
  "Join players of all types, make new friends, and explore a world of fun in our Discord community!"
);
const buttonText = ref<string>("Join the Discord Server");
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
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2), 0 15px 20px -3px rgba(88, 101, 242, 0.6);
}

.discord-icon {
  font-size: 1.4rem;
  display: flex;
  align-items: center;
}

.discord-arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.discord-button:hover .discord-arrow {
  transform: translateX(8px);
}

.glitch {
  position: relative;
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  animation: glitch 500ms infinite;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75),
      0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75),
      0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
}

@keyframes animate-blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: animate-blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>