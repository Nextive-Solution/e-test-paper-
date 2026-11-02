<template>
  <section id="enroll" class="max-w-xl mx-auto px-4 py-10 md:py-16" :class="showStickyBar ? 'pb-32 md:pb-16' : ''">

    <!-- Already Subscribed Modal -->
    <div v-if="alreadySubscribed" class="fixed inset-0 z-50 flex items-center justify-center px-4"
         @click.self="alreadySubscribed = false">
      <div class="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div class="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-2xl text-center z-10">
        <button @click="alreadySubscribed = false"
                class="absolute top-3 right-3 text-slate-500 hover:text-slate-300 transition-colors">
          <Icon name="ph:x-bold" class="text-[20px]"/>
        </button>
        <div class="w-16 h-16 mx-auto bg-amber-500/15 rounded-full flex items-center justify-center">
          <Icon class="text-amber-400 text-[32px]" name="ph:warning-circle-fill"/>
        </div>
        <p class="text-[16px] md:text-[18px] font-[700] text-white mt-4">{{ alreadySubscribedMsg }}</p>
        <div class="flex flex-col gap-2 mt-5">
          <a href="https://www.etestpaper.net"
             class="block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-[600] rounded-xl text-[14px] md:text-[16px]">
            ওয়েবসাইটে যান
          </a>
          <button @click="alreadySubscribed = false"
                  class="px-6 py-2.5 text-slate-400 font-[600] rounded-xl text-[14px] md:text-[16px] hover:bg-slate-800 transition-colors">
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>

    <div ref="orderFormRef"
         class="bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-blue-500/50 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-5 text-left">

      <!-- Header -->
      <div class="text-center space-y-2">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800/80 border border-slate-700/80 rounded-full text-xs font-bold text-cyan-400">
          <span>ই-টেস্টপেপার</span>
          <span>·</span>
          <span>Exam Finest ক্র্যাশ ব্যাচ</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-extrabold text-white leading-snug">
          আর দেরি কেন? আজই তোমার সফলতার যাত্রা শুরু করো!
        </h3>
        <p v-if="selectedBatch" class="text-xs sm:text-sm text-slate-300">
          স্পেশাল অফার ফি: <strong class="text-cyan-400">৳ {{ selectedBatch.displayPrice?.toLocaleString() }}</strong>
          (এককালীন) · ১০০% মানিব্যাক সাপোর্ট
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="plansLoading" class="flex justify-center py-8">
        <div class="flex flex-col items-center gap-3">
          <div class="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <p class="text-[14px] text-slate-400 font-[500]">প্ল্যান লোড হচ্ছে...</p>
        </div>
      </div>

      <div v-else class="space-y-4 text-sm">
        <!-- Name -->
        <div>
          <label class="text-slate-300 font-semibold block mb-1 text-sm">শিক্ষার্থীর নাম *</label>
          <input v-model="name" type="text" placeholder="তোমার পূর্ণ নাম লিখো"
                 class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"/>
        </div>

        <!-- Phone -->
        <div>
          <label class="text-slate-300 font-semibold block mb-1 text-sm">মোবাইল নম্বর *</label>
          <input v-model="phone" type="tel" maxlength="11" placeholder="01XXXXXXXXX"
                 class="w-full bg-slate-950/80 border rounded-xl px-3.5 py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-1"
                 :class="phone && !isValidPhone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/50'"/>
          <p v-if="phoneError" class="text-red-400 text-xs font-[500] mt-1">{{ phoneError }}</p>
        </div>

        <!-- Batch -->
        <div>
          <label class="text-slate-300 font-semibold block mb-1 text-sm">ব্যাচ *</label>
          <div class="flex gap-2">
            <button v-for="batch in batchList" :key="batch.name" @click="selectBatch(batch)"
                    class="flex-1 rounded-xl py-2.5 px-3 text-center transition-all duration-200"
                    :class="selectedBatch === batch
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:border-blue-500'">
              <p class="text-[13px] md:text-[14px] font-[700]">{{ batch.displayName }}</p>
              <div class="flex items-center justify-center gap-1 mt-0.5">
                <span class="line-through text-[11px] font-[500]"
                      :class="selectedBatch === batch ? 'text-white/60' : 'text-slate-500'">৳{{ batch.originalPrice }}</span>
                <span class="text-[14px] font-[800]">৳{{ batch.displayPrice }}</span>
              </div>
            </button>
          </div>
        </div>

        <!-- Group -->
        <div>
          <label class="text-slate-300 font-semibold block mb-1 text-sm">গ্রুপ *</label>
          <div class="flex gap-2">
            <button v-for="g in (selectedBatch?.groups || allGroups)" :key="g"
                    @click="selectedBatch && selectGroup(g)"
                    class="px-5 py-2 rounded-xl text-[13px] md:text-[14px] font-[700] transition-all duration-200"
                    :class="selectedGroup === g
                      ? 'bg-cyan-500 text-slate-950 shadow-md'
                      : selectedBatch
                        ? 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:border-blue-500'
                        : 'bg-slate-950/80 border border-slate-800 text-slate-600 cursor-not-allowed'">{{ g }}
            </button>
          </div>
        </div>

        <!-- Payment Method -->
        <div>
          <label class="text-slate-300 font-semibold block mb-1 text-sm">পেমেন্ট মেথড *</label>
          <div class="space-y-2.5">
            <div @click="paymentMethod = 'bkash'"
                 class="cursor-pointer rounded-xl p-3.5 flex items-center justify-between transition-all duration-200"
                 :class="paymentMethod === 'bkash' ? 'ring-2 ring-[#E2136E] bg-[#E2136E]/10' : 'ring-1 ring-slate-800 bg-slate-950/80 hover:ring-slate-700'">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                     :class="paymentMethod === 'bkash' ? 'border-[#E2136E]' : 'border-slate-600'">
                  <div v-if="paymentMethod === 'bkash'" class="w-2.5 h-2.5 rounded-full bg-[#E2136E]"></div>
                </div>
                <span class="text-[14px] md:text-[15px] font-[600] text-slate-200">bKash</span>
              </div>
              <span class="bg-white rounded-md px-2 py-1"><img src="/images/bkash.webp" alt="bKash" class="h-5 object-contain"/></span>
            </div>

            <div @click="paymentMethod = 'ssl'"
                 class="cursor-pointer rounded-xl p-3.5 flex items-center justify-between gap-3 transition-all duration-200"
                 :class="paymentMethod === 'ssl' ? 'ring-2 ring-cyan-400 bg-cyan-500/10' : 'ring-1 ring-slate-800 bg-slate-950/80 hover:ring-slate-700'">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                     :class="paymentMethod === 'ssl' ? 'border-cyan-400' : 'border-slate-600'">
                  <div v-if="paymentMethod === 'ssl'" class="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                </div>
                <span class="text-[14px] md:text-[15px] font-[600] text-slate-200">Nagad/Rocket/Visa/Master Card</span>
              </div>
              <span class="bg-white rounded-md px-2 py-1 shrink-0"><img src="/images/gateway/SSLCommers.png" alt="SSLCommerz" class="h-5 object-contain"/></span>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div v-if="selectedBatch" class="bg-slate-950/60 rounded-xl border border-slate-800 p-4 space-y-2.5">
          <div class="flex items-center justify-between">
            <span class="text-[13px] md:text-[14px] text-slate-400">মূল্য</span>
            <span class="text-[14px] md:text-[15px] font-[600] text-slate-300">৳ {{ selectedBatch.originalPrice?.toLocaleString() }}</span>
          </div>
          <div v-if="selectedBatch.discountPercent > 0" class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-[13px] md:text-[14px] text-slate-400">ছাড়</span>
              <span class="text-[11px] font-semibold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/40">{{ selectedBatch.discountPercent }}% ছাড়</span>
            </div>
            <span class="text-[14px] md:text-[15px] font-[600] text-red-400">- ৳ {{ (selectedBatch.originalPrice - selectedBatch.displayPrice)?.toLocaleString() }}</span>
          </div>
          <div class="border-t border-slate-800 pt-2.5 flex items-center justify-between">
            <span class="text-[15px] font-[800] text-white">সর্বমোট</span>
            <span class="text-[20px] md:text-[22px] font-[900] text-white">৳ {{ selectedBatch.displayPrice?.toLocaleString() }}</span>
          </div>
        </div>

        <!-- Terms -->
        <div class="flex items-start gap-x-2">
          <Icon class="text-cyan-400 text-[18px] shrink-0 mt-0.5" name="ph:check-circle-fill"/>
          <span class="text-xs md:text-[13px] text-slate-400 leading-snug">I Have Read And Agree To The
            <a href="https://www.etestpaper.net/about/terms" target="_blank" class="text-cyan-400 font-[600]">Terms & Conditions</a>,
            <a href="https://www.etestpaper.net/about/privacy" target="_blank" class="text-cyan-400 font-[600]">Privacy Policy</a>, And
            <a href="https://www.etestpaper.net/about/refund" target="_blank" class="text-cyan-400 font-[600]">Refund Policy</a>
          </span>
        </div>

        <!-- Submit -->
        <button @click="submit" :disabled="buttonDisabled || isLoading"
                :class="buttonDisabled || isLoading
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500 hover:from-emerald-500 hover:via-green-500 hover:to-teal-400 text-white shadow-lg shadow-emerald-900/40 active:scale-95 cursor-pointer'"
                class="w-full font-bold text-base py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all">
          <div v-if="isLoading" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>{{ isLoading ? 'প্রসেসিং...' : 'পেমেন্ট করে ভর্তি কনফার্ম করো' }}</span>
          <Icon v-if="!isLoading" name="ph:arrow-right-bold" class="text-[16px]"/>
        </button>

        <p class="text-xs text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
          <Icon name="ph:shield-check-fill" class="text-emerald-400 text-[14px]"/>
          নির্দেশনা মতো পড়ে পাস না করলে শতভাগ টাকা ফেরত
        </p>
      </div>
    </div>
  </section>

  <!-- Sticky Bottom Bar (mobile) -->
  <Transition name="sticky-bar">
    <div v-if="showStickyBar" class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 shadow-2xl">
      <div v-if="batchList.length > 1" class="flex gap-2 pb-2">
        <button v-for="batch in batchList" :key="batch.name" @click="selectBatch(batch)"
                class="flex-1 rounded-lg py-1.5 text-[12px] font-[800] transition-all"
                :class="selectedBatch === batch ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'bg-slate-800 text-slate-400'">
          {{ batch.displayName }}
        </button>
      </div>
      <div class="max-w-xl mx-auto flex items-center justify-between gap-3">
        <div v-if="selectedBatch" class="pl-1 text-left">
          <div class="text-xs text-cyan-400 font-bold leading-none">
            স্পেশাল অফার<span v-if="selectedBatch.discountPercent > 0"> ({{ selectedBatch.discountPercent }}% ছাড়)</span>
          </div>
          <div class="flex items-baseline gap-1.5 mt-0.5">
            <span class="text-white font-extrabold text-base">৳ {{ selectedBatch.displayPrice?.toLocaleString() }}</span>
            <span v-if="selectedBatch.discountPercent > 0" class="text-slate-500 line-through text-xs">৳ {{ selectedBatch.originalPrice?.toLocaleString() }}</span>
          </div>
        </div>
        <button @click="scrollToForm"
                class="flex-1 max-w-[210px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm py-2.5 px-3 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
          <span>এখনই ভর্তি হও</span>
          <Icon name="ph:arrow-right-bold" class="text-[14px]"/>
        </button>
      </div>
      <div class="h-[env(safe-area-inset-bottom)]"></div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  offer: {
    type: String,
    required: true
  },
  // Hides the sticky bar while the hero CTA is still on screen
  heroVisible: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['loaded'])

const config = useRuntimeConfig()
const apiBase = config.public.apiBase

const offerPriceKey = `offer_price_${props.offer}`
const baseOfferPriceKey = `base_offer_price_${props.offer}`
const showOnOfferKey = `show_on_offer_${props.offer}`

const sourceMap = {
  '2': 'offer-site-2',
  '3': 'offer-site-3',
}

const getDisplayPrice = (plan) => {
  if (plan[offerPriceKey] != null) return plan[offerPriceKey]
  if (plan.offer_price != null) return plan.offer_price
  if (plan.discount_expired_at > Date.now()) return plan.price - plan.discount
  return plan.price
}

const getBatchYear = (batch) => {
  const match = batch.match(/\d{4}/)
  return match ? match[0].slice(-2) : ''
}

const parseBatch = (batch) => {
  const match = batch.match(/^(\S+)\s+(\d{4})/)
  return match ? {level: match[1], year: match[2]} : {level: '', year: batch}
}

const allGroups = ['Science', 'Commerce', 'Arts']
const batchList = ref([])
const plansLoading = ref(true)
const selectedBatch = ref(null)
const selectedGroup = ref(null)

const name = ref('')
const phone = ref(null)
const coupon = ref(null)
const checkText = ref(true)
const paymentMethod = ref('bkash')
const isLoading = ref(false)
const typing = ref(false)
const alreadySubscribed = ref(false)
const alreadySubscribedMsg = ref('')

const isValidPhone = computed(() => /^01[3-9]\d{8}$/.test(phone.value))
const phoneError = computed(() => {
  if (!phone.value) return ''
  return isValidPhone.value ? '' : 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 01712345678)'
})

const orderFormRef = ref(null)
const formVisible = ref(false)

const showStickyBar = computed(() => {
  return !plansLoading.value && batchList.value.length > 0 && !formVisible.value && !props.heroVisible
})

const buttonDisabled = computed(() => {
  return !name.value || !isValidPhone.value || !selectedBatch.value || !selectedGroup.value || !checkText.value || alreadySubscribed.value
})

const selectBatch = (batch) => {
  selectedBatch.value = batch
  selectedGroup.value = batch.groups.includes('Science') ? 'Science' : batch.groups[0] || null
}

const selectGroup = (g) => {
  selectedGroup.value = g
}

const scrollToForm = () => {
  if (orderFormRef.value) {
    orderFormRef.value.scrollIntoView({behavior: 'smooth', block: 'center'})
  }
}

let observer = null
watch(orderFormRef, (el) => {
  if (observer) observer.disconnect()
  if (el) {
    observer = new IntersectionObserver(
        ([entry]) => {
          formVisible.value = entry.isIntersecting
        },
        {threshold: 0.15}
    )
    observer.observe(el)
  }
}, {immediate: true})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

onMounted(async () => {
  try {
    plansLoading.value = true
    const {data} = await useFetch(`${apiBase}/subscription/plans`)
    if (data.value?.subscriptions) {
      const offerPlans = data.value.subscriptions.filter(s => s[showOnOfferKey] === true)

      const batchMap = {}
      for (const plan of offerPlans) {
        if (!batchMap[plan.batch]) {
          const origPrice = plan[baseOfferPriceKey] ?? plan.base_offer_price ?? plan.price
          const dispPrice = getDisplayPrice(plan)
          const discPct = origPrice > 0 ? Math.round(((origPrice - dispPrice) / origPrice) * 100) : 0
          const {level} = parseBatch(plan.batch)
          batchMap[plan.batch] = {
            name: plan.batch,
            level,
            displayName: plan.batch,
            batchYear: getBatchYear(plan.batch),
            originalPrice: origPrice,
            displayPrice: dispPrice,
            discountPercent: discPct > 0 ? discPct : 0,
            validity: plan.validity,
            groups: [],
            plans: []
          }
        }
        if (!batchMap[plan.batch].groups.includes(plan.group)) {
          batchMap[plan.batch].groups.push(plan.group)
        }
        batchMap[plan.batch].plans.push(plan)
      }

      batchList.value = Object.values(batchMap).sort((a, b) => a.name.localeCompare(b.name))

      if (batchList.value.length > 0) {
        selectBatch(batchList.value[0])
      }
      emit('loaded', batchList.value)
    }
  } catch (e) {
    console.error('Failed to fetch subscription plans', e)
  } finally {
    plansLoading.value = false
  }
})

const submit = async () => {
  isLoading.value = true
  alreadySubscribed.value = false
  const payload = {
    name: name.value,
    phone: phone.value,
    group: selectedGroup.value,
    level: selectedBatch.value.name,
    coupon: coupon.value,
    source: sourceMap[props.offer] || `offer-site-${props.offer}`
  }
  localStorage.setItem('product', JSON.stringify(selectedBatch.value))
  localStorage.setItem('order', JSON.stringify(payload))
  const paymentEndpoint = paymentMethod.value === 'bkash'
      ? `${apiBase}/payment/bkash-external`
      : `${apiBase}/payment/bkash-thirdparty`
  try {
    const res = await $fetch(paymentEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    })
    const redirectURL = res?.bkashURL || res?.GatewayPageURL
    if (redirectURL) {
      localStorage.setItem('order', JSON.stringify(payload))
      window.location.href = redirectURL
    }
  } catch (err) {
    const errData = err?.data || err?.response?._data
    if (errData?.already_subscribed) {
      alreadySubscribed.value = true
      alreadySubscribedMsg.value = errData.message
    }
  }
  isLoading.value = false
}

watch([name, phone], () => {
  typing.value = true
}, {deep: true})

watch(typing, () => {
  if (typeof fbq === 'function') {
    fbq('track', 'AddToCart', {
      category_name: "HSC E-testPaper",
      phone: phone.value,
      name: name.value,
      event_url: `offer-${props.offer}`,
    })
  }
}, {deep: true})
</script>

<style lang="scss" scoped>
.sticky-bar-enter-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

.sticky-bar-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1), opacity 0.2s ease;
}

.sticky-bar-enter-from,
.sticky-bar-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
