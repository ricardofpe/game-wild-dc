<template>
  <div class="font-sans antialiased text-gray-900">
<Hero/>
<GamingSection />
<ServerDc/>
    <Rules v-if="showRules" />
  </div>
</template>

<script setup lang="ts">


import { ref } from 'vue';
import Hero from './components/Hero.vue';
import GamingSection from './components/GamingSection.vue';
import ServerDc from './components/ServerDc.vue';


const showRules = ref<boolean>(true); 
</script>