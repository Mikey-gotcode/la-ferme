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

const eventTypes = ['Garden Wedding', 'Corporate BBQ', 'Milestone Celebration', 'Photo/Video Shoot'];
</script>

<template>
  <div class="bg-[#F0EEE9] min-h-screen">
    <section id="functions" class="py-16 md:py-24 px-6 md:px-4">
      <div class="max-w-4xl mx-auto text-center mb-12 md:mb-20">
        <span class="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-4 block">Exclusively Yours</span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl italic mb-6 font-serif leading-tight">The Grounds for Hire</h2>
        <p class="max-w-2xl mx-auto text-gray-600 font-light leading-relaxed text-sm md:text-base">
          From intimate candle-lit dinners to sprawling garden celebrations, our organic farm is a versatile canvas for your most important moments.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(card, index) in [
            { title: 'Garden Weddings', text: 'Exchange vows surrounded by the crisp air and lush greenery of the Limuru highlands.', btn: 'Inquire Now' },
            { title: 'Milestone Events', text: 'The perfect setting for baby showers, bachelorette parties, and landmark birthdays.', btn: 'Book Space' },
            { title: 'Corporate BBQs', text: 'Host team-building retreats or family Sunday roasts featuring our wood-fired pits.', btn: 'Request Quote' }
          ]"
          :key="index"
          @click="scrollToForm" 
          class="group p-6 md:p-8 bg-white/60 backdrop-blur-sm border border-transparent hover:border-[#C5A059] hover:bg-white md:hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl"
        >
          <h3 class="text-xl md:text-2xl font-serif italic mb-4 text-[#2D4739]">{{ card.title }}</h3>
          <p class="text-xs md:text-sm text-gray-500 mb-6 leading-loose">{{ card.text }}</p>
          <span class="text-[10px] font-bold uppercase tracking-widest text-[#2D4739] border-b border-[#C5A059] pb-1 group-hover:text-[#C5A059] transition-colors">
            {{ card.btn }}
          </span>
        </div>
      </div>
    </section>

    <div ref="formAnchor" class="py-12 md:py-24 px-4 md:px-6">
      <div v-if="!submitted" class="max-w-3xl mx-auto bg-white border border-[#C5A059]/30 p-6 md:p-12 shadow-2xl rounded-sm">
        <div class="text-center mb-10 md:mb-12">
          <h2 class="text-3xl md:text-4xl font-serif italic mb-2 text-[#2D4739]">Request a Proposal</h2>
          <p class="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">Event Concierge & Venue Hire</p>
        </div>
        
        <form @submit.prevent="submitForm" class="space-y-6 md:space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div class="space-y-2">
              <label class="text-[9px] md:text-[10px] uppercase font-bold text-gray-400">Full Name</label>
              <input type="text" required class="form-input">
            </div>
            <div class="space-y-2">
              <label class="text-[9px] md:text-[10px] uppercase font-bold text-gray-400">Email Address</label>
              <input type="email" required class="form-input">
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div class="space-y-2">
              <label class="text-[9px] md:text-[10px] uppercase font-bold text-gray-400">Event Type</label>
              <select class="form-input appearance-none">
                <option v-for="type in eventTypes" :key="type">{{ type }}</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-[9px] md:text-[10px] uppercase font-bold text-gray-400">Approx. Guests</label>
              <input type="number" placeholder="e.g. 50" class="form-input">
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-[9px] md:text-[10px] uppercase font-bold text-gray-400">Message & Vision</label>
            <textarea rows="4" placeholder="Tell us about your event..." class="form-input"></textarea>
          </div>

          <button type="submit" class="w-full bg-[#2D4739] text-white py-4 md:py-5 text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-[#3d5e4b] active:scale-[0.98] transition-all">
            Submit Request
          </button>
        </form>
      </div>

      <div v-else class="max-w-2xl mx-auto text-center py-16 md:py-20 bg-white shadow-2xl border border-[#C5A059]/30 px-6">
        <div class="mb-6 text-[#C5A059] text-4xl">✓</div>
        <p class="text-2xl md:text-3xl font-serif italic text-[#2D4739]">Thank you.</p>
        <p class="text-gray-500 font-light mt-2 text-sm md:text-base">Our concierge will reach out shortly to discuss your vision.</p>
        <button @click="submitted = false" class="mt-8 text-[10px] uppercase tracking-widest font-bold border-b border-[#C5A059] hover:text-[#C5A059] transition-colors">
          Send another request
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

  @reference "../style.css";
  
.form-input {
  @apply w-full bg-[#F9F7F2] p-3 md:p-4 text-sm outline-none border-none focus:ring-1 focus:ring-[#C5A059] transition-all rounded-sm;
}
</style>