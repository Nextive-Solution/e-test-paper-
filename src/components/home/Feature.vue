<template>
  <div class="container mx-auto py-6 md:py-12 px-4 md:px-0">
     <div class="text-center">
       <p class="text-[26px] md:text-[46px] font-[700] text-[#0381e0] font-['Hind_Siliguri']">ই-টেস্ট পেপার কেন পড়বো ?</p>
     </div>
    <div class="md:flex justify-center gap-x-8 pt-4 md:pt-8">
      <div class="text-center md:text-left">
        <img loading="lazy" class="h-[280px] md:h-[420px]" src="/images/cover.jpg" alt="image"/>
      </div>
      <div class="pt-4 md:pt-0">
        <div v-for="(item , i) in features" :key="i" class="py-2">
          <div class="hidden md:block">
            <p class="text-[16px] md:text-[22px] font-[600]"><Icon class="text-[#0381e0] text-[24px]" name="material-symbols:layers"/> {{ item.label }}</p>
          </div>
          <div class="grid grid-cols-12 md:hidden">
            <div class="col-span-1">
              <Icon class="text-[#0381e0] text-[24px]" name="material-symbols:layers"/>
            </div>
            <div class="col-span-11">
              <p class="text-[16px] md:text-[22px] font-[600]">{{ item.label }}</p>
            </div>
          </div>
        </div>
        <div class="pt-4 md:pt-8 flex justify-center md:justify-start">
          <cta-button button-text="সকল বিষয়ের টেস্টপেপার একত্রে পেতে ক্লিক করো" button-design="text-[16px] bg-[#CD131D] hover:bg-[#ffffff] hover:ring-2 hover:ring-[#CD131D] text-[#ffffff] hover:text-[#000000]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CtaButton from "~/components/common/CtaButton.vue";

const features = ref([
  { label:'৯০% মূল্য সাশ্রয়ী এবং সারা বছরই ব্যবহারযোগ্য' },
  { label:'গাইড বই, সাপ্লিমেন্ট এবং টেস্ট পেপার এর বিকল্প' },
  { label:'প্রতিটি প্রশ্নের নির্ভুল উত্তর এবং ব্যাখ্যা সহ সমাধান' },
  { label:'যত খুশি তত অনুশীলন এর সুযোগ' },
  { label:'প্রতিযোগিতা মূলক প্রস্তুতি নিতে পারবে' },
  { label:'যেকোনো সমস্যা সমাধানে রয়েছে ডেটিকেটেড প্রবলেম সলভিং কমিউনিটি' },
  { label:'একবার পেমেন্ট করেই এডমিশন টেস্ট  পর্যন্ত  এক্সেস' },
])

</script>

<style lang="scss" scoped>

</style>