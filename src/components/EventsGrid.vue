<template>
  <section class="w-full bg-[#F9F7F2] py-24 px-12">
    <div class="mb-16">
      <h2 class="text-5xl md:text-7xl font-serif italic text-[#2D4739] mb-4">Upcoming Gatherings</h2>
      <p class="text-xl uppercase tracking-[0.3em] text-[#C5A059]">Events at the Farm</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div 
        v-for="event in events" 
        :key="event.id" 
        class="group cursor-pointer bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl"
        @click="goToDetails(event.id)"
      >
        <div class="relative h-[400px] overflow-hidden">
          <img 
            :src="event.image" 
            :alt="event.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          >
          <div class="absolute top-6 left-6 bg-[#F9F7F2] px-4 py-2 text-center shadow-md">
            <span class="block text-2xl font-bold text-[#2D4739]">{{ event.day }}</span>
            <span class="block text-xs uppercase tracking-widest text-[#C5A059]">{{ event.month }}</span>
          </div>
        </div>

        <div class="p-8 border border-[#2D4739]/5">
          <h3 class="text-3xl font-serif mb-4 text-[#2D4739] group-hover:text-[#C5A059] transition-colors">
            {{ event.title }}
          </h3>
          <p class="text-gray-600 font-light leading-relaxed mb-6 line-clamp-2">
            {{ event.description }}
          </p>
          
          <div class="flex justify-between items-center pt-6 border-t border-[#2D4739]/10">
            <span class="text-xs uppercase tracking-[0.2em] font-bold text-[#2D4739]/60">
              {{ event.time }}
            </span>
            <button class="text-xs uppercase tracking-[0.3em] font-bold text-[#2D4739] group-hover:underline underline-offset-8">
              View Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const events = [
  {
    id: 'harvest-festival',
    title: 'The Solstice Harvest',
    month: 'OCT',
    day: '24',
    time: '10:00 AM - 04:00 PM',
    description: 'A full day immersive journey through our seasonal crops, including a long-table lunch in the orchard.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80'
  },
  {
    id: 'wine-tasting',
    title: 'Vines & Views',
    month: 'NOV',
    day: '12',
    time: '04:00 PM - 07:00 PM',
    description: 'An evening of organic pairings featuring local cheeses and our signature fruit-infused selections.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80'
  }
];

const goToDetails = (id) => {
  router.push({ name: 'EventDetails', params: { id } });
};
</script>