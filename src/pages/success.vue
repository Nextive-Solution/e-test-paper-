<template>
  <div>
    <div class="flex justify-center py-2 bg-[#b8e0fc]">
      <img src="/icon/logo.svg" alt="logo"/>
    </div>
    <div class="container mx-auto px-2">
      <div class="flex justify-center py-4">
        <img loading="lazy" class="h-[60px] md:h-[90px]" src="/icon/success.png" alt="ssl"/>
      </div>
      <div class="flex text-center flex-col items-center">
        <p class="text-[24px] font-[600]">পেমেন্ট সফল!</p>
        <p class="text-[18px] font-[500] text-[#878d97] pt-2">তোমার সাবস্ক্রিপশন টি সফলভাবে চালু হয়েছে।</p>
        <p class="text-[18px] font-[500] text-black pt-2">পড়ালেখা শুরু করো আমাদের অ্যাপ অথবা ওয়েবসাইট থেকে</p>
      </div>
      <div class="pt-8">
        <p class="text-[24px] font-[600] text-center pb-4">ডাউনলোড করুন</p>
        <div class="flex justify-center pb-4 cursor-pointer">
          <a href="https://play.google.com/store/apps/details?id=com.nextive.eTestPaper" target="_blank">
            <img loading="lazy" class="h-[100px] md:h-[120px]" src="/banner/DownloadETP.png" alt="ssl"/>
          </a>
        </div>
      </div>
      <div>
        <p class="text-[18px] font-[500] text-[#878d97] text-center">অথবা,</p>
        <div class="text-center pt-4">
          <a href="https://www.etestpaper.net/" target="_blank">
            <button class="bg-[#0381e0] text-white text-[18px] font-[600] py-2 px-4 rounded-md">ভিজিট করুন
              (etestpaper.net)
            </button>
          </a>
        </div>
      </div>
      <div class="pb-8">
        <p class="text-[18px] font-[500] text-[#878d97] text-center pt-4">যে কোন প্রয়োজনে যোগাযোগ করুন</p>
        <p class="text-[18px] font-[500] text-[#878d97] text-center pt-4"><a href="tel:+8801646664222"   class="text-[#0381e0]">+8801646664222</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  const order = JSON.parse(localStorage.getItem('order'))
  const product = JSON.parse(localStorage.getItem('product'))
  if (typeof fbq === 'function') {
    fbq('track', 'Purchase', {
      category_name: "HSC E-testPaper",
      event_url: 'LandPage',
      group: order.group,
      product_name: product.name,
      product_price: product.discount_price,
      currency: 'BDT',
      level: order.level,
      phone: order.phone,
      name: order.name,
    });
  }
})
</script>

<style lang="scss" scoped>

</style>