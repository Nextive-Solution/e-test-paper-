<template>
  <div class="container mx-auto py-6 md:py-12 px-4 md:px-0">
    <div class="text-center">
      <p class="text-[26px] 2xl:text-[46px] font-[700] text-[#0381e0]">প্রয়োজনে কল করুন- 8801646664222</p>
    </div>
    <div class="text-center pt-4">
      <p class="2xl:text-[26px]  text-[#000000] font-[600]">অর্ডারটি কনফার্ম করতে, আপনার নাম, ঠিকানা ও ফোন নাম্বারটি দিয়ে "অর্ডার কনফার্ম" বাটনে ক্লিক করুন।</p>
    </div>
    <div class="pt-6 md:pt-8">
      <div class="md:flex justify-center gap-x-4">
        <div v-for="(item, i) in productInfo" :key="i"  class="w-full py-2 md:py-0 md:w-[30%]">
          <div @click="select(item)" :class="selectedProduct ===item ? 'text-[#0381e0] ring-2 ring-[#0381e0]': 'ring-2 ring-[#9fa4a8]'" class="cursor-pointer rounded-md  bg-white px-4 py-2  flex items-center gap-x-4">
            <div>
              <img class="h-[90px]" src="/images/product.jpg" alt="image"/>
            </div>
            <div>
              <p class="text-[20px] font-[600]">{{ item.name }} × ১</p>
              <p class="text-[20px] font-[600]">৳ {{ item.price }}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex justify-center pt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] gap-x-12">
        <div>
          <div>
            <p class="text-[24px] font-[600]">Billing details</p>
          </div>
          <div class="pt-4">
            <label for="name" class="text-[16px] font-[600]">আপনার নাম *</label>
            <input v-model="name" type="text" class="border-2 border-[#0381e0] text-[16px] rounded-md px-2 py-2 flex items-center w-full" placeholder="আপনার নাম"/>
          </div>
          <div class="pt-4">
            <label for="name" class="text-[16px] font-[600]">মোবাইল নাম্বার *</label>
            <input v-model="phone" type="number" class="border-2 border-[#0381e0] text-[16px] rounded-md px-2 py-2 flex items-center w-full" placeholder="মোবাইল নাম্বার"/>
          </div>
          <div class="pt-4">
            <label for="name" class="text-[16px] font-[600]">শাখা *</label>
            <div class="flex gap-x-2 pt-2">
              <div class="flex items-center gap-x-2">
                <input v-model="group" type="radio" id="science" name="fav_group" value="science">
                <label for="science" class="text-[18px]">বিজ্ঞান</label><br>
              </div>
              <div class="flex items-center gap-x-2">
                <input  v-model="group" type="radio" id="commerce" name="fav_group" value="commerce">
                <label for="commerce" class="text-[18px]">ব্যবসায়</label><br>
              </div>
              <div class="flex items-center gap-x-2">
                <input  v-model="group" type="radio" id="arts" name="fav_group" value="arts">
                <label for="arts" class="text-[18px]">মানিবিক</label><br>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-4 md:pt-0">
          <div>
            <p class="text-[24px] font-[600]">Your order</p>
          </div>
          <div class="ring-2 ring-[#0381e0] p-4 mt-6 rounded-md">
            <div class="flex items-center gap-x-6 md:gap-x-12">
              <div class="flex items-center gap-x-4">
                <img class="h-[50px]" src="/images/product.jpg" alt="image"/>
                <p class="text-[18px]">{{ selectedProduct?.name }}</p>
              </div>
              <div class="text-[18px]">৳ {{ selectedProduct?.price }} × {{ quantity }}</div>
            </div>
            <div class="pt-2">
              <hr/>
            </div>
            <div class="flex items-center gap-x-12 pt-2">
              <div class="">
                <p class="text-[18px] font-[600]">Subtotal</p>
              </div>
              <div class="text-[18px] font-[600]">৳ {{ subtotal }}</div>
            </div>
            <div class="pt-2">
              <hr/>
            </div>
            <div class="flex items-center gap-x-12 pt-2">
              <div class="">
                <p class="text-[18px] font-[600]">Total</p>
              </div>
              <div class="text-[18px] font-[600]">৳ {{ total }}</div>
            </div>
          </div>
          <div>
              <button @click="submit" :disabled="buttonDisabled" :class="buttonDisabled ? 'bg-[#9fa4a8] cursor-not-allowed': 'bg-[#0381e0] cursor-pointer'" class=" text-white text-[18px] font-[600] w-full rounded-md px-4 py-2 mt-4">অর্ডার কনফার্ম</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const productInfo = ref([
  { name:'এইচএসসি ২০২৫', price:970 },
  { name:'এইচএসসি ২০২৪', price:475 },
])
const selectedProduct = ref(productInfo.value[0]);
const quantity = ref(1);

const name = ref('');
const phone = ref(null);
const group = ref('');

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

const submit = () => {
  const data = {
    name: name.value,
    phone: phone.value,
    group: group.value,
    product: selectedProduct.value,
    quantity: quantity.value,
    total: total.value
  }
  console.log(data);
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