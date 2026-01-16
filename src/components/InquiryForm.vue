<script setup>
import { ref } from 'vue';

const submitted = ref(false);
const formAnchor = ref(null);

const scrollToForm = () => {
  formAnchor.value?.scrollIntoView({ behavior: 'smooth' });
};

const submitForm = () => {
  submitted.value = true;
  // Scroll to success message
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div class="bg-[#F0EEE9] min-h-screen">
    <section id="functions" class="py-24 px-4">
      <div class="w-full mx-auto text-center mb-20">
        <span class="text-xs uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-4 block">Exclusively Yours</span>
        <h2 class="text-5xl italic mb-6 font-serif">The Grounds for Hire</h2>
        <p class="w-full mx-auto text-gray-600 font-light leading-relaxed">
          From intimate candle-lit dinners to sprawling garden celebrations, our organic farm is a versatile canvas for your most important moments.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 w-full mx-auto">
        <div 
          @click="scrollToForm" 
          class="group p-8 bg-white/50 border border-transparent hover:border-[#C5A059] hover:bg-white hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          <h3 class="text-2xl font-serif italic mb-4">Garden Weddings</h3>
          <p class="text-xs text-gray-500 mb-6 leading-loose">Exchange vows surrounded by the crisp air and lush greenery of the Limuru highlands.</p>
          <span class="text-[10px] font-bold uppercase tracking-widest text-[#2D4739] border-b border-[#C5A059] pb-1">Inquire Now</span>
        </div>

        <div 
          @click="scrollToForm" 
          class="group p-8 bg-white/50 border border-transparent hover:border-[#C5A059] hover:bg-white hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          <h3 class="text-2xl font-serif italic mb-4">Milestone Events</h3>
          <p class="text-xs text-gray-500 mb-6 leading-loose">The perfect setting for baby showers, bachelorette parties, and landmark birthdays.</p>
          <span class="text-[10px] font-bold uppercase tracking-widest text-[#2D4739] border-b border-[#C5A059] pb-1">Book Space</span>
        </div>

        <div 
          @click="scrollToForm" 
          class="group p-8 bg-white/50 border border-transparent hover:border-[#C5A059] hover:bg-white hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          <h3 class="text-2xl font-serif italic mb-4">Corporate BBQs</h3>
          <p class="text-xs text-gray-500 mb-6 leading-loose">Host team-building retreats or family Sunday roasts featuring our wood-fired pits.</p>
          <span class="text-[10px] font-bold uppercase tracking-widest text-[#2D4739] border-b border-[#C5A059] pb-1">Request Quote</span>
        </div>
      </div>
    </section>

    <div ref="formAnchor" class="py-24 px-4">
      <div v-if="!submitted" class="w-full mx-auto bg-white border border-[#C5A059]/30 p-12 shadow-2xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-serif italic mb-2">Request a Proposal</h2>
          <p class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Event Concierge & Venue Hire</p>
        </div>
        
        <form @submit.prevent="submitForm" class="space-y-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <label class="text-[10px] uppercase font-bold text-gray-400">Full Name</label>
              <input type="text" required class="w-full bg-[#F9F7F2] p-4 text-sm outline-none border-none focus:ring-1 focus:ring-[#C5A059]">
            </div>
            <div class="space-y-2">
              <label class="text-[10px] uppercase font-bold text-gray-400">Email Address</label>
              <input type="email" required class="w-full bg-[#F9F7F2] p-4 text-sm outline-none border-none focus:ring-1 focus:ring-[#C5A059]">
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <label class="text-[10px] uppercase font-bold text-gray-400">Event Type</label>
              <select class="w-full bg-[#F9F7F2] p-4 text-sm outline-none border-none focus:ring-1 focus:ring-[#C5A059]">
                <option>Garden Wedding</option>
                <option>Corporate BBQ</option>
                <option>Milestone Celebration</option>
                <option>Photo/Video Shoot</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-[10px] uppercase font-bold text-gray-400">Approx. Guests</label>
              <input type="number" placeholder="e.g. 50" class="w-full bg-[#F9F7F2] p-4 text-sm outline-none border-none focus:ring-1 focus:ring-[#C5A059]">
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-[10px] uppercase font-bold text-gray-400">Message & Vision</label>
            <textarea rows="4" placeholder="Tell us about your event..." class="w-full bg-[#F9F7F2] p-4 text-sm outline-none border-none focus:ring-1 focus:ring-[#C5A059]"></textarea>
          </div>

          <button type="submit" class="w-full bg-[#2D4739] text-white py-5 text-xs font-bold uppercase tracking-widest shadow-xl hover:bg-[#3d5e4b] transition-colors">
            Submit Request
          </button>
        </form>
      </div>

      <div v-else class="text-center py-20 bg-white w-full mx-auto shadow-2xl border border-[#C5A059]/30">
        <p class="text-2xl font-serif italic text-[#2D4739]">Thank you.</p>
        <p class="text-gray-500 font-light mt-2">Our concierge will reach out shortly to discuss your vision.</p>
        <button @click="submitted = false" class="mt-8 text-[10px] uppercase tracking-widest font-bold border-b border-[#C5A059]">Send another request</button>
      </div>
    </div>
  </div>
</template>