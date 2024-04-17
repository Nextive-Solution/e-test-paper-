<template>
  <div class="container mx-auto py-12">
     <div class="text-center">
       <p class="2xl:text-[46px] font-[700] text-[#0381e0]">ই-টেস্ট পেপার কেনো পড়বো ?</p>
     </div>
    <div class="flex justify-center gap-x-8 pt-8">
      <div>
        <img class="h-[420px]" src="/images/cover.jpg" alt="image"/>
      </div>
      <div>
        <div v-for="(item , i) in features" :key="i" class="py-2">
          <div class="flex items-center gap-x-3">
            <Icon class="text-[#0381e0]" name="ph:star-of-david-bold"/>
            <p class="2xl:text-[22px] font-[600]">{{ item.label }}</p>
          </div>
        </div>
        <div class="pt-8">
          <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#0381e0] hover:bg-[#ffffff]  hover:ring-2 ring-[#0381e0] text-[#ffffff] hover:text-[#000000] py-3 px-6 rounded-[30px] font-[600]">পড়ালেখা শুরু করুন</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = ref([
  { label:'৯০% মূল্য সাশ্রয়ী এবং সারা বছরই ব্যবহারযোগ্য' },
  { label:'গাইড বই, সাপলিমেন্ট এবং টেস্ট পেপার এর বিকল্প' },
  { label:'প্রতিটি প্রশ্নের নির্ভূল উত্তর এবং ব্যাখ্যা সহ সমাধান' },
  { label:'যত খুশি তত অনুশীলন এর সুযোগ' },
  { label:'প্রতিযোগিতা মূলক প্রস্তুতি নিতে পারবে' },
  { label:'যেকোনো সমস্যা সমাধানে রয়েছে ডেটিকেটেড প্রবলেম সলভিং কমিউনিটি' },
  { label:'মাত্র ১ টি সাবস্ক্রিপশনেই পরীক্ষা পর্যন্ত পূর্নাঙ্গ এক্সেস পাবে।' },
])
</script>

<style lang="scss" scoped>

</style>