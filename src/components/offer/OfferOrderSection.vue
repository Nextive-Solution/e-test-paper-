<template>
  <div class="container mx-auto py-6 md:py-12 px-4 md:px-0" :class="showStickyBar ? 'pb-40 md:pb-12' : ''">
    <div class="text-center">
      <p class="text-[26px] md:text-[46px] font-[700] text-[#0381e0]">
        প্রয়োজনে কল করো- <a href="tel:+8801646664222" class="text-[#0381e0]">01646664222</a>
      </p>
    </div>
    <div class="text-center pt-2 md:pt-4">
      <p class="text-[16px] md:text-[26px] text-[#000000] font-[600]">ই-টেস্টপেপার এর পূর্নাঙ্গ এক্সেস পেতে</p>
      <p class="text-[16px] md:text-[26px] text-[#000000] font-[600]">তোমার <span class="text-[#d30163]">ব্যাচ</span>,
        <span class="text-[#7b37f4]">গ্রুপ</span>, <span class="text-[#d30163]">নাম</span> এবং <span
            class="text-[#7b37f4]">ফোন নাম্বার</span> দিয়ে</p>
      <p class="text-[16px] md:text-[26px] text-[#000000] font-[600]"><span
          class="text-[#ad00df]">"কনফার্ম অর্ডার"</span> বাটনে ক্লিক করো</p>
    </div>

    <!-- Already Subscribed Modal -->
    <div v-if="alreadySubscribed" class="fixed inset-0 z-50 flex items-center justify-center px-4" @click.self="alreadySubscribed = false">
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div class="relative bg-white rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-2xl text-center z-10">
        <button @click="alreadySubscribed = false" class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors">
          <Icon name="ph:x-bold" class="text-[20px]"/>
        </button>
        <div class="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
          <Icon class="text-amber-500 text-[32px]" name="ph:warning-circle-fill"/>
        </div>
        <p class="text-[16px] md:text-[18px] font-[700] text-gray-800 mt-4 font-['Hind_Siliguri']">{{ alreadySubscribedMsg }}</p>
        <div class="flex flex-col gap-2 mt-5">
          <a href="https://www.etestpaper.net" class="block px-6 py-2.5 bg-gradient-to-r from-[#0d568b] to-[#2f8ce2] text-white font-[600] rounded-xl text-[14px] md:text-[16px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            ওয়েবসাইটে যান
          </a>
          <button @click="alreadySubscribed = false" class="px-6 py-2.5 text-gray-500 font-[600] rounded-xl text-[14px] md:text-[16px] hover:bg-gray-100 transition-colors">
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="plansLoading" class="flex justify-center py-8">
      <div class="flex flex-col items-center gap-3">
        <div class="w-10 h-10 border-4 border-[#0381e0] border-t-transparent rounded-full animate-spin"></div>
        <p class="text-[14px] md:text-[16px] text-gray-500 font-[500]">প্ল্যান লোড হচ্ছে...</p>
      </div>
    </div>

    <template v-else>
      <!-- Step 1: Batch Selection -->
      <div class="pt-4 md:pt-8">
        <p class="text-center text-[16px] md:text-[20px] font-[700] text-gray-700 mb-4">তোমার ব্যাচ সিলেক্ট করো</p>
        <div class="md:flex justify-center gap-x-4">
          <div v-for="(batch, i) in batchList" :key="i" class="w-full py-2 md:py-0 xl:w-[40%]">
            <div @click="selectBatch(batch)"
                 :class="selectedBatch === batch
                   ? 'ring-2 ring-[#0381e0] bg-white shadow-lg shadow-blue-100'
                   : 'ring-1 ring-[#c8cdd2] bg-white hover:ring-[#0381e0] hover:shadow-md'"
                 class="cursor-pointer rounded-xl p-3 md:p-4 flex items-center gap-x-4 w-full transition-all duration-300">
              <div class="bg-gradient-to-br from-[#0d568b] to-[#2f8ce2] text-[28px] md:text-[46px] font-extrabold text-white px-4 py-1 rounded-lg italic shrink-0 shadow-md">
                {{ batch.batchYear }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-x-2">
                  <p class="text-[16px] md:text-[22px] font-[700] truncate" :class="selectedBatch === batch ? 'text-[#0381e0]' : 'text-gray-800'">{{ batch.displayName }}</p>
                  <div v-if="selectedBatch === batch" class="shrink-0">
                    <Icon class="text-green-500 text-[22px] md:text-[26px]" name="ph:check-circle-fill"/>
                  </div>
                </div>
                <div class="flex items-center gap-x-2 mt-1">
                  <span class="text-red-400 line-through text-[13px] md:text-[17px] font-[500]">৳{{ batch.originalPrice }}</span>
                  <span class="text-[18px] md:text-[24px] font-[800] text-[#047857]">৳{{ batch.displayPrice }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3: Form + Features (always visible) -->
      <div class="md:flex justify-center md:pt-8">
        <div class="grid grid-cols-1 md:grid-cols-2 w-full xl:w-[80%] gap-x-12">
          <!-- Order Form -->
          <div ref="orderFormRef" class="order-2 md:order-1 pt-4 md:pt-0">
            <div class="bg-[#f0f7ff] rounded-2xl p-5 md:p-7">
              <p class="text-[20px] md:text-[24px] text-center font-[700] pb-5">
                Order Details
              </p>

              <!-- Name -->
              <div>
                <label class="text-[13px] md:text-[14px] font-[700] text-gray-700 uppercase tracking-wide">Name <span class="text-red-500">*</span></label>
                <input v-model="name" type="text"
                       class="mt-1.5 border border-gray-200 bg-white focus:border-[#0381e0] text-[15px] md:text-[16px] rounded-xl px-4 py-3 w-full outline-none transition-colors duration-200"
                       placeholder="Enter your name"/>
              </div>

              <!-- Phone -->
              <div class="pt-5">
                <label class="text-[13px] md:text-[14px] font-[700] text-gray-700 uppercase tracking-wide">Phone Number <span class="text-red-500">*</span></label>
                <input v-model="phone" type="text" maxlength="11"
                       class="mt-1.5 border bg-white text-[15px] md:text-[16px] rounded-xl px-4 py-3 w-full outline-none transition-colors duration-200"
                       :class="phone && !isValidPhone ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#0381e0]'"
                       placeholder="01XXXXXXXXX"/>
                <p v-if="phoneError" class="text-red-500 text-[12px] md:text-[13px] font-[500] mt-1">{{ phoneError }}</p>
              </div>

              <!-- Batch selector inside form -->
              <div class="pt-5">
                <label class="text-[13px] md:text-[14px] font-[700] text-gray-700 uppercase tracking-wide">Batch <span class="text-red-500">*</span></label>
                <div class="flex gap-2 mt-1.5">
                  <button
                    v-for="batch in batchList"
                    :key="batch.name"
                    @click="selectBatch(batch)"
                    class="flex-1 rounded-xl py-2.5 px-3 text-center transition-all duration-200"
                    :class="selectedBatch === batch
                      ? 'bg-gradient-to-r from-[#0d568b] to-[#2f8ce2] text-white shadow-md'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-[#0381e0]'"
                  >
                    <p class="text-[13px] md:text-[14px] font-[700]">HSC BATCH {{ batch.name.replace('HSC ', '') }}</p>
                    <div class="flex items-center justify-center gap-1 mt-0.5">
                      <span class="line-through text-[11px] font-[500]" :class="selectedBatch === batch ? 'text-white/60' : 'text-gray-400'">৳{{ batch.originalPrice }}</span>
                      <span class="text-[14px] font-[800]">৳{{ batch.displayPrice }}</span>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Group selector inside form -->
              <div class="pt-5">
                <label class="text-[13px] md:text-[14px] font-[700] text-gray-700 uppercase tracking-wide">Group <span class="text-red-500">*</span></label>
                <div class="flex gap-2 mt-1.5">
                  <button
                    v-for="g in (selectedBatch?.groups || allGroups)"
                    :key="g"
                    @click="selectedBatch && selectGroup(g)"
                    class="px-5 py-2 rounded-xl text-[13px] md:text-[14px] font-[700] transition-all duration-200"
                    :class="selectedGroup === g
                      ? 'bg-[#0381e0] text-white shadow-md'
                      : selectedBatch
                        ? 'bg-white border border-gray-200 text-gray-700 hover:border-[#0381e0]'
                        : 'bg-white border border-gray-200 text-gray-300 cursor-not-allowed'"
                  >{{ g }}</button>
                </div>
              </div>

              <!-- Terms -->
              <div class="pt-5">
                <div class="flex items-start gap-x-2">
                  <Icon class="text-[#0381e0] text-[18px] shrink-0 mt-0.5" name="ph:check-circle-fill"/>
                  <span class="text-[13px] md:text-[14px] text-gray-600 leading-tight">I Agree to the
                    <a href="https://www.etestpaper.net/about/terms" target="_blank" class="text-[#0381e0] font-[600]">Terms & Conditions</a>,
                    <a href="https://www.etestpaper.net/about/privacy" target="_blank" class="text-[#0381e0] font-[600]">Privacy Policy</a> &
                    <a href="https://www.etestpaper.net/about/refund" target="_blank" class="text-[#0381e0] font-[600]">Refund Policy</a>
                  </span>
                </div>
              </div>

              <!-- Submit -->
              <button @click="submit" :disabled="buttonDisabled || isLoading"
                      :class="buttonDisabled || isLoading ? 'bg-gray-300 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#0d568b] to-[#2f8ce2] text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 cursor-pointer'"
                      class="w-full text-[18px] md:text-[22px] font-[700] rounded-xl py-3.5 mt-5 transition-all duration-300 flex items-center justify-center gap-2">
                <div v-if="isLoading" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{{ isLoading ? 'প্রসেসিং...' : 'কনফার্ম অর্ডার' }}</span>
              </button>
            </div>
          </div>

          <!-- Features -->
          <div v-if="selectedBatch" class="pt-4 md:pt-0 order-1 md:order-2">
            <div class="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
              <p class="text-[18px] md:text-[24px] text-center font-[700] font-['Hind_Siliguri'] text-[#047857] pb-3">
                {{ selectedBatch.name }} ব্যাচের ই-টেস্টপেপার সাবস্ক্রিপশনে যা যা পাচ্ছোঃ</p>
              <div class="space-y-2 md:space-y-3">
                <div v-for="(feature, i) in selectedBatch.features" :key="i"
                     class="flex items-start gap-x-2.5 bg-green-50/60 rounded-lg px-3 py-2">
                  <Icon class="text-[#047857] text-[18px] md:text-[20px] shrink-0 mt-0.5" name="ph:check-circle-fill"/>
                  <p class="text-[14px] md:text-[16px] font-[500] font-['Hind_Siliguri'] text-gray-700">{{ feature.label }}</p>
                </div>
              </div>
              <div class="mt-4 pt-3 border-t border-gray-100 text-center">
                <p class="text-[13px] md:text-[14px] text-gray-400 font-[500]">সর্বমোট মূল্য</p>
                <div class="flex items-center justify-center gap-x-3 mt-1">
                  <span class="text-red-400 line-through text-[16px] md:text-[20px] font-[500]">৳{{ selectedBatch.originalPrice }}</span>
                  <span class="text-[24px] md:text-[32px] font-[800] text-[#047857]">৳{{ selectedBatch.displayPrice }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>

  <!-- Sticky Bottom Bar -->
  <Transition name="sticky-bar">
  <div v-if="showStickyBar" class="fixed bottom-0 left-0 right-0 z-40 md:hidden">
    <div class="bg-white/80 backdrop-blur-xl border-t border-white/50 shadow-[0_-8px_32px_rgba(0,0,0,0.12)]">
      <div class="flex gap-2 px-3 pt-3">
        <button
          v-for="batch in batchList"
          :key="batch.name"
          @click="selectBatch(batch)"
          class="flex-1 rounded-xl py-2 px-2 text-center transition-all duration-300"
          :class="selectedBatch === batch
            ? 'bg-gradient-to-br from-[#0d568b] via-[#1a6fba] to-[#2f8ce2] text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
            : 'bg-gray-50/80 text-gray-600 hover:bg-gray-100'"
        >
          <p class="text-[12px] md:text-[14px] font-[800] tracking-wide">HSC {{ batch.name.replace('HSC ', '') }}</p>
          <div class="flex items-center justify-center gap-1.5 mt-0.5">
            <span class="line-through text-[10px] md:text-[12px] font-[500]" :class="selectedBatch === batch ? 'text-white/50' : 'text-gray-400'">৳{{ batch.originalPrice }}</span>
            <span class="text-[15px] md:text-[17px] font-[900]" :class="selectedBatch === batch ? 'text-white' : 'text-gray-800'">৳{{ batch.displayPrice }}</span>
          </div>
        </button>
      </div>

      <div class="mx-3 my-2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div class="flex items-center justify-between px-3 pb-3 gap-3">
        <div class="flex gap-1.5 flex-1 min-w-0">
          <button
            v-for="g in (selectedBatch?.groups || [])"
            :key="g"
            @click="selectGroup(g)"
            class="px-3 md:px-4 py-2 rounded-xl text-[11px] md:text-[12px] font-[700] transition-all duration-200 uppercase tracking-wide"
            :class="selectedGroup === g
              ? 'bg-[#0d568b] text-white shadow-md shadow-blue-500/20'
              : 'bg-gray-50/80 text-gray-500 hover:bg-gray-100 border border-gray-200/60'"
          >{{ g }}</button>
        </div>

        <button
          @click="scrollToFormOrSubmit"
          :disabled="isLoading"
          class="flex items-center gap-2 bg-gradient-to-r from-[#d30163] to-[#e8266d] text-white pl-4 pr-5 md:pl-5 md:pr-6 py-2.5 rounded-xl text-[13px] md:text-[14px] font-[800] shrink-0 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
          </span>
          অর্ডার করুন
        </button>
      </div>
    </div>
    <div class="bg-white/80 backdrop-blur-xl h-[env(safe-area-inset-bottom)]"></div>
  </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  offer: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    default: null
  }
});

const config = useRuntimeConfig()
const apiBase = config.public.apiBase

const offerPriceKey = `offer_price_${props.offer}`
const baseOfferPriceKey = `base_offer_price_${props.offer}`
const showOnOfferKey = `show_on_offer_${props.offer}`

const sourceMap = {
  '2': 'offer-site-2',
  '3': 'offer-site-3',
}

const featuresByBatch = {
  'HSC 2027': [
    {label: 'সকল বিষয়ের ৯ বছরের  বোর্ড প্রশ্ন ও সমাধান'},
    {label: 'সকল বিষয়ের ৪ বছরের কলেজ প্রশ্ন ও সমাধান'},
    {label: 'সকল বিষয় এর অধ্যায় ভিত্তিক হাজারো CQ & MCQ'},
    {label: '৫০ ডে চ্যালেঞ্জ প্রোগ্রাম ও ফাইনাল মডেল টেস্ট'},
    {label: 'সকল CQ & MCQ আনলিমিটেড প্র্যাকটিস'},
    {label: 'গুরুত্বপূর্ণ প্রশ্ন মার্ক করে রাখা এবং ভুল প্রশ্নে আলাদা প্র্যাকটিস'},
    {label: 'এছাড়া তোমার পূর্নাঙ্গ প্রস্তুতি সহায়ক যাবতীয় সমাধান একসাথে'}
  ],
  'HSC 2026': [
    {label: 'সকল বিষয়ের ৮ বছরের  বোর্ড প্রশ্ন ও সমাধান'},
    {label: 'সকল বিষয়ের ৪ বছরের কলেজ প্রশ্ন ও সমাধান'},
    {label: 'সকল বিষয় এর অধ্যায় ভিত্তিক হাজারো CQ & MCQ'},
    {label: '৫০ ডে চ্যালেঞ্জ প্রোগ্রাম ও ফাইনাল মডেল টেস্ট'},
    {label: 'সকল CQ & MCQ আনলিমিটেড প্র্যাকটিস'},
    {label: 'গুরুত্বপূর্ণ প্রশ্ন মার্ক করে রাখা এবং ভুল প্রশ্নে আলাদা প্র্যাকটিস'},
    {label: 'এছাড়া তোমার পূর্নাঙ্গ প্রস্তুতি সহায়ক যাবতীয় সমাধান একসাথে'}
  ],
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

const allGroups = ['Science', 'Commerce', 'Arts']
const batchList = ref([])
const plansLoading = ref(true)
const selectedBatch = ref(null)
const selectedGroup = ref(null)

const name = ref('')
const phone = ref(null)
const coupon = ref(null)
const checkText = ref(true)
const isLoading = ref(false)
const typing = ref(false)
const alreadySubscribed = ref(false)
const alreadySubscribedMsg = ref('')

const isValidPhone = computed(() => /^01[3-9]\d{8}$/.test(phone.value))
const phoneError = computed(() => {
  if (!phone.value) return ''
  return isValidPhone.value ? '' : 'সঠিক ফোন নাম্বার দিন (01XXXXXXXXX)'
})

const showStickyBar = computed(() => {
  return !plansLoading.value && batchList.value.length > 0 && !formVisible.value
})

const buttonDisabled = computed(() => {
  return !name.value || !isValidPhone.value || !selectedBatch.value || !selectedGroup.value || !checkText.value || alreadySubscribed.value
})

const selectBatch = (batch) => {
  selectedBatch.value = batch
  selectedGroup.value = batch.groups.includes('Science') ? 'Science' : batch.groups[0] || null
}

const orderFormRef = ref(null)
const formVisible = ref(false)

const selectGroup = (g) => {
  selectedGroup.value = g
}

const scrollToFormOrSubmit = () => {
  if (!selectedBatch.value || !selectedGroup.value) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  if (orderFormRef.value) {
    orderFormRef.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

let observer = null
watch(orderFormRef, (el) => {
  if (observer) observer.disconnect()
  if (el) {
    observer = new IntersectionObserver(
      ([entry]) => { formVisible.value = entry.isIntersecting },
      { threshold: 0.15 }
    )
    observer.observe(el)
  }
}, { immediate: true })

onUnmounted(() => {
  if (observer) observer.disconnect()
})

onMounted(async () => {
  try {
    plansLoading.value = true
    const { data } = await useFetch(`${apiBase}/subscription/plans`)
    if (data.value?.subscriptions) {
      let offerPlans = data.value.subscriptions.filter(s => s[showOnOfferKey] === true)
      if (props.batch) {
        offerPlans = offerPlans.filter(s => s.batch === props.batch)
      }

      const batchMap = {}
      for (const plan of offerPlans) {
        if (!batchMap[plan.batch]) {
          const origPrice = plan[baseOfferPriceKey] ?? plan.base_offer_price ?? plan.price
          const dispPrice = getDisplayPrice(plan)
          const discPct = origPrice > 0 ? Math.round(((origPrice - dispPrice) / origPrice) * 100) : 0
          batchMap[plan.batch] = {
            name: plan.batch,
            displayName: `HSC BATCH ${plan.batch.replace('HSC ', '')}`,
            batchYear: getBatchYear(plan.batch),
            originalPrice: origPrice,
            displayPrice: dispPrice,
            discountPercent: discPct > 0 ? discPct : 0,
            features: featuresByBatch[plan.batch] || [],
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
  try {
    const res = await $fetch(`${apiBase}/payment/bkash-thirdparty`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    })
    if (res?.GatewayPageURL) {
      localStorage.setItem('order', JSON.stringify(payload))
      window.location.href = res.GatewayPageURL
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
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.sticky-bar-enter-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}
.sticky-bar-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1), opacity 0.2s ease;
}
.sticky-bar-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.sticky-bar-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
