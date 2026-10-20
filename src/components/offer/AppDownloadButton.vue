<template>
  <div class="w-full flex justify-center px-4 py-4 md:py-6">
    <!-- Plain anchor on purpose: the click must reach the deeplink service as a
         real navigation (no preventDefault / fetch), or it is counted without
         the visitor ever reaching the app or store. -->
    <a :href="href" rel="noopener" @click="trackAppDownload('offer_page')"
       class="inline-flex items-center gap-2 rounded-full border-2 border-[#0381e0] bg-white px-5 py-2.5 md:px-8 md:py-3 text-[14px] md:text-[20px] font-[800] text-[#0381e0] font-['Hind_Siliguri'] transition ease-in-out duration-300 hover:-translate-y-0.5 hover:bg-[#0381e0] hover:text-white">
      <Icon name="ph:download-simple-bold" class="text-[18px] md:text-[24px] shrink-0"/>
      <span>অ্যাপ ডাউনলোড করুন</span>
    </a>
  </div>
</template>

<script setup>
const {href} = useDeeplink();
</script>
