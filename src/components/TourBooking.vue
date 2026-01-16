<script setup>
import { ref, computed } from 'vue';

const guests = ref(1);
const dateType = ref('weekday');

const pricePerPerson = computed(() => dateType.value === 'weekend' ? 12500 : 10000);
const totalPrice = computed(() => (pricePerPerson.value * guests.value).toLocaleString());
const isWeekend = computed(() => dateType.value === 'weekend');
</script>

<template>
  <div class="py-24 px-4 w-full mx-auto grid lg:grid-cols-2 gap-16 items-start">
    <div>
      <span class="text-[#C5A059] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">All-Inclusive Package</span>
      <h2 class="text-5xl font-serif italic mb-8">The Signature Tour</h2>
      <p class="text-gray-600 font-light leading-relaxed mb-8">An immersive 4-hour experience designed to reconnect you with the source of your food.</p>
      
      <ul class="space-y-6">
        <li v-for="(point, i) in [
          {t:'Guided Garden Harvest', d:'Walk through our organic rows and pick your own seasonal produce.'},
          {t:'Animal Interaction', d:'Private access to the petting area with heritage breeds.'},
          {t:'3-Course Organic Feast', d:'A chef-curated lunch at The Table.'}
        ]" :key="i" class="flex items-start space-x-4">
          <span class="text-[#C5A059] font-serif italic text-xl">0{{i+1}}</span>
          <div>
            <h4 class="font-bold text-xs uppercase tracking-widest">{{point.t}}</h4>
            <p class="text-sm text-gray-500 font-light mt-1">{{point.d}}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="bg-white border border-[#C5A059] p-10 shadow-2xl">
      <div class="flex justify-between items-center mb-8 border-b pb-6">
        <div>
          <h4 class="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Total Price</h4>
          <span class="text-4xl font-serif">KSh {{ totalPrice }}</span>
        </div>
        <span :class="isWeekend ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'" class="text-[10px] px-4 py-1 font-bold uppercase">
          {{ isWeekend ? 'Only 2 Slots Left!' : '6 Slots Left Today' }}
        </span>
      </div>

      <div class="space-y-6">
        <select v-model="dateType" class="w-full bg-[#F9F7F2] p-4 text-sm outline-none">
          <option value="weekday">Weekday (Standard - KSh 10,000)</option>
          <option value="weekend">Weekend (Peak Day - KSh 12,500)</option>
        </select>
        <div class="flex gap-4">
          <div class="flex-1">
            <label class="text-[10px] font-bold text-gray-400 uppercase">Guests</label>
            <input v-model.number="guests" type="number" min="1" class="w-full bg-[#F9F7F2] p-4 text-sm outline-none">
          </div>
          <div class="flex-1">
            <label class="text-[10px] font-bold text-gray-400 uppercase">Time</label>
            <select class="w-full bg-[#F9F7F2] p-4 text-sm outline-none"><option>09:00 AM</option><option>11:30 AM</option></select>
          </div>
        </div>
        <button class="w-full bg-[#2D4739] text-white py-5 text-xs uppercase tracking-[0.3em] font-bold shadow-lg">
          Confirm & Pay via M-Pesa
        </button>
      </div>
    </div>
  </div>
</template>