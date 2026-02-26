<template>
  <div class="order-section">
    <div class="container mx-auto py-8 md:py-16 px-4 md:px-6 relative z-10">

      <!-- Section Header -->
      <div class="text-center mb-6 md:mb-10 animate-fade-in-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-[#0d568b]/10 mb-4">
          <div class="w-2 h-2 rounded-full bg-[#2f8ce2] animate-pulse-dot"></div>
          <p class="text-[12px] md:text-[14px] font-[700] text-[#0d568b] uppercase tracking-widest font-['Hind_Siliguri']">
            Subscribe Now at Special Discount
          </p>
        </div>
        <h2 class="section-title font-['Hind_Siliguri']">
          প্রয়োজনে কল করো-
          <a href="tel:+8801646664222" class="phone-link">01646664222</a>
        </h2>
        <div class="flex justify-center mt-4">
          <div class="w-20 h-1 bg-gradient-to-r from-[#0d568b] to-[#2f8ce2] rounded-full section-line"></div>
        </div>
      </div>

      <!-- Instructions -->
      <div class="text-center max-w-2xl mx-auto mb-8 md:mb-12 animate-fade-in-up delay-100">
        <p class="text-[14px] md:text-[20px] text-slate-600 font-[500] leading-relaxed font-['Hind_Siliguri']">
          ই-টেস্টপেপার এর পূর্নাঙ্গ এক্সেস পেতে তোমার
          <span class="text-[#e11d48] font-[700]">ব্যাচ</span>,
          <span class="text-[#0d568b] font-[700]">নাম</span>,
          <span class="text-[#e11d48] font-[700]">ফোন নাম্বার</span> এবং
          <span class="text-[#0d568b] font-[700]">গ্রুপ</span> সিলেক্ট করে
          <span class="text-[#2f8ce2] font-[700]">"কনফার্ম অর্ডার"</span> বাটনে ক্লিক করো
        </p>
      </div>

      <!-- Product Selection Cards -->
      <div class="animate-fade-in-up delay-200">
        <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-6 max-w-3xl mx-auto">
          <div v-for="(item, i) in productInfo" :key="i" class="w-full md:w-1/2 product-card-wrapper"
            :style="{ animationDelay: `${i * 150}ms` }">
            <div @click="selectedProduct = item" :class="selectedProduct === item
              ? 'product-card-active'
              : 'product-card-idle'"
              class="product-card cursor-pointer rounded-2xl p-4 md:p-5 flex items-center gap-x-4 transition-all duration-300 relative overflow-hidden">
              <!-- Selected glow -->
              <div v-if="selectedProduct === item"
                class="absolute inset-0 bg-gradient-to-r from-[#0d568b]/5 to-transparent pointer-events-none"></div>

              <div class="shrink-0 relative z-10">
                <div :class="selectedProduct === item ? 'shadow-lg shadow-[#2f8ce2]/30' : 'shadow-md'"
                  class="bg-gradient-to-br from-[#0d568b] to-[#2f8ce2] text-[28px] md:text-[42px] font-[800] text-white w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center italic transition-all duration-300">
                  {{ 26 + i }}
                </div>
              </div>

              <div class="flex-1 min-w-0 relative z-10">
                <div class="flex items-center gap-x-2">
                  <p class="text-[16px] md:text-[22px] font-[700] text-slate-800 truncate">{{ item.name }}</p>
                  <Transition name="check">
                    <div v-if="selectedProduct === item" class="shrink-0">
                      <Icon class="text-green-500 text-[22px] md:text-[26px]" name="ph:check-circle-fill" />
                    </div>
                  </Transition>
                </div>
                <div class="flex items-center gap-x-2 mt-1">
                  <span class="text-[13px] md:text-[17px] text-red-400 line-through italic font-[500]">{{ item.price }}৳</span>
                  <span class="text-[15px] md:text-[20px] text-[#0d568b] font-[800]">৳{{ item.discount_price }}</span>
                  <span class="text-[10px] md:text-[12px] bg-green-100 text-green-700 font-[700] px-2 py-0.5 rounded-full">
                    {{ Math.round((1 - item.discount_price / item.price) * 100) }}% OFF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Headline (above the grid) -->
      <div v-if="selectedProduct" class="text-center pt-8 md:pt-12 mb-6 md:mb-8 animate-fade-in-up delay-300">
        <p class="text-[20px] md:text-[30px] font-[700] font-['Hind_Siliguri'] feature-headline">
          {{ selectedProduct.headline }}
        </p>
      </div>

      <!-- Order Form and Features Grid -->
      <div class="flex justify-center animate-fade-in-up delay-300">
        <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl gap-8 md:gap-12">

          <!-- Order Form -->
          <div class="order-2 md:order-1">
            <div class="form-card">
              <p class="text-[20px] md:text-[24px] text-center font-[700] text-slate-800 pb-5 border-b border-slate-100 relative z-10 font-['Hind_Siliguri']">
                Order Details
              </p>

              <div class="pt-6 space-y-5 relative z-10">
                <div>
                  <label class="form-label font-['Hind_Siliguri']">
                    Name <span class="text-[#e11d48]">*</span>
                  </label>
                  <input v-model="name" type="text" class="form-input" placeholder="Enter your name" />
                </div>

                <div>
                  <label class="form-label font-['Hind_Siliguri']">
                    Phone Number <span class="text-[#e11d48]">*</span>
                  </label>
                  <input v-model="phone" type="text" class="form-input" placeholder="01XXXXXXXXX" />
                </div>

                <div>
                  <label class="form-label mb-2.5 font-['Hind_Siliguri']">
                    Group <span class="text-[#e11d48]">*</span>
                  </label>
                  <div class="flex gap-x-2.5 md:gap-x-3">
                    <div v-for="(gru, i) in groups" :key="i">
                      <button @click="group = gru.value"
                        :class="group === gru.value
                          ? 'bg-gradient-to-r from-[#0d568b] to-[#2f8ce2] text-white border-transparent shadow-lg shadow-[#2f8ce2]/30 scale-105'
                          : 'border-slate-200 text-slate-600 bg-slate-50/50 hover:border-[#2f8ce2] hover:text-[#0d568b] hover:bg-blue-50/30'"
                        class="border-2 px-4 py-2.5 md:px-5 md:py-2.5 rounded-xl text-[13px] md:text-[15px] font-[700] transition-all duration-300">
                        {{ gru.name }}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="pt-1">
                  <label class="flex items-start gap-x-3 cursor-pointer group">
                    <input v-model="checkText" type="checkbox"
                      class="mt-1 w-4 h-4 rounded accent-[#0d568b] transition-transform group-hover:scale-110">
                    <span class="text-[12px] md:text-[14px] text-slate-500 leading-snug">
                      I Agree to the
                      <a href="https://www.etestpaper.net/about/terms" target="_blank" class="form-link">Terms & Conditions</a>,
                      <a href="https://www.etestpaper.net/about/privacy" target="_blank" class="form-link">Privacy Policy</a> &
                      <a href="https://www.etestpaper.net/about/refund" target="_blank" class="form-link">Refund Policy</a>
                    </span>
                  </label>
                </div>

                <button @click="submit" :disabled="buttonDisabled"
                  :class="buttonDisabled
                    ? 'bg-gray-200 cursor-not-allowed text-gray-400'
                    : 'submit-btn cursor-pointer text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]'"
                  class="w-full text-[18px] md:text-[20px] font-[700] rounded-xl px-8 py-3.5 md:py-4 mt-2 transition-all duration-300 relative overflow-hidden font-['Hind_Siliguri']">
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
          <div class="order-1 md:order-2">
            <div v-if="selectedProduct">
              <div class="space-y-3">
                <div v-for="(feature, i) in selectedProduct.features" :key="i"
                  class="feature-item"
                  :style="{ animationDelay: `${i * 60}ms` }">
                  <div class="shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mt-0.5 ring-1 ring-green-200/50">
                    <span class="text-green-600 text-[12px] font-bold">&#10003;</span>
                  </div>
                  <p class="text-[14px] md:text-[17px] font-[600] font-['Hind_Siliguri'] text-slate-700 leading-snug">
                    {{ feature.label }}
                  </p>
                </div>
              </div>
              <div v-if="selectedProduct.price_text" class="mt-5">
                <p class="md:text-[20px] font-[600] font-['Hind_Siliguri'] text-[#e11d48]">
                  {{ selectedProduct.price_text }}
                </p>
              </div>
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
const checkText = ref(true)
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
/* Section title */
.section-title {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 44px;
  }
}

.phone-link {
  background: linear-gradient(135deg, #0d568b, #2f8ce2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.2);
  }
}

.section-line {
  animation: line-expand 1s ease-out 0.3s both;
}

.animate-pulse-dot {
  animation: pulse-dot 1.5s ease-in-out infinite;
}

/* Product cards */
.product-card-wrapper {
  animation: fadeInUp 0.6s ease-out both;
}

.product-card-active {
  border: 2px solid #2f8ce2;
  box-shadow: 0 8px 32px rgba(13, 86, 139, 0.15);
  background: #ffffff;
  transform: scale(1.02);
}

.product-card-idle {
  border: 1px solid #e2e8f0;
  background: #ffffff;

  &:hover {
    border-color: #2f8ce2;
    box-shadow: 0 4px 20px rgba(13, 86, 139, 0.1);
  }
}

.product-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(13, 86, 139, 0.04) 0%, transparent 70%);
  transition: opacity 0.3s ease;
}

.product-card:hover::after {
  opacity: 1;
}

/* Form card */
.form-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 8px 40px rgba(13, 86, 139, 0.06);
  border: 1px solid rgba(13, 86, 139, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 120px;
    background: linear-gradient(225deg, rgba(47, 140, 226, 0.06), transparent);
    border-radius: 0 0 0 100%;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 32px;
  }
}

.form-label {
  font-size: 13px;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
}

.form-input {
  width: 100%;
  border: 2px solid #f1f5f9;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 15px;
  outline: none;
  background: #f8fafc;
  transition: all 0.3s ease;

  &:focus {
    border-color: #2f8ce2;
    box-shadow: 0 0 0 4px rgba(47, 140, 226, 0.08);
    background: #ffffff;
    transform: translateY(-1px);
  }
}

.form-link {
  color: #2f8ce2;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
}

/* Submit button */
.submit-btn {
  background: linear-gradient(135deg, #0d568b, #2f8ce2);
  box-shadow: 0 8px 24px rgba(13, 86, 139, 0.3);

  &:hover {
    box-shadow: 0 12px 32px rgba(13, 86, 139, 0.4);
  }
}

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

/* Feature headline */
.feature-headline {
  background: linear-gradient(135deg, #15803d, #22c55e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Feature items */
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid rgba(13, 86, 139, 0.06);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  animation: slideInLeft 0.5s ease-out both;

  &:hover {
    box-shadow: 0 4px 16px rgba(13, 86, 139, 0.08);
    transform: translateY(-2px);
  }
}

/* Check icon transition */
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

/* Hide number arrows */
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Animations */
.animate-fade-in-up {
  animation: fadeInUp 0.7s ease-out both;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
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

@keyframes submit-sweep {
  0% { left: -100%; }
  50% { left: 150%; }
  100% { left: 150%; }
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.7);
  }
}
</style>
