<template>
  <div class="bg-[#b8e0fc]">
    <div class="bg-[#b8e0fc] flex justify-center px-2 md:px-0">
      <div class="grid grid-cols-1 md:grid-cols-3 py-4 w-full">
        <div class="text-center hidden md:block">
          <p class="text-[#0381e0] text-[22px] md:text-[26px] font-[600] pb-2 md:pb-4">কোম্পানী</p>
          <ul v-for="(item,i) in company" class="text-gray-700 dark:text-gray-400 font-[500]">
            <li class="mb-2">
              <nuxt-link :to="item.link" class="text-black text-[14px] md:text-[18px] font-[600]" target="_blank">{{ item.label }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="block md:hidden text-center">
          <p class="text-[#0381e0] text-[22px] md:text-[26px] font-[600] pb-2 md:pb-4">কোম্পানী</p>
          <div class="flex justify-center gap-x-4 pb-2">
            <div>
              <nuxt-link to="https://www.etestpaper.net/about" class="text-black text-[14px] md:text-[18px] font-[600]" target="_blank">আমাদের সম্পর্কে</nuxt-link>
            </div>
            <div>
              <nuxt-link to="https://www.etestpaper.net/about/privacy" class="text-black text-[14px] md:text-[18px] font-[600]" target="_blank">প্রাইভেসি পলিসি</nuxt-link>
            </div>
          </div>
          <div class="flex justify-center gap-x-4">
            <div>
              <nuxt-link to="https://www.etestpaper.net/about/terms" class="text-black text-[14px] md:text-[18px] font-[600]" target="_blank">টার্মস অ্যান্ড কন্ডিশন</nuxt-link>
            </div>
            <div>
              <nuxt-link to="https://www.etestpaper.net/about/refund" class="text-black text-[14px] md:text-[18px] font-[600]" target="_blank">রিফান্ড পলিসি</nuxt-link>
            </div>
          </div>
        </div>
        <div class="text-center py-4 md:py-0">
          <p class="text-[#0381e0] text-[22px] md:text-[26px] font-[600] pb-2 md:pb-4">যোগাযোগ</p>
          <ul v-for="(item,i) in contact" class="text-gray-700 dark:text-gray-400 font-[500]">
            <li class="mb-2">
              <p class="text-black ext-[14px] md:text-[18px] font-[600]">{{ item.label }} : {{ item.link }}</p>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <p class="text-[#0381e0] text-[22px] md:text-[26px] font-[600] pb-2 md:pb-4">ডাউনলোড করুন</p>
          <div class="flex justify-center pb-4 cursor-pointer">
            <a href="https://play.google.com/store/apps/details?id=com.nextive.eTestPaper" target="_blank">
              <img loading="lazy" class="h-[30px] md:h-[50px]" src="/banner/gp.svg" alt="ssl"/>
            </a>
          </div>
          <div class="flex justify-center gap-x-4">
            <div v-for="(item ,i) in footerSocialInfo" :key="i"  class="">
              <a :href="item.link" target="_blank">
                <Icon :name="item.icon"  class="text-[#000]  hover:text-[#ff8300] cursor-pointer text-[24px] md:text-[34px]"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center pb-4 px-2">
      <div class="flex justify-center pb-4">
        <img loading="lazy" class="" src="/banner/sslBanner.jpg" alt="ssl"/>
      </div>
      <p class="text-black text-[14px] md:text-[18px] font-[600]" to="/">স্বত্ব ২০২৪ ইটেস্টপেপার কর্তৃক সর্বস্বত্ব সংরক্ষিত</p>
    </div>
  </div>
</template>

<script setup>
const company = ([
  { 'label': 'আমাদের সম্পর্কে', 'link':'https://www.etestpaper.net/about' },
  { 'label': 'প্রাইভেসি পলিসি', 'link':'https://www.etestpaper.net/about/privacy' },
  { 'label': 'টার্মস অ্যান্ড কন্ডিশন', 'link':'https://www.etestpaper.net/about/terms' },
  { 'label': 'রিফান্ড পলিসি', 'link':'https://www.etestpaper.net/about/refund' },
])
const contact = ([
  { 'label': 'Support', 'link':'01646664222' },
  { 'label': 'Email', 'link':'contact.etestpaper@gmail.com' },
  { 'label': 'Trade License', 'link':'TRAD/DNCC/042640/2023' },
  { 'label': 'Address', 'link':'Mohammadpur, Dhaka - 1207' },
])
const footerSocialInfo = ([
  { 'link': 'https://www.facebook.com/etestpaper', 'icon':'ph:facebook-logo-fill'},
  { 'link': 'https://wa.me/+8801646664222', 'icon':'ph:whatsapp-logo-fill'},
  // { 'link': '/', 'icon':'ph:linkedin-logo-fill'},
  { 'link': 'https://www.youtube.com/@eTestPaperBD', 'icon':'ph:youtube-logo-fill'},
])
</script>

<style lang="scss" scoped>

</style>