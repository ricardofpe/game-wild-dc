<template>
  <section
    class="py-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden relative"
  >
    <div
      class="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="text-center md:text-left">
          <h1
            class="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight"
            style="letter-spacing: -0.025em"
          >
            Find Your Gaming Tribe
          </h1>
          <p class="text-lg md:text-xl mb-10 leading-relaxed">
            Tired of playing alone? In our Discord, you'll find friends to play
            ANY game! Whether for competitive matches, relaxed co-op, or just
            to chat about the gaming world, this is your place.
          </p>

          <ul class="mb-10 space-y-4">
            <li class="flex items-center">
              <span class="mr-3 text-green-400"><PhCheckCircle size="24" /></span>
              <span>Make friends to play your favorite games</span>
            </li>
            <li class="flex items-center">
              <span class="mr-3 text-green-400"><PhCheckCircle size="24" /></span>
              <span>Server organized by games and interests</span>
            </li>
            <li class="flex items-center">
              <span class="mr-3 text-green-400"><PhCheckCircle size="24" /></span>
              <span>Events, tournaments, and lots of fun</span>
            </li>
          </ul>
        </div>

        <div class="relative">
          <div class="game-controller">
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
  width: 250px;
  height: 166px;
  background-color: #374151;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.game-controller:hover {
  transform: scale(1.05);
}

.game-controller .body {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  background: linear-gradient(to bottom, #4b5563, #374151);
  border-radius: 8px;
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