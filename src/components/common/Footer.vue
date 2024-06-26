<template>
  <div class="bg-[#b8e0fc] flex justify-center px-2 md:px-0">
    <div class="grid grid-cols-1 md:grid-cols-3 py-4 w-full">
      <div class="text-center">
        <p class="text-[#0381e0] text-[26px] font-[600] pb-4">কোম্পানী</p>
        <ul v-for="(item,i) in company" class="text-gray-700 dark:text-gray-400 font-[500]">
          <li class="mb-2">
            <nuxt-link :to="item.link" class="text-black text-[18px] font-[600]">{{ item.label }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="text-center py-4 md:py-0">
        <p class="text-[#0381e0] text-[26px] font-[600] pb-4">যোগাযোগ</p>
        <ul v-for="(item,i) in contact" class="text-gray-700 dark:text-gray-400 font-[500]">
          <li class="mb-2">
            <p class="text-black text-[18px] font-[600]">{{ item.label }} : {{ item.link }}</p>
          </li>
        </ul>
        <div class="flex justify-center pb-4">
          <img class="h-[50px]" src="/images/SSLCommers.png" alt="ssl"/>
        </div>
        <nuxt-link class="text-black text-[18px] font-[600]" to="/">স্বত্ব ২০২৪ ইটেস্টপেপার কর্তৃক সর্বস্বত্ব সংরক্ষিত</nuxt-link>
      </div>
      <div class="text-center">
        <p class="text-[#0381e0] text-[26px] font-[600] pb-4">ডাউনলোড করুন</p>
        <div class="flex justify-center pb-4 cursor-pointer">
          <img class="h-[40px] md:h-[50px]" src="/images/googlePlay.png" alt="ssl"/>
        </div>
        <div class="flex justify-center gap-x-4">
          <div v-for="(item ,i) in footerSocialInfo" :key="i"  class="">
            <Icon :name="item.icon"  class="text-[#000]  hover:text-[#ff8300] cursor-pointer text-[34px]"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const company = ([
  { 'label': 'আমাদের সম্পর্কে', 'link':'/' },
  { 'label': 'প্রাইভেসি পলিসি', 'link':'/' },
  { 'label': 'টার্মস অ্যান্ড কন্ডিশন', 'link':'/' },
  { 'label': 'রিফান্ড পলিসি', 'link':'/' },
])
const contact = ([
  { 'label': 'Support', 'link':'01646664222' },
  { 'label': 'Email', 'link':'contact.etestpaper@gmail.com' },
  { 'label': 'Trade License', 'link':'TRAD/DNCC/042640/2023' },
  { 'label': 'Address', 'link':'Mohammadpur, Dhaka - 1207' },
])
const footerSocialInfo = ([
  { 'link': '/', 'icon':'ph:facebook-logo-fill'},
  { 'link': '/', 'icon':'ph:whatsapp-logo-fill'},
  { 'link': '/', 'icon':'ph:linkedin-logo-fill'},
  { 'link': '/', 'icon':'ph:youtube-logo-fill'},
])
</script>

<style lang="scss" scoped>

</style>