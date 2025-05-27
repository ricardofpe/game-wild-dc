<template>
  <div class="font-sans antialiased text-gray-900">
<Hero/>
<GamingSection />
    <Rules v-if="showRules" />
  </div>
</template>

<script setup lang="ts">


import { ref } from 'vue';
import Hero from './components/Hero.vue';
import GamingSection from './components/GamingSection.vue';


const showRules = ref<boolean>(true); 
</script>