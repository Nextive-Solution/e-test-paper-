<template>
  <div class="container mx-auto py-6 md:py-12 px-4 md:px-0">
    <div class="text-center">
      <p class="text-[26px] 2xl:text-[46px] font-[700] text-[#0381e0]">প্রয়োজনে কল করুন- 8801646664222</p>
    </div>
    <div class="text-center pt-4">
      <p class="2xl:text-[26px]  text-[#000000] font-[600]">অর্ডারটি কনফার্ম করতে, আপনার নাম, ঠিকানা ও ফোন নাম্বারটি
        দিয়ে "অর্ডার কনফার্ম" বাটনে ক্লিক করুন।</p>
    </div>
    <div class="pt-6 md:pt-8">
      <div class="md:flex justify-center gap-x-4">
        <div v-for="(item, i) in productInfo" :key="i" class="w-full py-2 md:py-0 md:w-[30%]">
          <div @click="selectedProduct = item"
               :class="selectedProduct === item ? 'text-[#0381e0] ring-2 ring-[#0381e0]' : 'ring-2 ring-[#9fa4a8]'"
               class="cursor-pointer rounded-md  bg-white p-2  flex items-center gap-x-4">
            <div class="bg-[#13619c] text-[50px] font-extrabold text-white px-4 rounded-md italic">
              {{ 25 + i }}
            </div>
            <div>
              <p class="text-[25px] font-[700]">{{ item.name }}</p>
              <p class="text-[20px] font-[600]"> <span class="text-red-500 line-through italic pr-4">{{ item.price
                }}</span> ৳ {{ item.discount_price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex justify-center pt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] gap-x-12">
        <div class="order-2 md:order-1">
          <div>
            <p class="text-[24px] font-[600]">Billing details</p>
          </div>
          <div class="pt-4">
            <label for="name" class="text-[16px] font-[600]">আপনার নাম <span class="text-red-500">*</span></label>
            <input v-model="name" type="text"
                   class="border-2 border-[#0381e0] text-[16px] rounded-md px-2 py-2 flex items-center w-full"
                   placeholder="আপনার নাম" />
          </div>
          <div class="pt-4">
            <label for="name" class="text-[16px] font-[600]">মোবাইল নাম্বার <span class="text-red-500">*</span></label>
            <input v-model="phone" type="number"
                   class="border-2 border-[#0381e0] text-[16px] rounded-md px-2 py-2 flex items-center w-full"
                   placeholder="মোবাইল নাম্বার" />
          </div>
          <div class="pt-4">
            <label for="name" class="text-[16px] font-[600]">শাখা <span class="text-red-500">*</span></label>
            <div class="flex gap-x-2 pt-2">
              <div v-for="(gru, i) in groups" :key="i">
                <button @click="group = gru.value" :class="group === gru.value ? 'bg-[#0381E0] text-white' : ''"
                        class="border-2 border-[#0381E0] px-4 py-2 rounded-md">{{ gru.name }}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-4 md:pt-0 order-1 md:order-2">
          <div>
            <p class="text-[24px] font-[600]">Your order</p>
          </div>
          <div class="ring-2 ring-[#0381e0] p-4 mt-6 rounded-md">
            <div class="flex items-center gap-x-6 md:gap-x-12">
              <div class="flex items-center gap-x-4">
                <img class="h-[50px]" src="/images/product.jpg" alt="image" />
                <p class="text-[18px]">{{ selectedProduct?.name }}</p>
              </div>
              <div class="text-[18px]">৳ {{ selectedProduct?.price }} × {{ quantity }}</div>
            </div>
            <div class="pt-2">
              <hr />
            </div>
            <div class="flex items-center gap-x-12 pt-2">
              <div class="">
                <p class="text-[18px] font-[600]">Subtotal</p>
              </div>
              <div class="text-[18px] font-[600]">৳ {{ subtotal }}</div>
            </div>
            <div class="pt-2">
              <hr />
            </div>
            <div class="flex items-center gap-x-12 pt-2">
              <div class="">
                <p class="text-[18px] font-[600]">Total</p>
              </div>
              <div class="text-[18px] font-[600]">৳ {{ total }}</div>
            </div>
          </div>
          <div class="mt-4">
            <p class="flex items-center mt-2 text-[18px]"><icon size="30" color="#0381E0" name="material-symbols:play-arrow-rounded"/> <span class="font-bold ml-2">কুপন আছে ?</span></p>
            <div class="mt-2">
              <input v-model="coupon" type="number"
                     class="border-2 border-[#0381e0] text-[16px] rounded-md px-2 py-2 flex items-center w-full"
                     placeholder="কুপন নাম্বার" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button @click="submit" :disabled="buttonDisabled"
              :class="buttonDisabled ? 'bg-[#9fa4a8] cursor-not-allowed' : 'bg-[#0381e0] cursor-pointer'"
              class=" text-white text-[22px] font-[600] rounded-md px-12 py-2 mt-4">অর্ডার কনফার্ম</button>
    </div>
  </div>
</template>

<script setup>
const productInfo = ref([
  { name: 'HSC BATCH 2025', value: 'HSC 2025', discount_price: 1000, price: 1500 },
  { name: 'HSC BATCH 2026', value: 'HSC 2026', discount_price: 1500, price: 2500 },
])
const groups = [{ name: 'Science', value: 'Science' }, { name: 'Business_studies', value: 'Commerce' }, { name: 'Humanities', value: 'Arts' }];
const selectedProduct = ref(productInfo.value[0]);
const quantity = ref(1);

const name = ref('');
const phone = ref(null);
const group = ref('science');
const coupon = ref(null)

const subtotal = computed(() => {
  return selectedProduct.value?.price * quantity.value;
});

const total = computed(() => {
  return subtotal.value;
});

const buttonDisabled = computed(() => {
  return !name.value || !phone.value || !group.value;
});
const select = (product) => {
  selectedProduct.value = product;
};

const submit = async () => {

  const payload = {
    name: name.value,
    phone: `0${phone.value}`,
    group: group.value,
    level: selectedProduct.value.value,
    coupon: coupon.value,
    source: 'etestpaper-fb-campaign'
  }

  const {data, error} = await useFetch('https://api.v2.e-testpaper.com/api/v1/payment/bkash-thirdparty', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  console.log(data)
  if(data.value && data.value.GatewayPageURL){
    window.location.href =data?.value?.GatewayPageURL;
  }
};

</script>

<style lang="scss" scoped>
//This class used for input group(phone number hide arrows)
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>