<script setup>
import { ref } from 'vue';
import Navbar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Booking from './components/TourBooking.vue';
import GardenMap from './components/GardenMap.vue';
import InquiryForm from './components/InquiryForm.vue';
import EventsGrid from './components/EventsGrid.vue';

import About from './components/About.vue';
import Footer from './components/Footer.vue';

const activeSection = ref('home');

const navigateTo = (id) => {
  activeSection.value = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div class="antialiased bg-[#F9F7F2]">
    <Navbar @nav="navigateTo" />

    <main class="h-full">
      <div class="fade-in">
        <Hero v-if="activeSection === 'home'" @nav="navigateTo" />
        
        <About v-if="activeSection === 'about'" />
        
        <Booking v-if="activeSection === 'booking'" />
        <router-view />        
        <GardenMap v-if="activeSection === 'garden'" />
        <EventsGrid v-if="activeSection ==='picnic'"/>
        
        <InquiryForm v-if="activeSection === 'functions' || activeSection === 'inquiry'" />

        <div v-if="activeSection === 'petting'" class="py-16 md:py-24 bg-[#F9F7F2]">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div class="text-center lg:text-left order-2 lg:order-1">
          <span class="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-4 block">The Petting Area</span>
          <h2 class="text-3xl md:text-5xl mb-6 italic font-serif text-[#2D4739]">Meet the Residents</h2>
          <p class="text-base md:text-lg font-light text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Our animals are an integral part of our farm's circle of life. From our heritage chickens to our friendly rabbits, every interaction is a chance for children to learn about nature.
          </p>
          
          <div class="space-y-0">
            <div v-for="(resident, index) in [
              { num: '01', title: 'The Rabbit Burrow' },
              { num: '02', title: 'The Chicken Run' },
              { num: '03', title: 'Duck Pond' }
            ]" 
            :key="index"
            class="group flex items-center space-x-6 border-b py-5 border-[#2D4739]/10 hover:bg-[#2D4739]/5 transition-colors px-4 cursor-default">
              <span class="font-serif italic text-2xl md:text-3xl text-[#8B4513] opacity-60 group-hover:opacity-100 transition-opacity">
                {{ resident.num }}
              </span>
              <span class="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#2D4739]">
                {{ resident.title }}
              </span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 md:gap-6 order-1 lg:order-2">
          <div class="space-y-3 md:space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80" 
              class="rounded-2xl w-full aspect-[3/4] object-cover shadow-lg hover:scale-[1.02] transition-transform duration-500" 
              alt="Rabbit"
            >
            <div class="bg-[#2D4739] rounded-2xl aspect-square flex items-center justify-center p-6 text-center">
               <p class="text-white font-serif italic text-sm md:text-lg">Ethical & Organic Husbandry</p>
            </div>
          </div>
          <div class="pt-8 md:pt-12 space-y-3 md:space-y-6">
            <div class="bg-[#C5A059]/20 rounded-2xl aspect-square flex items-center justify-center p-6">
               <span class="text-[#8B4513] text-4xl">🌿</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80" 
              class="rounded-2xl w-full aspect-[3/4] object-cover shadow-lg hover:scale-[1.02] transition-transform duration-500" 
              alt="Hen"
            >
          </div>
        </div>

      </div>
    </div>
  </div>

        <div v-if="activeSection === 'table'" class="py-20 text-center italic">

          <div class="w-full mx-auto text-center">
            <h2 class="text-4xl italic mb-12">The Seasonal Menu</h2>
            <div class="border border-[#2D4739]/10 p-12 bg-white relative">
                <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2D4739] text-[#F9F7F2] px-6 py-1 text-[10px] uppercase tracking-widest font-bold">Today's Harvest</div>
                <div class="space-y-10 mt-6">
                    <div>
                        <h4 class="text-xl font-serif">Limuru Field Salad</h4>
                        <p class="text-xs text-gray-500 mt-2 uppercase tracking-widest font-bold italic">Garden Greens • Edible Flowers • Lemon Vinaigrette</p>
                    </div>
                    <div>
                        <h4 class="text-xl font-serif">Roasted Earth Bowl</h4>
                        <p class="text-xs text-gray-500 mt-2 uppercase tracking-widest font-bold italic">Wood-fired Beets • Goat Cheese • Rosemary</p>
                    </div>
                    <div>
                        <h4 class="text-xl font-serif">Berry Crumble</h4>
                        <p class="text-xs text-gray-500 mt-2 uppercase tracking-widest font-bold italic">Mountain Strawberries • Oat Crust • Honey</p>
                    </div>
                </div>
            </div>
        </div>

        </div>

      </div>
    </main>

    <section class="py-16 bg-white border-y border-[#2D4739]/10">
            <p class="text-center text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-10 font-bold">Trusted by Nairobi's Finest</p>
            <div class="flex flex-wrap justify-around items-center opacity-40 grayscale px-10 gap-8">
                <span class="text-2xl font-bold">ZUCCHINI</span>
                <span class="text-2xl font-serif italic">Artcaffé</span>
                <span class="text-2xl font-light tracking-tighter uppercase">Greenspoon</span>
                <span class="text-2xl font-bold italic">HealthyU</span>
            </div>
    </section>

    <Footer />
  </div>
</template>

<style>
/* 1. Remove .page-section { display: none } */
/* 2. Vue handles the show/hide via v-if */

.fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Global Font Settings */
body { font-family: 'Montserrat', sans-serif; }
h1, h2, h3, .serif { font-family: 'Playfair Display', serif; }
</style>