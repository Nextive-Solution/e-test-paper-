<template>
  <div class="container mx-auto py-2 md:py-4 px-4 md:px-0 overflow-hidden">
    <!-- Section Header -->
    <div class="text-center mb-2 md:mb-4">
      <div class="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-3">
        <p class="text-[13px] md:text-[15px] font-[700] text-[#0381e0] uppercase tracking-widest">Subscribe Now at
          Special Discount</p>
      </div>
      <p class="text-[24px] md:text-[44px] font-[800] text-[#0a2540] leading-tight">
        প্রয়োজনে কল করো- <a href="tel:+8801646664222"
          class="text-[#0381e0] hover:underline transition-colors phone-link">01646664222</a>
      </p>
      <div class="flex justify-center mt-4">
        <div class="w-20 h-1 bg-gradient-to-r from-[#0381e0] to-[#00b4d8] rounded-full section-line"></div>
      </div>
    </div>

    <!-- Instructions -->
    <div class="text-center pt-4 md:pt-6 max-w-2xl mx-auto animate-fade-up">
      <p class="text-[15px] md:text-[22px] text-[#444] font-[500] leading-relaxed">
        ই-টেস্টপেপার এর পূর্নাঙ্গ এক্সেস পেতে তোমার
        <span class="text-[#d30163] font-[700]">ব্যাচ</span>,
        <span class="text-[#6b21a8] font-[700]">নাম</span>,
        <span class="text-[#d30163] font-[700]">ফোন নাম্বার</span> এবং
        <span class="text-[#6b21a8] font-[700]">গ্রুপ</span> সিলেক্ট করে
        <span class="text-[#0381e0] font-[700]">"কনফার্ম অর্ডার"</span> বাটনে ক্লিক করো
      </p>
    </div>

    <!-- Product Selection Cards -->
    <div class="pt-8 md:pt-12">
      <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-6 max-w-3xl mx-auto">
        <div v-for="(item, i) in productInfo" :key="i" class="w-full md:w-1/2 product-card-wrapper"
          :style="{ animationDelay: `${i * 150}ms` }">
          <div @click="selectedProduct = item" :class="selectedProduct === item
            ? 'ring-2 ring-[#0381e0] shadow-xl shadow-blue-100/50 bg-white scale-[1.02]'
            : 'ring-1 ring-gray-200 bg-white hover:ring-blue-200 hover:shadow-lg'"
            class="product-card cursor-pointer rounded-2xl p-4 md:p-5 flex items-center gap-x-4 transition-all duration-400 relative overflow-hidden">
            <!-- Selected glow -->
            <div v-if="selectedProduct === item"
              class="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none"></div>

            <div class="shrink-0 relative z-10">
              <div :class="selectedProduct === item ? 'shadow-lg shadow-blue-300/40' : 'shadow-md'"
                class="bg-gradient-to-br from-[#0381e0] to-[#0a5c9e] text-[28px] md:text-[42px] font-[800] text-white w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center italic transition-all duration-300">
                {{ 26 + i }}
              </div>
            </div>

            <div class="flex-1 min-w-0 relative z-10">
              <div class="flex items-center gap-x-2">
                <p class="text-[16px] md:text-[22px] font-[700] text-[#0a2540] truncate">{{ item.name }}</p>
                <Transition name="check">
                  <div v-if="selectedProduct === item" class="shrink-0">
                    <Icon class="text-green-500 text-[22px] md:text-[26px]" name="ph:check-circle-fill" />
                  </div>
                </Transition>
              </div>
              <div class="flex items-center gap-x-2 mt-1">
                <span class="text-[13px] md:text-[17px] text-red-400 line-through italic font-[500]">{{ item.price
                }}৳</span>
                <span class="text-[15px] md:text-[20px] text-[#0381e0] font-[800]">৳{{ item.discount_price }}</span>
                <span
                  class="text-[10px] md:text-[12px] bg-green-100 text-green-700 font-[700] px-2 py-0.5 rounded-full">
                  {{ Math.round((1 - item.discount_price / item.price) * 100) }}% OFF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Form and Features Grid -->
    <div class="flex justify-center pt-8 md:pt-12">
      <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl gap-8 md:gap-12">

        <!-- Order Form -->
        <div class="order-2 md:order-1 form-wrapper">
          <div
            class="form-card bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/40 ring-1 ring-gray-100/80 relative overflow-hidden">
            <!-- Decorative corner gradient -->
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none">
            </div>

            <p
              class="text-[20px] md:text-[24px] text-center font-[700] text-[#0a2540] pb-5 border-b border-gray-100 relative z-10">
              Order Details
            </p>

            <div class="pt-6 space-y-5 relative z-10">
              <div class="input-group">
                <label class="text-[13px] md:text-[14px] font-[700] text-[#555] uppercase tracking-wide block mb-2">
                  Name <span class="text-red-500">*</span>
                </label>
                <input v-model="name" type="text"
                  class="input-field w-full border-2 border-gray-100 focus:border-[#0381e0] focus:ring-4 focus:ring-blue-50 text-[15px] rounded-xl px-4 py-3 outline-none transition-all duration-300 bg-gray-50/50 focus:bg-white"
                  placeholder="Enter your name" />
              </div>

              <div class="input-group">
                <label class="text-[13px] md:text-[14px] font-[700] text-[#555] uppercase tracking-wide block mb-2">
                  Phone Number <span class="text-red-500">*</span>
                </label>
                <input v-model="phone" type="text"
                  class="input-field w-full border-2 border-gray-100 focus:border-[#0381e0] focus:ring-4 focus:ring-blue-50 text-[15px] rounded-xl px-4 py-3 outline-none transition-all duration-300 bg-gray-50/50 focus:bg-white"
                  placeholder="01XXXXXXXXX" />
              </div>

              <div>
                <label class="text-[13px] md:text-[14px] font-[700] text-[#555] uppercase tracking-wide block mb-2.5">
                  Group <span class="text-red-500">*</span>
                </label>
                <div class="flex gap-x-2.5 md:gap-x-3">
                  <div v-for="(gru, i) in groups" :key="i">
                    <button @click="group = gru.value"
                      :class="group === gru.value
                        ? 'bg-gradient-to-r from-[#0381E0] to-[#0062a8] text-white border-transparent shadow-lg shadow-blue-200/40 scale-105'
                        : 'border-gray-200 text-[#555] bg-gray-50/50 hover:border-[#0381E0] hover:text-[#0381E0] hover:bg-blue-50/30'"
                      class="border-2 px-4 py-2.5 md:px-5 md:py-2.5 rounded-xl text-[13px] md:text-[15px] font-[700] transition-all duration-300">
                      {{ gru.name }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="pt-1">
                <label class="flex items-start gap-x-3 cursor-pointer group">
                  <input v-model="checkText" type="checkbox"
                    class="mt-1 w-4 h-4 rounded accent-[#0381e0] transition-transform group-hover:scale-110">
                  <span class="text-[12px] md:text-[14px] text-[#777] leading-snug">
                    I Agree to the
                    <a href="https://www.etestpaper.net/about/terms" target="_blank"
                      class="text-[#0381e0] hover:underline font-[600]">Terms & Conditions</a>,
                    <a href="https://www.etestpaper.net/about/privacy" target="_blank"
                      class="text-[#0381e0] hover:underline font-[600]">Privacy Policy</a> &
                    <a href="https://www.etestpaper.net/about/refund" target="_blank"
                      class="text-[#0381e0] hover:underline font-[600]">Refund Policy</a>
                  </span>
                </label>
              </div>

              <button @click="submit" :disabled="buttonDisabled"
                :class="buttonDisabled
                  ? 'bg-gray-200 cursor-not-allowed text-gray-400'
                  : 'submit-btn bg-gradient-to-r from-[#0381e0] to-[#0062a8] hover:from-[#0490f0] hover:to-[#0072b8] cursor-pointer text-white shadow-xl shadow-blue-300/30 hover:shadow-blue-400/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]'"
                class="w-full text-[18px] md:text-[20px] font-[700] rounded-xl px-8 py-3.5 md:py-4 mt-2 transition-all duration-300 relative overflow-hidden">
                <span class="relative z-10 flex items-center justify-center gap-x-2">
                  <svg v-if="isLoading" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                  কনফার্ম অর্ডার
                </span>
                <span v-if="!buttonDisabled" class="submit-shine"></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Features List -->
        <div class="order-1 md:order-2 features-wrapper">
          <div v-if="selectedProduct">
            <p
              class="text-[20px] md:text-[26px] text-center md:text-left font-[700] font-['Hind_Siliguri'] text-transparent bg-clip-text bg-gradient-to-r from-[#008a00] to-[#00b300] mb-5 md:mb-6">
              {{ selectedProduct.headline }}
            </p>
            <div class="space-y-3">
              <div v-for="(feature, i) in selectedProduct.features" :key="i"
                class="feature-item flex items-start gap-x-3 p-3.5 rounded-2xl bg-white/90 shadow-sm ring-1 ring-gray-100/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                :style="{ animationDelay: `${i * 60}ms` }">
                <div
                  class="shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mt-0.5 ring-1 ring-green-200/50">
                  <span class="text-green-600 text-[12px] font-bold">&#10003;</span>
                </div>
                <p class="text-[14px] md:text-[17px] font-[600] font-['Hind_Siliguri'] text-[#333] leading-snug">
                  {{ feature.label }}
                </p>
              </div>
            </div>
            <div v-if="selectedProduct.price_text" class="mt-5">
              <p class="md:text-[20px] font-[600] font-['Hind_Siliguri'] text-red-600">
                {{ selectedProduct.price_text }}
              </p>
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
    name: 'HSC BATCH 2026', value: 'HSC 2026', discount_price: 740, price: 1000,
    features: [
      { label: 'সকল বিষয়ের ৮ বছরের  বোর্ড প্রশ্ন ও সমাধান' },
      { label: 'সকল বিষয়ের ৪ বছরের কলেজ প্রশ্ন ও সমাধান' },
      { label: 'সকল বিষয় এর অধ্যায় ভিত্তিক হাজারো CQ & MCQ' },
      { label: '৫০ ডে চ্যালেঞ্জ প্রোগ্রাম ও ফাইনাল মডেল টেস্ট' },
      { label: 'সকল CQ & MCQ আনলিমিটেড প্র্যাকটিস' },
      { label: 'গুরুত্বপূর্ণ প্রশ্ন মার্ক করে রাখা এবং ভুল প্রশ্নে আলাদা প্র্যাকটিস' },
      { label: 'এছাড়া তোমার পূর্নাঙ্গ প্রস্তুতি সহায়ক যাবতীয় সমাধান একসাথে' }
    ],
    headline: 'HSC 26 ব্যাচের ই-টেস্টপেপার সাবস্ক্রিপশনে যা যা পাচ্ছোঃ'
  },
  {
    name: 'HSC BATCH 2027', value: 'HSC 2027', discount_price: 990, price: 1250,
    features: [
      { label: 'সকল বিষয়ের ৯ বছরের  বোর্ড প্রশ্ন ও সমাধান' },
      { label: 'সকল বিষয়ের ৫ বছরের কলেজ প্রশ্ন ও সমাধান' },
      { label: 'সকল বিষয় এর অধ্যায় ভিত্তিক হাজারো CQ & MCQ' },
      { label: '৫০ ডে চ্যালেঞ্জ প্রোগ্রাম ও ফাইনাল মডেল টেস্ট' },
      { label: 'সকল CQ & MCQ আনলিমিটেড প্র্যাকটিস' },
      { label: 'গুরুত্বপূর্ণ প্রশ্ন মার্ক করে রাখা এবং ভুল প্রশ্নে আলাদা প্র্যাকটিস' },
      { label: 'এছাড়া তোমার পূর্নাঙ্গ প্রস্তুতি সহায়ক যাবতীয় সমাধান একসাথে' }
    ],
    headline: 'HSC 27 ব্যাচের ই-টেস্টপেপার সাবস্ক্রিপশনে যা যা পাচ্ছোঃ'
  },
])
const groups = [{ name: 'Science', value: 'Science' }, { name: 'Commerce', value: 'Commerce' }, {
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
  const { data, error } = await useFetch('https://prod.etestpaper.net/api/v1/payment/bkash-thirdparty', {
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

watch([name, phone], () => {
  typing.value = true;
}, { deep: true });

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
}, { deep: true })
</script>

<style lang="scss" scoped>
// Section line animation
.section-line {
  animation: line-expand 1s ease-out 0.3s both;
}

// Fade up entrance
.animate-fade-up {
  animation: fadeUp 0.7s ease-out both;
}

// Product card entrance
.product-card-wrapper {
  animation: fadeUp 0.6s ease-out both;
}

// Product card hover ripple
.product-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(3, 129, 224, 0.06) 0%, transparent 70%);
  transition: opacity 0.3s ease;
}

.product-card:hover::after {
  opacity: 1;
}

// Form card entrance
.form-wrapper {
  animation: fadeUp 0.7s ease-out 0.2s both;
}

.features-wrapper {
  animation: fadeUp 0.7s ease-out 0.1s both;
}

// Feature items staggered
.feature-item {
  animation: slideInLeft 0.5s ease-out both;
}

// Input focus animation
.input-field {
  &:focus {
    transform: translateY(-1px);
  }
}

// Submit button shine
.submit-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: submit-sweep 3s ease-in-out infinite;
  pointer-events: none;
}

// Check icon transition
.check-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.check-leave-active {
  transition: all 0.2s ease-in;
}

.check-enter-from {
  opacity: 0;
  transform: scale(0) rotate(-180deg);
}

.check-leave-to {
  opacity: 0;
  transform: scale(0);
}

// Phone link pulse
.phone-link {
  animation: phone-glow 2s ease-in-out infinite;
}

// Hide number arrows
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@keyframes line-expand {
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 5rem;
    opacity: 1;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes submit-sweep {
  0% {
    left: -100%;
  }

  50% {
    left: 150%;
  }

  100% {
    left: 150%;
  }
}

@keyframes phone-glow {

  0%,
  100% {
    text-shadow: 0 0 0 transparent;
  }

  50% {
    text-shadow: 0 0 12px rgba(3, 129, 224, 0.3);
  }
}
</style>
