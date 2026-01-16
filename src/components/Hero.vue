<template>
  <div>
    <header class="h-screen flex items-center justify-center text-center text-white relative overflow-hidden bg-black">
      <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
           class="absolute inset-0 w-full h-full object-cover opacity-60" alt="Farm Sunset">
      <div class="relative z-10 w-full px-4">
        <span class="text-xs uppercase tracking-[0.5em] mb-4 block">Limuru, Kenya</span>
        <h1 class="text-5xl md:text-7xl mb-6 font-serif italic">The Signature Experience</h1>
        <p class="text-lg md:text-xl font-light italic mb-8">A curated journey through the garden, the petting area, and our seasonal table.</p>
        <div class="flex flex-col md:flex-row justify-center gap-4">
          <button @click="$emit('nav', 'booking')" class="bg-[#F9F7F2] text-[#2D4739] px-4 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-white transition">
            Reserve Signature Tour
          </button>
          <button @click="$emit('nav', 'functions')" class="border border-white text-white px-4 py-4 uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-[#2D4739] transition">
            Hire the Grounds
          </button>
        </div>
      </div>
    </header>

    <div class="overflow-hidden border-y border-[#2D4739] py-3 bg-[#F9F7F2]">
      <div class="flex whitespace-nowrap animate-ticker uppercase text-[10px] tracking-widest">
        <span class="mx-8 italic text-[#8B4513]">Now Harvesting:</span>
        <span class="mx-8">🌿 Organic Spinach</span> • <span class="mx-8">🥕 Sweet Carrots</span> • <span class="mx-8">🥬 Tuscan Kale</span> • <span class="mx-8">🍓 Mountain Strawberries</span>
        <span class="mx-8 italic text-[#8B4513]">Now Harvesting:</span>
        <span class="mx-8">🌿 Organic Spinach</span> • <span class="mx-8">🥕 Sweet Carrots</span> • <span class="mx-8">🥬 Tuscan Kale</span> • <span class="mx-8">🍓 Mountain Strawberries</span>
      </div>
    </div>

    <section class="py-24 px-4 text-center w-full mx-auto">
      <h2 class="text-3xl font-serif mb-8">Rooted in Nature</h2>
      <p class="text-lg leading-relaxed font-light text-gray-700">
        Located just an hour from Nairobi, La Ferme is more than a farm. It is a sanctuary where the soil is respected, the animals are loved, and the food is served as nature intended.
      </p>
      <div class="mt-8 flex justify-center items-center space-x-2 text-yellow-700">
        <span>★★★★★</span>
        <span class="text-xs uppercase tracking-widest text-[#2D4739] font-bold">4.8 Stars on Google</span>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pb-24">
      <div v-for="item in gridItems" :key="item.id" @click="$emit('nav', item.id)" 
           class="group relative h-screen overflow-hidden cursor-pointer">
        <img :src="item.img" class="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-700">
        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
        <div class="absolute bottom-10 left-10 text-white">
          <h3 class="text-3xl font-serif italic">{{ item.title }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const gridItems = [
  { id: 'garden', title: 'The Garden', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800' },
  { id: 'petting', title: 'The Petting Area', img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800' },
  { id: 'functions', title: 'Grounds Hire', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' }
];
</script>

<style scoped>
@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.animate-ticker { animation: ticker 30s linear infinite; display: flex; width: max-content; }
</style>