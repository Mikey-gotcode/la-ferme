<template>
  <div class="h-full bg-[#F9F7F2] pt-32 pb-24 px-12">
     <Navbar @nav="navigateTo" />
    <button @click="$router.back()" class="mb-12 uppercase tracking-widest text-xs flex items-center hover:text-[#C5A059]">
      ← Back to Events
    </button>

    <div class="grid md:grid-cols-2 gap-20 items-start">
      <div>
        <h1 class="text-6xl md:text-8xl font-serif italic text-[#2D4739] mb-8">Event Itinerary</h1>
        <div class="space-y-12">
          <div v-for="(item, index) in itinerary" :key="index" class="flex gap-8 items-start border-l-2 border-[#C5A059] pl-8">
            <span class="text-lg font-bold text-[#C5A059] min-w-[80px]">{{ item.time }}</span>
            <div>
              <h4 class="text-2xl font-serif text-[#2D4739] mb-2">{{ item.activity }}</h4>
              <p class="text-gray-600 font-light">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-12 shadow-sm border border-[#2D4739]/5">
        <h3 class="text-3xl font-serif mb-6">Register Interest</h3>
        <p class="mb-8 text-gray-500">Limited to 20 guests per session to ensure an intimate experience.</p>
        <button class="w-full bg-[#2D4739] text-white py-5 uppercase tracking-[0.2em] font-bold !rounded-xl">
          Reserve My Place
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../../components/NavBar.vue';

// In a real app, you would fetch this data using the route id
const itinerary = [
  { time: "10:00 AM", activity: "Welcome Refreshments", detail: "Signature farm-pressed juices and herbal infusions in the garden." },
  { time: "11:30 AM", activity: "The Garden Walkthrough", detail: "A guided tour led by our head agriculturist through the nursery." },
  { time: "01:30 PM", activity: "The Long Table Lunch", detail: "A 3-course organic meal served under the jacaranda trees." }
];
</script>