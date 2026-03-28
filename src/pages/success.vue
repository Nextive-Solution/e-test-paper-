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

  // Facebook Pixel Purchase Event
  if (typeof fbq === 'function') {
    fbq('track', 'Purchase', {
      category_name: "HSC E-testPaper",
      event_url: 'LandPage',
      group: order?.group,
      product_name: product?.name,
      product_price: product?.displayPrice,
      currency: 'BDT',
      level: order?.level,
      phone: order?.phone,
      name: order?.name,
    });
  }

  // GTM dataLayer Purchase Event
  if (order && product) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: Date.now().toString(),
        currency: 'BDT',
        value: product.displayPrice,
        items: [
          {
            item_id: product.name,
            item_name: product.name,
            item_brand: 'E-TestPaper',
            item_category: 'HSC Subscription',
            item_variant: order.group,
            price: product.displayPrice,
            quantity: 1,
          },
        ],
      },
      user_data: {
        phone: order.phone,
        name: order.name,
        batch: order.level,
        group: order.group,
      }
    });

    // Also push add_payment_info event
    window.dataLayer.push({
      event: 'add_payment_info',
      ecommerce: {
        currency: 'BDT',
        value: product.displayPrice,
        payment_type: 'Online Payment',
        items: [
          {
            item_id: product.name,
            item_name: product.name,
            item_brand: 'E-TestPaper',
            item_category: 'HSC Subscription',
            price: product.displayPrice,
            quantity: 1,
          },
        ],
      },
    });
  }
})
</script>

<style lang="scss" scoped>

</style>