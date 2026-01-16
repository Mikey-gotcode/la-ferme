<template>
  <nav class="w-full flex justify-between items-center px-12 py-8 sticky top-0 bg-ferme-beige/95 backdrop-blur-md z-50 border-b border-ferme-green/5">
    
    <div 
      class="text-3xl font-bold tracking-[0.3em] uppercase text-ferme-green cursor-pointer hover:opacity-70 transition-opacity" 
      @click="$emit('nav', 'home')"
    >
      La Ferme
    </div>

    <div class="hidden md:flex items-center space-x-12 text-sm uppercase tracking-[0.25em] font-bold text-ferme-green">
      <button 
        @click="$emit('nav', 'about')" 
        class="!bg-transparent !border-none !p-0 hover:text-ferme-gold transition-colors"
      >
        Who We Are
      </button>
      <button 
        @click="$emit('nav', 'garden')" 
        class="!bg-transparent !border-none !p-0 hover:text-ferme-gold transition-colors"
      >
        The Garden
      </button>
      <button 
        @click="$emit('nav', 'petting')" 
        class="!bg-transparent !border-none !p-0 hover:text-ferme-gold transition-colors"
      >
        Petting Area
      </button>
      <button 
        @click="$emit('nav', 'functions')" 
        class="!bg-transparent !border-none !p-0 text-green-700 hover:text-green-900 transition-colors"
      >
        Functions
      </button>
      <button 
        @click="$emit('nav', 'table')" 
        class="!bg-transparent !border-none !p-0 hover:text-ferme-gold transition-colors"
      >
        The Table
      </button>
    </div>

    <button 
      @click="$emit('nav', 'booking')" 
      class="!bg-ferme-green !text-white px-10 py-4 text-sm uppercase tracking-[0.2em] font-bold 
             !rounded-xl !border-2 !border-ferme-green hover:!bg-transparent hover:!text-ferme-green 
             transition-all duration-300 shadow-sm block"
    >
      Book Now
    </button>
  </nav>
</template>

<style scoped>
/* This explicitly kills any global button styling for just this component */
button {
  background: none;
  border: none;
  padding: 0;
  box-shadow: none;
  border-radius: 8px;
}

/* We then manually re-add the styles for the "Book Now" button only */
.cta-button {
  background-color: #2D4739;
  color: white;
  padding: 1rem 2.5rem;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #1a2b22;
}
</style>