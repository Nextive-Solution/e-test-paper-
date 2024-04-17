<template>
  <div class="container mx-auto py-12">
    <div class="text-center">
      <p class="2xl:text-[46px] font-[700] text-[#0381e0]">ই-টেস্টপেপার এর স্পেশাল ফিচারসমূহ:</p>
    </div>
    <div class="flex justify-center gap-x-8 pt-8">
      <div class="pt-3">
        <img class="h-[520px]" src="/images/cover3.jpg" alt="image"/>
      </div>
      <div>
        <div v-for="(item , i) in features" :key="i" class="py-3">
          <div class="flex items-center gap-x-3">
            <Icon class="text-[#0381e0]" name="ep:star"/>
            <p class="2xl:text-[22px] font-[600]">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center pt-8">
      <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#0381e0] hover:bg-[#ffffff]  hover:ring-2 ring-[#0381e0] text-[#ffffff] hover:text-[#000000] py-3 px-6 rounded-[30px] font-[600]">সকল ফিচারের এক্সেস পেতে সাবস্ক্রাইব করুন</button>
    </div>
  </div>
</template>

<script setup>
const features = ref([
  { label:'বিগত ৫ বছরের (২০১৮-২০২৩) বোর্ড প্রশ্ন ও নির্ভুল সমাধান' },
  { label:'গুরুত্বপূর্ন কলেজ সমূহের ২ বছরের(২০২৩-২০২৪) প্রশ্ন ও নির্ভূল সমাধান' },
  { label:'অধ্যায় এবং টপিক ভিত্তিক হাজারো সৃজনশীল ও বহুনির্বাচনী প্রশ্ন ও নির্ভূল সমাধান' },
  { label:'অধ্যায় ভিত্তিক বিভিন্ন বিশ্ববিদ্যালয়ে আসা বিগত ৫ বছরের প্রশ্ন ও নির্ভূল সমাধান' },
  { label:'যেকোন টপিক এবং প্রশ্ন সার্চ করে পড়া যাবে' },
  { label:'গুরুত্বপূর্ন সিকিউ এবং এমসিকিউ আলাদা ভাবে মার্ক করে রাখা এবং প্র্যাকটিস করা' },
  { label:'প্রতিটি পরীক্ষায় দেশব্যাপী শিক্ষার্থীদের মাঝে নিজের অবস্থান দেখতে পারবে' },
  { label:'ভুল করা প্রশ্নগুলো আলাদাভাবে প্র্যাকটিস করার সুযোগ' },
  { label:'ডেটিকেটেড প্রবলেম সলভিং কমিউনিটি' },
])
</script>

<style lang="scss" scoped>

</style>