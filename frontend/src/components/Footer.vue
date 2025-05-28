<template>
  <footer class="bg-gray-900 py-8 text-gray-400">
    <div class="container mx-auto px-4">
      <div class="flex gap-8">
        <div>
          <h4 class="text-lg font-semibold mb-4">About Game Wild!</h4>
          <p class="text-sm max-w-6/12">
            We're dedicated to connecting gamers and fostering a vibrant
            community. Join us to find friends, play your favorite games, and
            experience the thrill of gaming together.
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Explore</h4>
          <ul class="space-y-2">
            <li>
              <a href="" class="hover:text-white transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="https://discord.com/channels/1377076282495602738"  target="_blank" class="hover:text-white transition-colors duration-200">
                Discord Server
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-8 pt-8 border-t border-gray-700 text-center">
        <p class="text-xs">
          © {{ new Date().getFullYear() }} Game Wild!. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>