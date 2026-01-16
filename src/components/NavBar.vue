<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const emit = defineEmits(['nav']);

// Navigation items array for easier management and staggered animation
const navItems = [
  { label: 'Who We Are', target: 'about' },
  { label: 'The Garden', target: 'garden' },
  { label: 'Petting Area', target: 'petting' },
  { label: 'Functions', target: 'functions', highlight: true },
  { label: 'The Table', target: 'table' }
];

const handleNav = (target) => {
  emit('nav', target);
  isMenuOpen.value = false;
};
</script>

<template>
  <nav class="w-full flex justify-between items-center px-6 md:px-12 py-6 md:py-8 sticky top-0 bg-ferme-beige/95 backdrop-blur-md z-[100] border-b border-ferme-green/5">
    
    <div 
      class="text-2xl md:text-3xl font-bold tracking-[0.3em] uppercase text-ferme-green cursor-pointer z-[110]" 
      @click="handleNav('home')"
    >
      La Ferme
    </div>

    <div class="hidden lg:flex items-center space-x-12 text-sm uppercase tracking-[0.25em] font-bold text-ferme-green">
      <button v-for="item in navItems" :key="item.target" @click="handleNav(item.target)" 
              class="hover:text-ferme-gold transition-colors" :class="{'text-green-700': item.highlight}">
        {{ item.label }}
      </button>
    </div>

    <div class="flex items-center gap-6">
      <button @click="handleNav('booking')" class="hidden md:block cta-button">Book Now</button>

      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-[110] transition-transform duration-700 ease-in-out"
        :class="{ 'rotate-[360deg]': isMenuOpen }" 
      >
        <span class="hamburger-line" :class="isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'"></span>
        <span class="hamburger-line" :class="isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'"></span>
        <span class="hamburger-line" :class="isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'"></span>
      </button>
    </div>

    <Transition name="overlay">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-ferme-beige/80 backdrop-blur-xl flex flex-col items-center justify-center z-[100] lg:hidden">
        <div class="flex flex-col items-center space-y-8">
          <button 
            v-for="(item, index) in navItems" 
            :key="item.target"
            @click="handleNav(item.target)"
            class="mobile-link"
            :style="{ transitionDelay: `${index * 100}ms` }"
            :class="{ 'show': isMenuOpen }"
          >
            {{ item.label }}
          </button>
          
          <button 
            @click="handleNav('booking')"
            class="mt-8 cta-button transition-all duration-700 transform"
            :style="{ transitionDelay: `${navItems.length * 100}ms` }"
            :class="isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
          >
            Book Now
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.hamburger-line {
  @reference "../style.css";
  @apply w-8 h-[2px] bg-ferme-green transition-all duration-500 ease-in-out transform;
}


.cta-button {
  @apply !bg-ferme-green !text-white px-8 py-3 text-xs md:text-sm uppercase tracking-[0.2em] font-bold 
         !rounded-xl border-2 border-ferme-green hover:!bg-transparent hover:!text-ferme-green transition-all duration-300;
}

.mobile-link {
  @apply text-2xl uppercase tracking-[0.3em] font-bold text-ferme-green opacity-0 translate-y-4 transition-all duration-500 ease-out;
}

.mobile-link.show {
  @apply opacity-100 translate-y-0;
}

/* Overlay Transition */
.overlay-enter-active, .overlay-leave-active {
  transition: opacity 0.6s ease;
}
.overlay-enter-from, .overlay-leave-to {
  opacity: 0;
}
</style>