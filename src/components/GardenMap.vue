<template>
  <div class="py-24 px-4 bg-white">
    <div class="w-full mx-auto text-center mb-12">
      <h2 class="text-4xl font-serif italic mb-4">The Garden</h2>
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest"> Virtual Tour</p>
    </div>
    <div class="w-full mx-auto relative rounded shadow-2xl overflow-hidden border-8 border-white">
      <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80" class="w-full h-screen object-cover" alt="Garden Map">
      
      <div class="absolute top-[25%] left-[35%] w-5 h-5 bg-white border-2 border-[#2D4739] rounded-full cursor-pointer transition-all hover:scale-150 hover:bg-[#2D4739] group">
        <span class="invisible group-hover:visible absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#2D4739] text-white text-[10px] px-4 py-1 rounded whitespace-nowrap">The Berry Patch</span>
      </div>
      <div class="absolute top-[75%] left-[50%] w-5 h-5 bg-white border-2 border-[#2D4739] rounded-full cursor-pointer transition-all hover:scale-150 hover:bg-[#2D4739] group">
        <span class="invisible group-hover:visible absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#2D4739] text-white text-[10px] px-4 py-1 rounded whitespace-nowrap">CARROTS</span>
      </div>
    </div>
  </div>
</template>