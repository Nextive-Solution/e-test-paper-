<template>
  <div class="exam-finest bg-slate-950 text-slate-100 text-center font-['Hind_Siliguri']">

    <!-- ==================== HERO ==================== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-8 pb-9 px-5 md:pt-16 md:pb-24 border-b border-slate-800/80">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-72 md:w-[900px] md:h-[450px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-3xl mx-auto relative z-10 space-y-5 md:space-y-6">
        <p class="text-sm sm:text-base font-bold text-cyan-400 tracking-wide">
          HSC'26 ব্যাচ অকৃতকার্য শিক্ষার্থীদের জন্য
        </p>

        <!-- Brand & program badge -->
        <div class="flex flex-col md:flex-row items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
          <div class="inline-flex items-center gap-1.5">
            <img src="https://nextstatic.sgp1.digitaloceanspaces.com/uploads/etestpaper-logo.svg" alt="ই-টেস্টপেপার"
                 class="h-6 md:h-5 w-auto object-contain brightness-0 invert"/>
            <span>নিবেদিত</span>
          </div>
          <span class="hidden md:inline text-slate-600">·</span>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs backdrop-blur-md shadow-sm text-white font-bold">
            <Icon name="ph:fire-fill" class="text-cyan-400 text-[14px]"/>
            <span>Exam Finest <span class="text-cyan-400">Program</span></span>
            <span class="text-slate-600">·</span>
            <span class="text-amber-400">সময় সীমিত</span>
          </div>
        </div>

        <!-- Headline -->
        <h1 class="flex flex-col items-center tracking-tight text-white" style="text-wrap: balance">
          <span class="text-lg sm:text-xl md:text-3xl font-bold text-slate-200 mb-1">পরীক্ষায় পাস করা নিয়ে চিন্তিত?</span>
          <span class="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 py-1.5 leading-tight">
            ৩০ দিনে নিশ্চিত পাস!
          </span>
          <span class="text-lg sm:text-xl md:text-2xl font-normal text-white mt-1">না হলে সম্পূর্ণ টাকা ফেরত</span>
        </h1>

        <p class="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          HSC'26 ব্যাচে পিছিয়ে বা অকৃতকার্য শিক্ষার্থীদের জন্য বিগত ১০ বছরের বোর্ড প্রশ্ন এনালাইসিস ক্র্যাশ কোর্স ও দৈনিক রুটিন অ্যালার্ট।
        </p>

        <!-- Feature highlights -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 text-left max-w-2xl mx-auto">
          <div v-for="item in heroFeatures" :key="item"
               class="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200">
            <Icon name="ph:check-circle-fill" class="text-cyan-400 text-[16px] shrink-0"/>
            <span class="text-xs sm:text-sm font-medium leading-tight">{{ item }}</span>
          </div>
          <div class="col-span-2 sm:col-span-4 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
            <Icon name="ph:shield-check-fill" class="text-emerald-400 text-[16px] shrink-0"/>
            <span class="text-xs sm:text-sm font-bold leading-tight">১০০% মানিব্যাক গ্যারান্টি</span>
          </div>
        </div>

        <!-- Price & CTA -->
        <div class="space-y-3 md:space-y-4 pt-1 md:pt-3 max-w-md mx-auto">
          <div class="flex items-center justify-center">
            <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-950/30 max-w-full">
              <Icon name="ph:sparkle-fill" class="text-cyan-400 text-[14px] shrink-0"/>
              <span class="leading-tight">এক সাবস্ক্রিপশনে পাচ্ছো সর্বোচ্চ ৪টি বিষয়ে পাসের গ্যারান্টি</span>
            </div>
          </div>

          <div v-if="heroBatch" class="flex items-center justify-center gap-3">
            <span v-if="heroBatch.discountPercent > 0" class="text-slate-500 line-through text-sm sm:text-base">৳ {{ heroBatch.originalPrice?.toLocaleString() }}</span>
            <div class="flex items-baseline gap-1.5">
              <span class="text-3xl sm:text-4xl font-black text-white">৳ {{ heroBatch.displayPrice?.toLocaleString() }}</span>
              <span v-if="heroBatch.discountPercent > 0"
                    class="text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                {{ heroBatch.discountPercent }}% ছাড়
              </span>
            </div>
          </div>

          <button ref="heroCtaRef" @click="scrollToEnroll"
                  class="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base sm:text-lg py-3.5 px-8 rounded-xl shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <span>এখনই ভর্তি হও</span>
            <Icon name="ph:arrow-right-bold" class="text-[18px]"/>
          </button>

          <a href="tel:+8801646664222"
             class="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold pt-1">
            <Icon name="ph:phone-call-fill" class="text-[14px]"/>
            <span>সরাসরি হেল্পলাইন: +8801646664222</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ==================== TESTIMONIALS ==================== -->
    <section class="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-6xl mx-auto space-y-8 md:space-y-10 relative z-10">
        <div class="max-w-2xl mx-auto space-y-2">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">বিগত সালের সাফল্যের গল্প</h2>
          <p class="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
            ই-টেস্ট পেপারে নিয়মিত পড়াশোনায় পরীক্ষার্থীদের বাস্তব অভিজ্ঞতা ও রিভিউ
          </p>
        </div>

        <div class="relative md:px-8 space-y-4" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
          <button @click="prevSlide" aria-label="পূর্ববর্তী রিভিউ"
                  class="hidden md:flex absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-white items-center justify-center shadow-xl transition-all z-20">
            <Icon name="ph:caret-left-bold" class="text-[22px]"/>
          </button>
          <button @click="nextSlide" aria-label="পরবর্তী রিভিউ"
                  class="hidden md:flex absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-white items-center justify-center shadow-xl transition-all z-20">
            <Icon name="ph:caret-right-bold" class="text-[22px]"/>
          </button>

          <div class="relative overflow-hidden rounded-2xl"
               @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
            <div class="flex transition-transform duration-500 ease-out"
                 :style="{ transform: `translateX(-${currentIndex * (isDesktop ? 33.333333 : 100)}%)` }">
              <div v-for="t in testimonials" :key="t.name" class="w-full md:w-1/3 shrink-0 px-1 sm:px-2">
                <div class="bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 rounded-2xl p-5 sm:p-6 flex flex-col shadow-xl transition-all space-y-4 h-full min-h-[220px]">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-sm font-black text-white shrink-0 shadow-md">
                        {{ t.name.charAt(0) }}
                      </div>
                      <div class="text-left">
                        <h5 class="font-bold text-sm sm:text-base text-white leading-snug">{{ t.name }}</h5>
                        <p class="text-xs text-cyan-300 font-medium leading-tight mt-0.5">{{ t.exam }}</p>
                        <p class="text-xs text-slate-400 leading-tight">{{ t.college }}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-0.5 text-amber-400 shrink-0 pt-1">
                      <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="text-[13px]"/>
                    </div>
                  </div>
                  <div class="relative text-left flex-grow pt-1">
                    <Icon name="ph:quotes-fill" class="text-cyan-500/20 text-[24px] absolute -top-2 -left-1 pointer-events-none"/>
                    <p class="text-sm sm:text-base text-slate-200/95 italic leading-relaxed pl-5">"{{ t.quote }}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center gap-1.5 py-1">
            <button v-for="idx in maxIndex + 1" :key="idx" @click="currentIndex = idx - 1" :aria-label="`স্লাইড ${idx}`"
                    class="h-2 transition-all rounded-full"
                    :class="idx - 1 === currentIndex ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'"></button>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== ENROLL / PAYMENT ==================== -->
    <ExamFinestOrderSection :offer="offer" :hero-visible="heroCtaVisible" @loaded="onPlansLoaded"/>

    <!-- ==================== FAQ ==================== -->
    <section class="py-16 md:py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800 text-white">
      <div class="max-w-3xl mx-auto space-y-10">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <Icon name="ph:question-fill" class="text-[16px]"/>
            <span>সচরাচর জিজ্ঞাসিত প্রশ্নাবলি</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">সাধারণ প্রশ্ন ও উত্তর (FAQ)</h2>
          <p class="text-slate-300 text-sm sm:text-base">ভর্তি সংক্রান্ত যেকোনো দ্বিধা থাকলে নিচে জেনে নাও</p>
        </div>

        <div class="space-y-3 text-left">
          <div v-for="(faq, idx) in faqs" :key="idx"
               class="bg-slate-800/80 border border-slate-700/80 rounded-xl overflow-hidden">
            <button @click="openFaq = openFaq === idx ? null : idx"
                    class="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors">
              <span>{{ faq.q }}</span>
              <Icon :name="openFaq === idx ? 'ph:caret-up-bold' : 'ph:caret-down-bold'"
                    class="text-[18px] shrink-0" :class="openFaq === idx ? 'text-cyan-400' : 'text-slate-400'"/>
            </button>
            <div v-if="openFaq === idx"
                 class="px-4 sm:px-5 pb-5 pt-3 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-700/50">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scroll to top -->
    <Transition name="fade">
      <button v-if="showScrollTop" @click="scrollToTop" aria-label="উপরে যান"
              class="fixed right-4 bottom-24 md:bottom-6 z-40 w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center active:scale-95 transition-transform">
        <Icon name="ph:arrow-up-bold" class="text-[20px]"/>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import ExamFinestOrderSection from "~/components/offer/ExamFinestOrderSection.vue";

defineProps({
  offer: {
    type: String,
    required: true
  }
});

const heroFeatures = ['৭০% কমন টপিক', 'দৈনিক ৩ ঘণ্টার রুটিন', 'সকালের নোটিফিকেশন অ্যালার্ট', 'উইকলি গাইডলাইন সেশন']

const testimonials = [
  {
    name: 'তানভীর আহমেদ',
    exam: "HSC'26 পরীক্ষার্থী",
    college: 'নটর ডেম কলেজ, ঢাকা',
    quote: 'মোটা টেস্ট পেপারের চেয়ে ই-টেস্ট পেপারের অধ্যায়ভিত্তিক প্রশ্ন ও নির্ভুল ব্যাখ্যাগুলো আমাকে সবচেয়ে বেশি এগিয়ে রেখেছে। অ্যাপে যেকোনো সময় বিগত ১০ বছরের বোর্ড প্রশ্ন ও ট্রিকস প্র্যাকটিস করার সুবিধাটা দারুণ!'
  },
  {
    name: 'সাদিয়া আক্তার',
    exam: "HSC'26 পরীক্ষার্থী",
    college: 'ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ, ঢাকা',
    quote: 'ই-টেস্ট পেপারে পড়ার সবচেয়ে বড় সুবিধা হলো প্রতিটি বোর্ড প্রশ্নের সাথে পয়েন্ট আকারে সাজানো উত্তর ও কমন ভুলগুলো ধরিয়ে দেওয়া। কলেজের পরীক্ষার আগে দ্রুত রিভিশন দিতে ওয়েবসাইট আর অ্যাপের কোনো বিকল্প নেই!'
  },
  {
    name: 'আবরার জারিফ',
    exam: "HSC'26 পরীক্ষার্থী",
    college: 'ঢাকা রেসিডেনসিয়াল মডেল কলেজ',
    quote: 'ফিজিক্স আর ম্যাথের কঠিন সমস্যাগুলো নিয়ে আগে খুব দুশ্চিন্তায় থাকতাম। নিয়মিত ই-টেস্ট পেপারের ট্রিকস ও স্টেপ-বাই-স্টেপ সমাধান দেখে নিজের সব দুর্বলতা দূর করে ফেলেছি। এখন পড়াশোনায় দারুণ আত্মবিশ্বাস এসেছে!'
  },
  {
    name: 'সুমাইয়া তাসনিম',
    exam: "HSC'26 পরীক্ষার্থী",
    college: 'হলিক্রস কলেজ, ঢাকা',
    quote: 'আগে টেস্ট পেপার কিনে টেবিলের কোণায় ফেলে রাখতাম। কিন্তু ই-টেস্ট পেপারে বিষয়ভিত্তিক কুইজ ও CQ সলভ করতে করতে পড়ায় দারুণ আগ্রহ তৈরি হয়েছে। ফোনে বা ল্যাপটপে যখন-তখন পড়ার এই সুবিধাটা অসাধারণ!'
  },
  {
    name: 'রাফিদ আল হাসান',
    exam: "HSC'26 পরীক্ষার্থী",
    college: 'আদমজী ক্যান্টনমেন্ট কলেজ, ঢাকা',
    quote: 'টাইমার ধরে অ্যাপে বোর্ড স্ট্যান্ডার্ড প্র্যাকটিস করার অভিজ্ঞতা চমৎকার। কোন সৃজনশীলে কতটুকু সময় ব্যয় করা উচিত তা ই-টেস্ট পেপারে নিয়মিত সমাধান করেই ভালোভাবে আয়ত্ত করতে পেরেছি!'
  }
]

const faqs = [
  {
    q: '১০০% মানিব্যাক গ্যারান্টির শর্তাবলি কী কী?',
    a: 'আমাদের নির্দেশনা অনুযায়ী ৩০ দিনের প্রতিদিনের রুটিনের অন্তত ৭০% কার্যক্রম সম্পন্ন করা এবং ৪টি মডেল টেস্টে নিয়মিত অংশগ্রহণ করার পরও যদি কোনো শিক্ষার্থী বোর্ড পরীক্ষায় অকৃতকার্য হয়, তবে সম্পূর্ণ কোর্স ফি কোনো প্রশ্ন ছাড়াই ফেরত দেওয়া হবে।'
  },
  {
    q: 'আমি কীভাবে প্রতিদিনের পড়ার রুটিন ও নোটিফিকেশন পাব?',
    a: 'এনরোলমেন্ট সম্পন্ন হওয়ামাত্র আপনার মোবাইল নম্বর ও হোয়াটসঅ্যাপে ডেইলি স্টাডি প্ল্যানার পাঠিয়ে দেওয়া হবে। এছাড়া প্রতিদিন সকালে ও সন্ধ্যায় আমাদের অটোমেটেড রুটিন অ্যালার্ট পাঠানো হবে।'
  },
  {
    q: 'কোর্সটি কি শুধু বিজ্ঞান বিভাগের জন্য, নাকি সবার জন্য?',
    a: 'বিজ্ঞান, মানবিক, ব্যবসায় শিক্ষা এবং ডিগ্রি/মাদ্রাসা বোর্ড—সকল বিভাগের শিক্ষার্থীদের জন্য আলাদা স্পেশালাইজড সাবজেক্ট ট্র্যাক রয়েছে। প্রতিটি ট্র্যাকে বিগত ১০ বছরের প্রশ্ন এনালাইসিস অন্তর্ভুক্ত।'
  },
  {
    q: 'মডেল টেস্টগুলো কীভাবে নেওয়া হয়?',
    a: 'আমাদের ডেডিকেটেড এক্সাম পোর্টালে বোর্ড স্ট্যান্ডার্ড টাইমারে নৈর্ব্যক্তিক ও সৃজনশীল মডেল টেস্ট অনুষ্ঠিত হয়। পরীক্ষা শেষেই ভুল বিশ্লেষণ ও ব্যাখ্যা পাওয়া যায়।'
  },
  {
    q: 'পেমেন্ট করার কতক্ষণ পর অ্যাক্সেস পাব?',
    a: 'বিকাশ, নগদ বা রকেটের মাধ্যমে পেমেন্ট সম্পন্ন করার সাথে সাথে স্বয়ংক্রিয়ভাবে আপনার সাবস্ক্রিপশন চালু হবে এবং তাৎক্ষণিক অ্যাক্সেস পাবেন।'
  }
]

const openFaq = ref(0)

const showScrollTop = ref(false)
const onScroll = () => {
  showScrollTop.value = window.scrollY > 600
}
const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

// Hero price comes from the same plans the order section loads
const heroBatch = ref(null)
const onPlansLoaded = (batches) => {
  heroBatch.value = batches[0] || null
}

const scrollToEnroll = () => {
  document.getElementById('enroll')?.scrollIntoView({behavior: 'smooth'})
}

// Sticky bar stays hidden until the hero CTA scrolls out of view
const heroCtaRef = ref(null)
const heroCtaVisible = ref(true)
let heroObserver = null

// Testimonials carousel
const currentIndex = ref(0)
const isPaused = ref(false)
const isDesktop = ref(false)
const maxIndex = computed(() => isDesktop.value ? Math.max(0, testimonials.length - 3) : testimonials.length - 1)

const prevSlide = () => {
  currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1
}
const nextSlide = () => {
  currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
}

let touchStartX = null
let touchEndX = null
const onTouchStart = (e) => {
  isPaused.value = true
  touchStartX = e.targetTouches[0].clientX
}
const onTouchMove = (e) => {
  touchEndX = e.targetTouches[0].clientX
}
const onTouchEnd = () => {
  if (touchStartX !== null && touchEndX !== null) {
    const diff = touchStartX - touchEndX
    if (diff > 45) nextSlide()
    else if (diff < -45) prevSlide()
  }
  touchStartX = null
  touchEndX = null
  setTimeout(() => (isPaused.value = false), 2500)
}

const checkIsDesktop = () => {
  isDesktop.value = window.innerWidth >= 768
  if (currentIndex.value > maxIndex.value) currentIndex.value = maxIndex.value
}

let slideTimer = null

onMounted(() => {
  checkIsDesktop()
  window.addEventListener('resize', checkIsDesktop)
  window.addEventListener('scroll', onScroll, {passive: true})
  slideTimer = setInterval(() => {
    if (!isPaused.value) nextSlide()
  }, 4000)

  if (heroCtaRef.value) {
    heroObserver = new IntersectionObserver(([entry]) => {
      // Only treat the CTA as "passed" once it has scrolled above the viewport
      heroCtaVisible.value = entry.isIntersecting || entry.boundingClientRect.top > 0
    })
    heroObserver.observe(heroCtaRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIsDesktop)
  window.removeEventListener('scroll', onScroll)
  clearInterval(slideTimer)
  if (heroObserver) heroObserver.disconnect()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
