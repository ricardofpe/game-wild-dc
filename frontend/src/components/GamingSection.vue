<template>
  <section class="py-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden relative">
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="text-center md:text-left" data-aos="fade-right">
          <h1 class="text-3xl md:text-2xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Find Your Gaming Tribe
          </h1>
          <p class="text-lg md:text-xl mb-10 leading-relaxed">
            Tired of playing alone? In our Discord, you'll find friends to play
            ANY game! Whether for competitive matches, relaxed co-op, or just
            to chat about the gaming world, this is your place.
          </p>

          <ul class="mb-10 space-y-4">
            <li class="flex items-center transform hover:translate-x-2 transition-transform duration-300">
              <span class="mr-3 text-green-400"><PhCheckCircle size="24" weight="fill" /></span>
              <span>Make friends to play your favorite games</span>
            </li>
            <li class="flex items-center transform hover:translate-x-2 transition-transform duration-300">
              <span class="mr-3 text-green-400"><PhCheckCircle size="24" weight="fill" /></span>
              <span>Server organized by games and interests</span>
            </li>
            <li class="flex items-center transform hover:translate-x-2 transition-transform duration-300">
              <span class="mr-3 text-green-400"><PhCheckCircle size="24" weight="fill" /></span>
              <span>Events, tournaments, and lots of fun</span>
            </li>
          </ul>
        </div>

        <div class="relative" data-aos="fade-left">
          <div class="game-controller hover:scale-110 transition-transform duration-500">
            <div class="body"></div>
            <div class="dpad">
              <div class="up"></div>
              <div class="right"></div>
              <div class="down"></div>
              <div class="left"></div>
              <div class="center"></div>
            </div>
            <div class="buttons">
              <div class="button button-y">Y</div>
              <div class="button button-x">X</div>
              <div class="button button-b">B</div>
              <div class="button button-a">A</div>
            </div>
            <div class="sticks">
              <div class="stick left"></div>
              <div class="stick right"></div>
            </div>
            <div class="triggers">
              <div class="trigger left"></div>
              <div class="trigger right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhCheckCircle } from "@phosphor-icons/vue";
</script>

<style scoped>
.game-controller {
  position: relative;
  margin: auto;
  width: 300px;
  height: 200px;
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.game-controller::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: rotate(45deg) translateY(-100%);
  }
  100% {
    transform: rotate(45deg) translateY(100%);
  }
}

.game-controller .body {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  background: linear-gradient(135deg, #4b5563 0%, #374151 100%);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.game-controller .dpad div,
.game-controller .buttons .button,
.game-controller .sticks .stick {
  transition: all 0.3s ease;
}

.game-controller .dpad div:hover,
.game-controller .buttons .button:hover,
.game-controller .sticks .stick:hover {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(67, 56, 202, 0.7);
}

.game-controller .dpad {
  position: absolute;
  top: 25px;
  left: 15px;
  width: 50px;
  height: 50px;
}

.game-controller .dpad div {
  position: absolute;
  background-color: #1f2937;
  transition: background-color 0.2s ease;
}

.game-controller .dpad div:hover {
  background-color: #4338ca;
}

.game-controller .dpad .up {
  top: 0;
  left: 17px;
  width: 16px;
  height: 16px;
}

.game-controller .dpad .right {
  top: 17px;
  right: 0;
  width: 16px;
  height: 16px;
}

.game-controller .dpad .down {
  bottom: 0;
  left: 17px;
  width: 16px;
  height: 16px;
}

.game-controller .dpad .left {
  top: 17px;
  left: 0;
  width: 16px;
  height: 16px;
}

.game-controller .dpad .center {
  top: 17px;
  left: 17px;
  width: 16px;
  height: 16px;
  background-color: #4338ca;
}

.game-controller .buttons {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
}

.game-controller .buttons .button {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #4338ca;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  position: absolute;
  font-size: 0.8rem;
  transition: background-color 0.2s ease;
}

.game-controller .buttons .button:hover {
  background-color: #6d28d9;
}

.game-controller .buttons .button-y {
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
}

.game-controller .buttons .button-x {
  left: -4px;
  top: 50%;
  transform: translateY(-50%);
}

.game-controller .buttons .button-b {
  right: -4px;
  top: 50%;
  transform: translateY(-50%);
}

.game-controller .buttons .button-a {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
}

.game-controller .sticks {
  position: absolute;
  bottom: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
}

.game-controller .sticks .stick {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #4338ca;
  transition: background-color 0.2s ease;
}

.game-controller .sticks .stick:hover {
  background-color: #6d28d9;
}

.game-controller .triggers {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
}

.game-controller .triggers .trigger {
  width: 30px;
  height: 12px;
  background-color: #1f2937;
  transition: background-color 0.2s ease;
}

.game-controller .triggers .trigger:hover {
  background-color: #4338ca;
}
</style>