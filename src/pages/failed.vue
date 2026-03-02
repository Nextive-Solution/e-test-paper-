<template>
  <div>
    <div class="flex justify-center py-2 bg-[#b8e0fc]">
      <img src="/icon/logo.svg" alt="logo"/>
    </div>
    <div class="container mx-auto px-2">
      <div class="flex justify-center py-6">
        <div class="w-20 h-20 md:w-24 md:h-24 bg-red-100 rounded-full flex items-center justify-center">
          <Icon class="text-red-500 text-[40px] md:text-[52px]" name="ph:x-circle-fill"/>
        </div>
      </div>
      <div class="flex text-center flex-col items-center">
        <p class="text-[24px] font-[600] text-red-600">পেমেন্ট ব্যর্থ হয়েছে!</p>
        <p class="text-[18px] font-[500] text-[#878d97] pt-2">দুঃখিত, তোমার পেমেন্ট সম্পন্ন হয়নি।</p>
        <p class="text-[18px] font-[500] text-[#878d97] pt-1">অনুগ্রহ করে পুনরায় চেষ্টা করো।</p>
      </div>
      <div class="text-center pt-8">
        <a href="/">
          <button class="bg-gradient-to-r from-[#0d568b] to-[#2f8ce2] text-white text-[18px] font-[600] py-3 px-8 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            আবার চেষ্টা করো
          </button>
        </a>
      </div>
      <div class="pt-8">
        <p class="text-[24px] font-[600] text-center pb-4">অ্যাপ ডাউনলোড করো</p>
        <div class="flex justify-center gap-3 pb-4">
          <a href="https://apps.apple.com/us/app/etestpaper/id6749287735" target="_blank" class="inline-block transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110">
            <img loading="lazy" src="/icon/apple.webp" alt="Download on App Store" class="h-[42px] md:h-[48px] rounded-lg"/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.nextive.eTestPaper" target="_blank" class="inline-block transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110">
            <img loading="lazy" src="/icon/android.webp" alt="Get it on Google Play" class="h-[42px] md:h-[48px] rounded-lg"/>
          </a>
        </div>
      </div>
      <div class="pb-8">
        <p class="text-[18px] font-[500] text-[#878d97] text-center pt-4">যে কোন প্রয়োজনে যোগাযোগ করুন</p>
        <p class="text-[18px] font-[500] text-[#878d97] text-center pt-4">
          <a href="tel:+8801646664222" class="text-[#0381e0]">+8801646664222</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
