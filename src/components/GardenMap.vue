<script setup>
import { ref } from 'vue';

// Track which marker is active for mobile "taps"
const activeMarker = ref(null);

const markers = [
  { id: 1, title: 'The Berry Patch', top: '25%', left: '35%' },
  { id: 2, title: 'Heritage Carrots', top: '75%', left: '50%' },
  { id: 3, title: 'The Greenhouse', top: '45%', left: '65%' }
];

const toggleMarker = (id) => {
  if (activeMarker.value === id) {
    activeMarker.value = null;
  } else {
    activeMarker.value = id;
  }
};
</script>

<template>
  <section class="py-16 md:py-24 px-4 bg-white">
    <div class="w-full mx-auto text-center mb-10 md:mb-16">
      <h2 class="text-3xl md:text-5xl font-serif italic mb-4 text-[#2D4739]">The Garden</h2>
      <div class="flex items-center justify-center space-x-4">
        <span class="h-[1px] w-8 bg-gray-300"></span>
        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Interactive Tour</p>
        <span class="h-[1px] w-8 bg-gray-300"></span>
      </div>
    </div>

    <div class="max-w-6xl mx-auto relative rounded-xl shadow-2xl overflow-hidden border-4 md:border-8 border-white bg-gray-100 aspect-[4/5] md:aspect-video">
      
      <img 
        src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80" 
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110" 
        alt="Garden Map"
      >

      <div 
        v-for="marker in markers" 
        :key="marker.id"
        class="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20"
        :style="{ top: marker.top, left: marker.left }"
      >
        <div class="absolute inset-0 animate-ping rounded-full bg-white/50 scale-150"></div>
        
        <button 
          @click="toggleMarker(marker.id)"
          @mouseenter="activeMarker = marker.id"
          @mouseleave="activeMarker = null"
          class="relative w-6 h-6 md:w-8 md:h-8 bg-white border-2 border-[#2D4739] rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-125 focus:outline-none"
          :class="{ '!bg-[#2D4739] scale-125': activeMarker === marker.id }"
        >
          <div 
            class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors"
            :class="activeMarker === marker.id ? 'bg-white' : 'bg-[#2D4739]'"
          ></div>
        </button>

        <Transition name="fade">
          <div 
            v-if="activeMarker === marker.id"
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 pointer-events-none"
          >
            <div class="bg-[#2D4739] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded shadow-xl whitespace-nowrap">
              {{ marker.title }}
              <div class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#2D4739]"></div>
            </div>
          </div>
        </Transition>
      </div>

      <div class="absolute bottom-4 left-4 right-4 md:hidden pointer-events-none">
        <p class="bg-black/40 backdrop-blur-md text-white text-[9px] text-center py-2 rounded-full uppercase tracking-widest">
          Tap the markers to explore
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>