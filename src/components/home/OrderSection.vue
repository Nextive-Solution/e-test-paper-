<template>
  <div class="container mx-auto py-6 md:py-12 px-4 md:px-0">
    <div class="text-center">
      <p class="text-[26px] md:text-[46px] font-[700] text-[#0381e0]">
        প্রয়োজনে কল করো- <a href="tel:+8801646664222" class="text-[#0381e0]">01646664222</a>
      </p>
    </div>
    <div class="text-center pt-2 md:pt-4">
      <p class="text-[16px] md:text-[26px]  text-[#000000] font-[600]">ই-টেস্টপেপার এর পূর্নাঙ্গ এক্সেস পেতে</p>
      <p class="text-[16px] md:text-[26px]  text-[#000000] font-[600]">তোমার <span class="text-[#d30163]">ব্যাচ</span>,
        <span class="text-[#7b37f4]">নাম</span>, <span class="text-[#d30163]">ফোন নাম্বার</span> এবং <span
            class="text-[#7b37f4]">গ্রুপ</span> সিলেক্ট করে</p>
      <p class="text-[16px] md:text-[26px]  text-[#000000] font-[600]"><span
          class="text-[#ad00df]">"কনফার্ম অর্ডার"</span> বাটনে ক্লিক করো</p>
    </div>
    <div class="pt-2 md:pt-8">
      <div class="md:flex justify-center gap-x-4">
        <div v-for="(item, i) in productInfo" :key="i" class="w-full py-2 md:py-0 xl:w-[40%]">
          <div @click="selectedProduct = item"
               :class="selectedProduct === item ? 'text-[#0381e0] ring-2 ring-[#0381e0]' : 'ring-2 ring-[#9fa4a8]'"
               class="cursor-pointer rounded-md  bg-white p-2  flex items-center gap-x-4 w-full">
            <div class="bg-[#13619c] text-[30px] md:text-[50px] font-extrabold text-white px-4 rounded-md italic">
              {{ 25 + i }}
            </div>
            <div>
              <div class="flex items-center gap-x-2">
                <p class="text-[18px] md:text-[25px] font-[700]">{{ item.name }}</p>
                <div v-if="selectedProduct === item">
                  <Icon class="text-green-500 text-[24px]" name="ph:check-circle-fill"/>
                </div>
              </div>
              <p class="text-[14px] md:text-[20px] font-[600]"> <span class="text-red-500 line-through italic pr-4">{{
                  item.price
                }}</span> ৳ {{ item.discount_price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex justify-center md:pt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 w-full xl:w-[80%] gap-x-12">
        <div class="order-2 md:order-1">
          <div class="text-center">
            <p class="text-[24px] md:text-[24px] text-center md:text-center font-[600] border-b-2 border-black">Order
              Details</p>
          </div>
          <div class="pt-4">
            <label for="name" class="text-[16px] font-[600]">Name <span class="text-red-500">*</span></label>
            <input v-model="name" type="text"
                   class="border-2 border-[#0381e0] text-[16px] rounded-md px-2 py-1 md:py-2 flex items-center w-full"
                   placeholder="Enter your name"/>
          </div>
          <div class="pt-4">
            <label for="name" class="text-[16px] font-[600]">Phone Number<span class="text-red-500">*</span></label>
            <input v-model="phone" type="text"
                   class="border-2 border-[#0381e0] text-[16px] rounded-md px-2 py-1 md:py-2 flex items-center w-full"
                   placeholder="01XXXXXXXXX"/>
          </div>
          <div class="pt-4">
            <label for="name" class="text-[16px] font-[600]">Group<span class="text-red-500">*</span></label>
            <div class="flex gap-x-2 pt-2">
              <div v-for="(gru, i) in groups" :key="i">
                <button @click="group = gru.value" :class="group === gru.value ? 'bg-[#0381E0] text-white' : ''"
                        class="border-2 border-[#0381E0] px-2 py-1 md:px-4 md:py-2 rounded-md text-[14px] md:text-[18px] font-[600]">
                  {{ gru.name }}
                </button>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <input v-model="checkText" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1" class="text-[14px] md:text-[18px] pl-2">I Agree to the <a
                href="https://www.etestpaper.net/about/terms" target="_blank" class="text-blue-500 underline">Terms &
              Conditions</a> ,<a href="https://www.etestpaper.net/about/privacy" target="_blank"
                                 class="text-blue-500 underline">Privacy Policy</a> & <a
                href="https://www.etestpaper.net/about/refund" target="_blank" class="text-blue-500 underline">Refund
              Policy</a></label>
          </div>
          <div class="flex justify-center pt-0">
            <button @click="submit" :disabled="buttonDisabled"
                    :class="buttonDisabled ? 'bg-[#9fa4a8] cursor-not-allowed' : 'bg-[#0381e0] cursor-pointer'"
                    class=" text-white text-[22px] font-[600] rounded-md px-12 w-full py-2 mt-4">কনফার্ম অর্ডার
            </button>
          </div>
        </div>
        <div class="pt-0 md:pt-0 order-1 md:order-2">
          <div v-if="selectedProduct">
            <div>
              <p class="text-[22px] md:text-[28px] text-center font-[600] font-['Hind_Siliguri'] text-green-600 py-2">
                {{ selectedProduct.headline }}</p>
            </div>
            <div v-for="(feature ,i) in selectedProduct.features" :key="i" class="flex gap-x-2">
              <p class="text-[16px] md:text-[18px] xl:text-[20px] font-[600] font-['Hind_Siliguri'] py-2">▶️ {{ feature.label }}</p>
            </div>
            <div>
              <p class="md:text-[22px] font-[600] font-['Hind_Siliguri'] text-red-600 py-2">
                {{ selectedProduct.price_text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


const productInfo = ref([
  {
    name: 'HSC BATCH 2025', value: 'HSC 2025', discount_price: 649, price: 1000,
    features: [
      {label: 'সকল বিষয়ের ৭ বছরের  বোর্ড প্রশ্ন ও সমাধান'},
      {label: 'সকল বিষয়ের ৩ বছরের কলেজ প্রশ্ন ও সমাধান'},
      {label: 'সকল বিষয় এর অধ্যায় ভিত্তিক হাজারো CQ & MCQ'},
      {label: '৫০ ডে চ্যালেঞ্জ প্রোগ্রাম ও ফাইনাল মডেল টেস্ট'},
      {label: 'সকল CQ & MCQ আনলিমিটেড প্র্যাকটিস'},
      {label: 'গুরুত্বপূর্ণ প্রশ্ন মার্ক করে রাখা এবং ভুল প্রশ্নে আলাদা প্র্যাকটিস'},
      {label: 'এছাড়া তোমার পূর্নাঙ্গ প্রস্তুতি সহায়ক যাবতীয় সমাধান একসাথে'}
    ],
    // price_text:'প্রতি বিষয়ের জন্য আলাদা আলাদা টাকা দিতে হয় না, ৯৯৯ টাকায় সকল সাবজেক্ট একসাথে পাবেন।',
    headline: 'HSC 25 ব্যাচের ই-টেস্টপেপার সাবস্ক্রিপশনে যা যা পাচ্ছোঃ'
  },
  {
    name: 'HSC BATCH 2026', value: 'HSC 2026', discount_price: 849, price: 1250,
    features: [
      {label: 'সকল বিষয়ের ৮ বছরের  বোর্ড প্রশ্ন ও সমাধান'},
      {label: 'সকল বিষয়ের ৪ বছরের কলেজ প্রশ্ন ও সমাধান'},
      {label: 'সকল বিষয় এর অধ্যায় ভিত্তিক হাজারো CQ & MCQ'},
      {label: '৫০ ডে চ্যালেঞ্জ প্রোগ্রাম ও ফাইনাল মডেল টেস্ট'},
      {label: 'সকল CQ & MCQ আনলিমিটেড প্র্যাকটিস'},
      {label: 'গুরুত্বপূর্ণ প্রশ্ন মার্ক করে রাখা এবং ভুল প্রশ্নে আলাদা প্র্যাকটিস'},
      {label: 'এছাড়া তোমার পূর্নাঙ্গ প্রস্তুতি সহায়ক যাবতীয় সমাধান একসাথে'}
    ],
    // price_text:'প্রতি বিষয়ের জন্য আলাদা আলাদা টাকা দিতে হয় না, ১৪৯৯ টাকায় সকল সাবজেক্ট একসাথে পাবেন।',
    headline: 'HSC 26 ব্যাচের ই-টেস্টপেপার সাবস্ক্রিপশনে যা যা পাচ্ছোঃ'
  },
])
const groups = [{name: 'Science', value: 'Science'}, {name: 'Commerce', value: 'Commerce'}, {
  name: 'Arts',
  value: 'Arts'
}];
const selectedProduct = ref(productInfo.value[0]);
const quantity = ref(1);

const name = ref('');
const phone = ref(null);
const group = ref('Science');
const coupon = ref(null)
const checkText = ref('')
const isLoading = ref(false);
const typing = ref(false);
const subtotal = computed(() => {
  return selectedProduct.value?.price * quantity.value;
});

const total = computed(() => {
  return subtotal.value;
});

const buttonDisabled = computed(() => {
  return !name.value || !phone.value || !group.value || !checkText.value;
});
const select = (product) => {
  selectedProduct.value = product;
};

const submit = async () => {
  isLoading.value = true;
  const payload = {
    name: name.value,
    phone: phone.value,
    group: group.value,
    level: selectedProduct.value.value,
    coupon: coupon.value,
    source: 'etestpaper-fb-campaign'
  }
  localStorage.setItem('product', JSON.stringify(selectedProduct.value));
  localStorage.setItem('order', JSON.stringify(payload));
  const {data, error} = await useFetch('https://prod.etestpaper.net/api/v1/payment/bkash-thirdparty', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  if (data.value && data.value.GatewayPageURL) {
    localStorage.setItem('order', JSON.stringify(payload));
    window.location.href = data?.value?.GatewayPageURL;
  }
  isLoading.value = false;
};

// watch name and  phone
watch([name, phone], () => {
  typing.value = true;
}, {deep: true});

watch(typing, () => {
  if (typeof fbq === 'function') {
    console.log('track')
    fbq('track', 'AddToCart', {
      category_name: "HSC E-testPaper",
      phone: phone.value,
      name: name.value,
      event_url: 'LandPage',
    });
  }
}, {deep: true})

</script>

<style lang="scss" scoped>
//This class used for input group(phone number hide arrows)
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>