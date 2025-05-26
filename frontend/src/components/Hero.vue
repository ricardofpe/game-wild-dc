<template>
  <section
    class="bg-gradient-to-br from-blue-900 to-purple-800 text-white py-16 md:py-24 relative overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 300"
        fill="none"
      >
        <path
          d="M0 0C200 100 500 120 800 80C1100 40 1400 60 1600 120C1800 180 1920 300 1920 300H0V0Z"
          fill="#2C3E50"
        />
      </svg>
    </div>

    <div class="container mx-auto text-center relative z-10">
      <h1
        class="text-4xl md:text-5xl font-extrabold mb-4 glitch"
        data-text="Game Wild!"
      >
        Game Wild!
      </h1>
      <p class="text-base md:text-lg mb-8 tracking-wide">{{ subtitle }}</p>
      <a
        :href="discordLink"
        target="_blank"
        class="discord-button group"
      >
        <span class="discord-icon"><PhDiscordLogo /></span>
        {{ buttonText }}
        <span class="discord-arrow">→</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PhDiscordLogo } from "@phosphor-icons/vue";

const subtitle = ref<string>(
  "Join players of all types, make new friends, and explore a world of fun in our Discord community!"
);
const discordLink = ref<string>("https://discord.gg/");
const buttonText = ref<string>("Join the Discord Server");
</script>

<style scoped>
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

@media (min-width: 768px) {
  .discord-button {
    padding: 12px 24px;
    gap: 10px;
    font-size: 1.125rem;
  }
}

.discord-button:hover {
  background-color: #4752c4;
  transform: translateY(-2px);
}

.discord-icon {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

.discord-arrow {
  transition: transform 0.2s ease;
  display: inline-block;
}

.discord-button:hover .discord-arrow {
  transform: translateX(5px);
}

.glitch {
  position: relative;
  overflow: hidden;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  text-shadow: -1px 0 red, 1px 0 blue;
  clip: rect(0, 900px, 0, 0);
}

.glitch::before {
  left: 2px;
  text-shadow: -1px 0 red, 0 0 blue;
  animation: glitch-anim 2s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: 1px 0 blue, 0 0 red;
  animation: glitch-anim2 2s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% {
    clip: rect(26px, 9999px, 22px, 0);
  }
  5% {
    clip: rect(35px, 9999px, 61px, 0);
  }
  10% {
    clip: rect(6px, 9999px, 43px, 0);
  }
  15% {
    clip: rect(15px, 9999px, 10px, 0);
  }
  20% {
    clip: rect(45px, 9999px, 16px, 0);
  }
  25% {
    clip: rect(22px, 9999px, 14px, 0);
  }
  30% {
    clip: rect(23px, 9999px, 37px, 0);
  }
  35% {
    clip: rect(31px, 9999px, 29px, 0);
  }
  40% {
    clip: rect(31px, 9999px, 37px, 0);
  }
  45% {
    clip: rect(26px, 9999px, 29px, 0);
  }
  50% {
    clip: rect(41px, 9999px, 25px, 0);
  }
  55% {
    clip: rect(4px, 9999px, 41px, 0);
  }
  60% {
    clip: rect(44px, 9999px, 10px, 0);
  }
  65% {
    clip: rect(18px, 9999px, 20px, 0);
  }
  70% {
    clip: rect(32px, 9999px, 21px, 0);
  }
  75% {
    clip: rect(46px, 9999px, 18px, 0);
  }
  80% {
    clip: rect(2px, 9999px, 47px, 0);
  }
  85% {
    clip: rect(4px, 9999px, 20px, 0);
  }
  90% {
    clip: rect(42px, 9999px, 35px, 0);
  }
  95% {
    clip: rect(16px, 9999px, 20px, 0);
  }
  100% {
    clip: rect(42px, 9999px, 29px, 0);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(24px, 9999px, 3px, 0);
  }
  5% {
    clip: rect(12px, 9999px, 48px, 0);
  }
  10% {
    clip: rect(47px, 9999px, 33px, 0);
  }
  15% {
    clip: rect(47px, 9999px, 36px, 0);
  }
  20% {
    clip: rect(30px, 9999px, 16px, 0);
  }
  25% {
    clip: rect(27px, 9999px, 30px, 0);
  }
  30% {
    clip: rect(31px, 9999px, 39px, 0);
  }
  35% {
    clip: rect(10px, 9999px, 14px, 0);
  }
  40% {
    clip: rect(32px, 9999px, 29px, 0);
  }
  45% {
    clip: rect(47px, 9999px, 16px, 0);
  }
  50% {
    clip: rect(47px, 9999px, 38px, 0);
  }
  55% {
    clip: rect(48px, 9999px, 48px, 0);
  }
  60% {
    clip: rect(36px, 9999px, 33px, 0);
  }
  65% {
    clip: rect(49px, 9999px, 44px, 0);
  }
  70% {
    clip: rect(22px, 9999px, 25px, 0);
  }
  75% {
    clip: rect(16px, 9999px, 41px, 0);
  }
  80% {
    clip: rect(27px, 9999px, 9px, 0);
  }
  85% {
    clip: rect(37px, 9999px, 34px, 0);
  }
  90% {
    clip: rect(35px, 9999px, 44px, 0);
  }
  95% {
    clip: rect(1px, 9999px, 3px, 0);
  }
  100% {
    clip: rect(33px, 9999px, 24px, 0);
  }
}
</style>