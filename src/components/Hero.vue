<template>
  <div class="bg-ferme-beige">
    <header class="min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden bg-black">
      <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
           class="absolute inset-0 w-full h-full object-cover opacity-60" alt="Farm Sunset">
      
      <div class="relative z-10 w-full px-6 max-w-5xl mx-auto">
        <span class="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 block">Limuru, Kenya</span>
        <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 font-serif italic leading-tight">
          The Signature Experience
        </h1>
        <p class="text-base md:text-xl font-light italic mb-10 max-w-2xl mx-auto opacity-90">
          A curated journey through the garden, the petting area, and our seasonal table.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button @click="$emit('nav', 'booking')" 
                  class="w-full sm:w-auto bg-[#F9F7F2] text-[#2D4739] px-8 py-4 uppercase text-[10px] md:text-xs tracking-[0.2em] font-bold hover:bg-white transition-all duration-300">
            Reserve Signature Tour
          </button>
          <button @click="$emit('nav', 'functions')" 
                  class="w-full sm:w-auto border border-white text-white px-8 py-4 uppercase text-[10px] md:text-xs tracking-[0.2em] hover:bg-white hover:text-[#2D4739] transition-all duration-300">
            Hire the Grounds
          </button>
        </div>
      </div>
    </header>

    <div class="overflow-hidden border-y border-[#2D4739]/10 py-4 bg-[#F9F7F2]">
      <div class="flex whitespace-nowrap animate-ticker uppercase text-[9px] md:text-[10px] tracking-widest text-[#2D4739]">
        <span v-for="n in 2" :key="n" class="flex items-center">
          <span class="mx-8 italic text-[#8B4513] font-bold">Now Harvesting:</span>
          <span class="mx-8">🌿 Organic Spinach</span> • <span class="mx-8">🥕 Sweet Carrots</span> • 
          <span class="mx-8">🥬 Tuscan Kale</span> • <span class="mx-8">🍓 Mountain Strawberries</span>
        </span>
      </div>
    </div>

    <section class="py-16 md:py-24 px-6 text-center max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-serif mb-6 text-[#2D4739]">Rooted in Nature</h2>
      <p class="text-base md:text-lg leading-relaxed font-light text-gray-700">
        Located just an hour from Nairobi, La Ferme is more than a farm. It is a sanctuary where the soil is respected, the animals are loved, and the food is served as nature intended.
      </p>
      <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-2 text-yellow-700">
        <span class="text-lg">★★★★★</span>
        <span class="text-[10px] uppercase tracking-[0.2em] text-[#2D4739] font-bold">4.8 Stars on Google</span>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 px-1 md:px-4 pb-4 md:pb-24">
      <div v-for="item in gridItems" :key="item.id" @click="$emit('nav', item.id)" 
           class="group relative h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden cursor-pointer bg-gray-200">
        
        <img :src="item.img" 
             class="h-full w-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
             :alt="item.title">
        
        <div class="absolute inset-0 bg-black/30 md:bg-black/20 md:group-hover:bg-transparent transition-all duration-500"></div>
        
        <div class="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-serif italic">{{ item.title }}</h3>
          <div class="w-12 h-[1px] bg-white mt-2 transform origin-left transition-transform duration-500 scale-x-100 md:scale-x-0 md:group-hover:scale-x-100"></div>
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
@keyframes ticker { 
  0% { transform: translateX(0); } 
  100% { transform: translateX(-50%); } 
}
.animate-ticker { 
  animation: ticker 40s linear infinite; 
  display: flex; 
  width: max-content; 
}

/* Ensure smooth image rendering */
img {
  backface-visibility: hidden;
}
</style>