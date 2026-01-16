<script setup>
import { ref } from 'vue';
import Navbar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Booking from './components/TourBooking.vue';
import GardenMap from './components/GardenMap.vue';
import InquiryForm from './components/InquiryForm.vue';
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
        
        <GardenMap v-if="activeSection === 'garden'" />
        
        <InquiryForm v-if="activeSection === 'functions' || activeSection === 'inquiry'" />

        <div v-if="activeSection === 'petting'" class="py-20 text-center italic">
          <div class="w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-4xl mb-6 italic">Meet the Residents</h2>
                <p class="text-lg font-light text-gray-600 mb-8 leading-relaxed">
                    Our animals are an integral part of our farm's circle of life. From our heritage chickens to our friendly rabbits, every interaction is a chance for children to learn about nature.
                </p>
                <div class="space-y-4">
                    <div class="flex items-center space-x-4 border-b pb-4 border-[#2D4739]/10">
                        <span class="font-serif italic text-2xl text-[#8B4513]">01</span>
                        <span class="text-xs uppercase tracking-widest font-bold">The Rabbit Burrow</span>
                    </div>
                    <div class="flex items-center space-x-4 border-b pb-4 border-[#2D4739]/10">
                        <span class="font-serif italic text-2xl text-[#8B4513]">02</span>
                        <span class="text-xs uppercase tracking-widest font-bold">Chicken Run</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80" class="rounded h-full object-cover" alt="Rabbit">
                <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80" class="rounded h-full object-cover" alt="Hen">
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