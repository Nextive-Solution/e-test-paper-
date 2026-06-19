<template>
  <div class="landing-page font-['Hind_Siliguri']">

    <!-- ==================== HERO ==================== -->
    <section class="hero-bg relative overflow-hidden">
      <!-- Animated background blobs -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Urgency pill -->
          <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-red-200/60 rounded-full px-5 py-2.5 shadow-lg shadow-red-500/5 animate-fade-in-up">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span class="text-[13px] md:text-[15px] font-[700] text-red-600">পরীক্ষা শুরু ২ জুলাই</span>
          </div>

          <!-- Main headline -->
          <h1 class="mt-6 md:mt-8 text-[28px] md:text-[52px] font-[900] leading-[1.15] animate-fade-in-up delay-100">
            <span class="hero-title-gradient">HSC 2026</span>
            <span class="text-slate-800"> — এখন আর</span>
            <br class="hidden md:block"/>
            <span class="text-slate-800">সব পড়ার সময় নেই।</span>
          </h1>

          <!-- Subtitle -->
          <p class="mt-4 md:mt-6 text-[14px] md:text-[20px] font-[600] text-[#2f8ce2]/90 animate-fade-in-up delay-200">
            {{ subtitle || 'Full Guide + Full Test Paper + Master Suggestion + Community Smart Practice — এক অ্যাপে' }}
          </p>

          <!-- Description -->
          <p class="mt-4 md:mt-6 text-[13px] md:text-[17px] text-slate-500 font-[500] leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-300">
            এখন থেকে Final Exam পর্যন্ত — কী পড়বেন, কোন প্রশ্ন আগে করবেন, কোথায় বেশি ভুল হচ্ছে এবং কীভাবে রিভিশন করবেন — সব এক জায়গায়।
          </p>

          <!-- Feature pills -->
          <div class="mt-6 md:mt-10 flex flex-wrap justify-center gap-2 md:gap-3 animate-fade-in-up delay-400">
            <div v-for="item in heroFeatures" :key="item" class="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-3.5 py-2 border border-[#047857]/10 shadow-sm">
              <Icon name="ph:check-circle-fill" class="text-[#047857] text-[16px] md:text-[18px] shrink-0"/>
              <span class="text-[11px] md:text-[13px] font-[600] text-slate-700">{{ item }}</span>
            </div>
          </div>

          <!-- CTA -->
          <div class="mt-8 md:mt-12 animate-fade-in-up delay-500">
            <button @click="scrollToOrder" class="cta-primary group">
              <span>এখনই অ্যাপ আনলক করুন</span>
              <svg class="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <!-- Pricing teaser -->
          <div class="mt-6 md:mt-8 animate-fade-in-up delay-500">
            <div class="inline-flex flex-col items-center gap-1 bg-gradient-to-r from-[#d30163]/5 to-[#d30163]/10 rounded-2xl px-6 py-3 border border-[#d30163]/10">
              <p class="text-[14px] md:text-[17px] font-[800] text-[#d30163]">
                Exam Season Offer শুরু ৬৯৯ টাকা থেকে
              </p>
              <div class="flex items-center gap-3">
                <span class="text-[12px] md:text-[13px] text-slate-400 font-[500] line-through">রেগুলার ৯৯৯ টাকা</span>
                <span class="text-[11px] md:text-[12px] bg-[#047857] text-white font-[700] px-2 py-0.5 rounded-full">সেভ ৩০%</span>
              </div>
            </div>
            <p class="mt-3 text-[12px] md:text-[13px] text-slate-400 font-[500]">
              একবার কিনলেই HSC Final Exam পর্যন্ত অ্যাক্সেস
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== PROBLEM ==================== -->
    <section class="relative py-12 md:py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6 max-w-3xl">
        <div class="text-center">
          <p class="text-[12px] md:text-[14px] font-[700] text-[#0381e0] uppercase tracking-widest">সমস্যা</p>
          <h2 class="mt-3 section-title text-slate-900">এখন HSC এর সবচেয়ে বড় সমস্যা</h2>
        </div>

        <div class="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div class="glass-card px-8 py-5 md:px-12 md:py-7 text-center">
            <p class="text-[22px] md:text-[36px] font-[900] text-slate-800">বই কম না।</p>
          </div>
          <div class="text-[24px] md:text-[32px] font-[300] text-slate-300 hidden md:block">vs</div>
          <div class="glass-card-accent px-8 py-5 md:px-12 md:py-7 text-center">
            <p class="text-[22px] md:text-[36px] font-[900] text-[#d30163]">সময় কম।</p>
          </div>
        </div>

        <div class="mt-8 md:mt-12 relative">
          <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0381e0] to-[#0381e0]/20 rounded-full"></div>
          <div class="pl-6 md:pl-8">
            <p class="text-[15px] md:text-[20px] text-slate-600 font-[600] italic leading-relaxed">
              "এই অল্প সময়ে কী পড়লে সবচেয়ে বেশি প্রস্তুতি নেওয়া যাবে?"
            </p>
            <p class="mt-4 text-[13px] md:text-[16px] text-slate-400 font-[500]">
              অনেকেই সব পড়তে গিয়ে শেষ সময়ে গুলিয়ে ফেলে।
            </p>
          </div>
        </div>

        <div class="mt-8 md:mt-12 text-center">
          <p class="text-[15px] md:text-[20px] font-[700] text-[#0d568b]">
            E-Test Paper তৈরি করা হয়েছে যেন আপনি—
          </p>
          <div class="mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <div v-for="item in problemSolutions" :key="item" class="flex items-start gap-3 text-left bg-[#f0fdf4] rounded-xl px-4 py-3 border border-[#047857]/8">
              <Icon name="ph:check-circle-fill" class="text-[#047857] text-[18px] shrink-0 mt-0.5"/>
              <span class="text-[13px] md:text-[15px] font-[600] text-slate-700">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== APP FEATURES ==================== -->
    <section class="py-12 md:py-20 section-gradient-blue">
      <div class="container mx-auto px-4 md:px-6 max-w-4xl">
        <div class="text-center">
          <p class="text-[12px] md:text-[14px] font-[700] text-[#0381e0] uppercase tracking-widest">ফিচারসমূহ</p>
          <h2 class="mt-3 section-title text-slate-900">এটা শুধু সাজেশন না</h2>
          <p class="mt-1 text-[16px] md:text-[22px] font-[700] text-[#0d568b]">আপনার HSC Final Preparation App</p>
          <p class="mt-2 md:mt-3 text-[14px] md:text-[17px] font-[500] text-slate-500">এক অ্যাপে পাবেন—</p>
        </div>

        <div class="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <div v-for="(item, i) in appFeatures" :key="i" class="feature-card-modern group">
            <div class="feature-icon-bg" :class="`icon-variant-${i}`">
              <span class="text-[24px] md:text-[28px]">{{ item.emoji }}</span>
            </div>
            <p class="mt-3 text-[13px] md:text-[16px] font-[700] text-slate-800 group-hover:text-[#0d568b] transition-colors">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== MASTER SUGGESTION ==================== -->
    <section class="py-12 md:py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6 max-w-3xl">
        <div class="text-center">
          <p class="text-[12px] md:text-[14px] font-[700] text-[#7c3aed] uppercase tracking-widest">বিশ্লেষণ</p>
          <h2 class="mt-3 section-title text-slate-900">১০ বছরের বোর্ড বিশ্লেষণভিত্তিক<br class="hidden md:block"/> Master Suggestion</h2>
          <p class="mt-2 md:mt-3 text-[14px] md:text-[18px] font-[600] text-slate-500">অগণিত প্রশ্নের ভিড়ে ফোকাসড প্রস্তুতি</p>
        </div>

        <div class="mt-6 md:mt-10 bg-gradient-to-br from-[#7c3aed]/5 to-[#a78bfa]/10 rounded-2xl p-5 md:p-8 border border-[#7c3aed]/10">
          <p class="text-[13px] md:text-[16px] text-slate-600 font-[500] text-center mb-5 ">
            বিগত <span class="font-[800] text-[#7c3aed]">১০ বছরের</span> বোর্ড প্রশ্ন বিশ্লেষণ করে তৈরি—
          </p>
          <div class="space-y-3">
            <div v-for="(item, i) in masterSuggestionFeatures" :key="item" class="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 shadow-sm border border-[#7c3aed]/5">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] flex items-center justify-center text-white font-[800] text-[13px] shrink-0">
                {{ i + 1 }}
              </div>
              <span class="text-[13px] md:text-[16px] font-[600] text-slate-700">{{ item }}</span>
            </div>
          </div>
          <p class="mt-5 text-[13px] md:text-[15px] text-slate-400 font-[500] text-center">
            যাতে কম সময়ে প্রস্তুতি গুছিয়ে নেওয়া যায়।
          </p>
        </div>
      </div>
    </section>

    <!-- ==================== COMMUNITY ==================== -->
    <section class="py-12 md:py-20 section-gradient-amber">
      <div class="container mx-auto px-4 md:px-6 max-w-3xl">
        <div class="text-center">
          <p class="text-[12px] md:text-[14px] font-[700] text-[#b45309] uppercase tracking-widest">কমিউনিটি</p>
          <h2 class="mt-3 section-title text-slate-900">লাখো শিক্ষার্থীর প্র্যাকটিস ইনসাইট</h2>
          <p class="mt-2 md:mt-3 text-[14px] md:text-[18px] font-[600] text-slate-500">
            শুধু আপনি না — অন্যরাও কী গুরুত্বপূর্ণ ভাবছে দেখুন
          </p>
        </div>

        <div class="mt-8 md:mt-10 space-y-3 max-w-lg mx-auto">
          <div v-for="item in communityInsights" :key="item.text" class="flex items-start gap-4 bg-white rounded-xl px-5 py-4 shadow-sm border border-amber-100">
            <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
              <span class="text-[20px]">{{ item.icon }}</span>
            </div>
            <span class="text-[13px] md:text-[16px] font-[600] text-slate-700 pt-2">{{ item.text }}</span>
          </div>
        </div>

        <div class="mt-6 md:mt-8 text-center">
          <div class="inline-flex items-center gap-3 bg-[#0d568b]/5 rounded-2xl px-6 py-4 border border-[#0d568b]/10">
            <Icon name="ph:lightbulb-fill" class="text-[#0d568b] text-[22px] md:text-[24px] shrink-0"/>
            <p class="text-[13px] md:text-[16px] font-[700] text-[#0d568b] text-left">
              এতে বুঝতে পারবেন — এখন কোথায় বেশি ফোকাস দেওয়া দরকার
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== MISTAKE FEATURE ==================== -->
    <section class="py-12 md:py-20 bg-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div class="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <div class="text-center">
          <div class="inline-flex items-center gap-2 bg-red-50 border border-red-200/60 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Icon name="ph:fire-fill" class="text-red-500 text-[14px]"/>
            <span class="text-[12px] md:text-[13px] font-[700] text-red-600">সবচেয়ে শক্তিশালী ফিচার</span>
          </div>
          <h2 class="section-title text-slate-900">Mistake Feature</h2>
          <p class="mt-2 md:mt-3 text-[16px] md:text-[24px] font-[800] text-[#dc2626]">
            একবার ভুল? আবার খুঁজতে হবে না।
          </p>
        </div>

        <div class="mt-6 md:mt-10 bg-gradient-to-br from-red-50/80 to-white rounded-2xl p-5 md:p-8 border border-red-100">
          <p class="text-[13px] md:text-[16px] text-slate-600 font-[500] text-center">
            প্র্যাকটিস করতে গিয়ে ভুল করলে — সেই প্রশ্ন <span class="font-[700] text-[#dc2626]">Mistake Section</span> এ জমা হবে।
          </p>
          <p class="mt-2 text-[13px] md:text-[15px] text-slate-500 font-[500] text-center">তারপর—</p>

          <div class="mt-5 space-y-3">
            <div v-for="(item, i) in mistakeFeatures" :key="item" class="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 shadow-sm border border-red-50">
              <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#dc2626] to-[#f87171] flex items-center justify-center shrink-0">
                <Icon name="ph:check-bold" class="text-white text-[12px]"/>
              </div>
              <span class="text-[13px] md:text-[16px] font-[600] text-slate-700">{{ item }}</span>
            </div>
          </div>

          <p class="mt-5 text-[13px] md:text-[15px] text-slate-400 font-[500] text-center italic">
            কারণ শেষ সময়ে ভুল কমানোও প্রস্তুতির গুরুত্বপূর্ণ অংশ।
          </p>
        </div>
      </div>
    </section>

    <!-- ==================== PREPARATION FLOW ==================== -->
    <section class="py-12 md:py-20 section-gradient-blue">
      <div class="container mx-auto px-4 md:px-6 max-w-2xl">
        <div class="text-center">
          <p class="text-[12px] md:text-[14px] font-[700] text-[#0381e0] uppercase tracking-widest">প্রস্তুতি</p>
          <h2 class="mt-3 section-title text-slate-900">আপনার Final Preparation Flow</h2>
        </div>

        <div class="mt-8 md:mt-12">
          <div v-for="(step, i) in prepSteps" :key="i" class="flex items-start gap-4 md:gap-5">
            <div class="flex flex-col items-center">
              <div class="step-number" :class="`step-color-${i}`">
                {{ i + 1 }}
              </div>
              <div v-if="i < prepSteps.length - 1" class="w-px h-6 md:h-8 bg-gradient-to-b from-[#2f8ce2]/40 to-transparent"></div>
            </div>
            <div class="flex-1 pb-4">
              <div class="bg-white rounded-xl px-4 py-3.5 md:px-5 md:py-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0381e0]/20 transition-all duration-300">
                <p class="text-[14px] md:text-[18px] font-[700] text-slate-800">{{ step.title }}</p>
                <p class="mt-1 text-[12px] md:text-[14px] text-slate-400 font-[500]">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== WHAT YOU GET ==================== -->
    <section class="py-12 md:py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6 max-w-3xl">
        <div class="text-center">
          <p class="text-[12px] md:text-[14px] font-[700] text-[#047857] uppercase tracking-widest">সুবিধাসমূহ</p>
          <h2 class="mt-3 section-title text-slate-900">একবার কিনলেই যা পাবেন</h2>
        </div>
        <div class="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          <div v-for="item in whatYouGet" :key="item" class="flex items-center gap-3 bg-gradient-to-r from-[#f0fdf4] to-white rounded-xl px-4 py-3.5 border border-[#047857]/8 hover:border-[#047857]/20 hover:shadow-sm transition-all duration-300">
            <Icon name="ph:check-circle-fill" class="text-[#047857] text-[18px] md:text-[20px] shrink-0"/>
            <span class="text-[13px] md:text-[15px] font-[600] text-slate-700">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== CONTENT INSIGHTS (১-৬) ==================== -->
    <section class="py-12 md:py-20 section-gradient-blue">
      <div class="container mx-auto px-4 md:px-6 max-w-4xl">
        <div class="text-center">
          <p class="text-[12px] md:text-[14px] font-[700] text-[#0381e0] uppercase tracking-widest">কেন E-Test Paper?</p>
          <h2 class="mt-3 section-title text-slate-900">তুমি কি সঠিক স্ট্র্যাটেজিতে আছো?</h2>
        </div>

        <!-- Active card indicator -->
        <div class="flex justify-center gap-2 mt-6 md:mt-8">
          <button v-for="(_, i) in contentCards" :key="i"
            @click="activeCard = i"
            class="w-2.5 h-2.5 rounded-full transition-all duration-300"
            :class="activeCard === i ? 'bg-[#0d568b] scale-125' : 'bg-slate-300 hover:bg-slate-400'">
          </button>
        </div>

        <!-- Cards container -->
        <div class="mt-6 md:mt-8 relative overflow-hidden" @touchstart="onTouchStart" @touchend="onTouchEnd">
          <div class="transition-all duration-500 ease-out" :style="{ transform: `translateX(-${activeCard * 100}%)` }">
            <div class="flex">
              <div v-for="(card, i) in contentCards" :key="i" class="w-full shrink-0 px-1">
                <div class="content-insight-card">
                  <!-- Card number -->
                  <div class="absolute top-4 right-4 md:top-5 md:right-5 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0d568b]/5 flex items-center justify-center">
                    <span class="text-[12px] md:text-[14px] font-[800] text-[#0d568b]/40">{{ card.num }}</span>
                  </div>

                  <!-- Hook -->
                  <p class="text-[15px] md:text-[20px] font-[800] text-slate-900 leading-snug pr-10">{{ card.hook }}</p>

                  <!-- Body -->
                  <p class="mt-3 md:mt-4 text-[13px] md:text-[15px] text-slate-600 font-[500] leading-relaxed">{{ card.body }}</p>

                  <!-- Smart student points (if exists) -->
                  <div v-if="card.smartPoints" class="mt-4 md:mt-5">
                    <p class="text-[13px] md:text-[15px] font-[700] text-[#0d568b]">{{ card.smartLabel }}</p>
                    <div class="mt-2 space-y-2">
                      <div v-for="point in card.smartPoints" :key="point" class="flex items-start gap-2">
                        <Icon name="ph:arrow-right-bold" class="text-[#0381e0] text-[13px] md:text-[14px] shrink-0 mt-0.5"/>
                        <span class="text-[12px] md:text-[14px] font-[600] text-slate-600">{{ point }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Separator -->
                  <div class="my-4 md:my-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                  <!-- Shared bottom: এখন দরকার -->
                  <p class="text-[13px] md:text-[15px] font-[700] text-slate-800">এখন দরকার—</p>
                  <div class="mt-2 space-y-1.5">
                    <div v-for="need in sharedNeeds" :key="need" class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 rounded-full bg-[#0381e0] shrink-0"></div>
                      <span class="text-[12px] md:text-[14px] font-[600] text-slate-600">{{ need }}</span>
                    </div>
                  </div>

                  <!-- Shared pitch -->
                  <div class="mt-4 md:mt-5 bg-gradient-to-r from-[#0d568b]/5 to-[#2f8ce2]/5 rounded-xl p-3.5 md:p-4">
                    <p class="text-[12px] md:text-[14px] text-slate-600 font-[500] leading-relaxed">
                      সারাদেশ থেকে সবাই কোন প্রশ্নগুলো বেশি প্রায়রিটি দিচ্ছে এবং কোন প্রশ্নগুলো সবথেকে বেশি ভুল করছে — সেইসাথে তোমার ভুলগুলো ট্র্যাক করে বেশি করে প্র্যাকটিস করা।
                    </p>
                  </div>

                  <!-- Pricing in card -->
                  <div class="mt-4 md:mt-5 flex flex-wrap items-center gap-2 md:gap-3">
                    <span class="bg-[#d30163] text-white text-[11px] md:text-[12px] font-[700] px-3 py-1 rounded-full">স্পেশাল অফার</span>
                    <span class="text-[14px] md:text-[16px] font-[800] text-[#047857]">৬৯৯ টাকা</span>
                    <span class="text-[11px] md:text-[13px] text-slate-400 line-through">৯৯৯ টাকা</span>
                  </div>
                  <p class="mt-1.5 text-[11px] md:text-[13px] text-slate-500 font-[500]">
                    ৫০০ টাকায় ২ জনে | ৪০০ টাকায় ৬ জনে
                  </p>

                  <!-- Card CTA -->
                  <button @click="scrollToOrder" class="mt-4 md:mt-5 w-full py-3 rounded-xl text-[13px] md:text-[15px] font-[700] bg-gradient-to-r from-[#0d568b] to-[#2f8ce2] text-white hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300">
                    আজই E-Test Paper আনলক করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Swipe navigation buttons -->
        <div class="flex justify-center gap-3 mt-5 md:mt-6">
          <button @click="activeCard = Math.max(0, activeCard - 1)"
            :disabled="activeCard === 0"
            class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200"
            :class="activeCard === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#0d568b] hover:text-white hover:border-[#0d568b]'">
            <Icon name="ph:caret-left-bold" class="text-[16px]"/>
          </button>
          <span class="flex items-center text-[13px] md:text-[14px] font-[600] text-slate-400">
            {{ activeCard + 1 }} / {{ contentCards.length }}
          </span>
          <button @click="activeCard = Math.min(contentCards.length - 1, activeCard + 1)"
            :disabled="activeCard === contentCards.length - 1"
            class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200"
            :class="activeCard === contentCards.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#0d568b] hover:text-white hover:border-[#0d568b]'">
            <Icon name="ph:caret-right-bold" class="text-[16px]"/>
          </button>
        </div>
      </div>
    </section>

    <!-- ==================== PRICING ==================== -->
    <section class="py-12 md:py-20 pricing-bg relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-20 -left-20 w-60 h-60 bg-[#0381e0]/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 -right-20 w-80 h-80 bg-[#7c3aed]/5 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
        <p class="text-[12px] md:text-[14px] font-[700] text-[#0381e0] uppercase tracking-widest">মূল্য</p>
        <p class="mt-3 text-[13px] md:text-[16px] font-[600] text-slate-500">
          একটি গাইড বইয়ের দামের মধ্যেই — পুরো HSC Final Preparation System
        </p>
        <h2 class="mt-2 section-title text-slate-900">HSC 2026 Exam Pass</h2>
        <div class="mt-2 flex items-center justify-center gap-3">
          <span class="text-[14px] md:text-[16px] text-slate-400 font-[500] line-through">রেগুলার ৯৯৯ টাকা</span>
        </div>
        <p class="mt-1 text-[12px] md:text-[14px] text-slate-500 font-[500]">একবার কিনলেই — HSC Final Exam পর্যন্ত অ্যাক্সেস</p>

        <!-- Pricing cards -->
        <div class="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <!-- Solo -->
          <div class="pricing-card">
            <div class="text-[28px] md:text-[32px]">👤</div>
            <p class="mt-2 text-[18px] md:text-[20px] font-[800] text-slate-800">Solo Pass</p>
            <p class="mt-3 text-[32px] md:text-[40px] font-[900] text-[#047857] leading-none">৳৬৯৯</p>
            <p class="mt-2 text-[13px] md:text-[14px] text-slate-500 font-[500]">১ জনের জন্য</p>
            <button @click="scrollToOrder" class="mt-4 w-full py-2.5 rounded-xl text-[13px] md:text-[14px] font-[700] border-2 border-[#0d568b] text-[#0d568b] hover:bg-[#0d568b] hover:text-white transition-all duration-300">
              শুরু করুন
            </button>
          </div>

          <!-- Friend Pack - Popular -->
          <div class="pricing-card-popular">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span class="bg-gradient-to-r from-[#d30163] to-[#e8266d] text-white text-[11px] md:text-[12px] font-[700] px-4 py-1.5 rounded-full shadow-lg shadow-pink-500/20">
                Most Popular
              </span>
            </div>
            <div class="text-[28px] md:text-[32px]">👥</div>
            <p class="mt-2 text-[18px] md:text-[20px] font-[800] text-white">Friend Pack</p>
            <p class="mt-3 text-[32px] md:text-[40px] font-[900] text-white leading-none">৳৯৯৯</p>
            <p class="mt-2 text-[13px] md:text-[14px] text-white/70 font-[500]">২ জন একসাথে — প্রতি জন মাত্র ৫০০ টাকা</p>
            <button @click="scrollToOrder" class="mt-4 w-full py-2.5 rounded-xl text-[13px] md:text-[14px] font-[700] bg-white text-[#0d568b] hover:bg-white/90 transition-all duration-300 shadow-md">
              বন্ধু নিয়ে শুরু করুন
            </button>
          </div>

          <!-- Group Pack -->
          <div class="pricing-card">
            <div class="text-[28px] md:text-[32px]">👨‍👩‍👧‍👦</div>
            <p class="mt-2 text-[18px] md:text-[20px] font-[800] text-slate-800">Group Pack</p>
            <p class="mt-3 text-[32px] md:text-[40px] font-[900] text-[#047857] leading-none">৳২,৩৯৯</p>
            <p class="mt-2 text-[13px] md:text-[14px] text-slate-500 font-[500]">৬ জন একসাথে — প্রতি জন মাত্র ৪০০ টাকা</p>
            <button @click="scrollToOrder" class="mt-4 w-full py-2.5 rounded-xl text-[13px] md:text-[14px] font-[700] border-2 border-[#0d568b] text-[#0d568b] hover:bg-[#0d568b] hover:text-white transition-all duration-300">
              গ্রুপে শুরু করুন
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== FAQ ==================== -->
    <section class="py-12 md:py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6 max-w-2xl">
        <div class="text-center">
          <p class="text-[12px] md:text-[14px] font-[700] text-[#0381e0] uppercase tracking-widest">প্রশ্নোত্তর</p>
          <h2 class="mt-3 section-title text-slate-900">সচরাচর জিজ্ঞাসা</h2>
        </div>
        <div class="mt-8 md:mt-10 space-y-3">
          <div v-for="(faq, i) in faqs" :key="i"
               class="rounded-2xl overflow-hidden border transition-all duration-300"
               :class="openFaq === i ? 'border-[#0381e0]/20 bg-[#f0f7ff] shadow-sm' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'">
            <button @click="toggleFaq(i)" class="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left">
              <span class="text-[14px] md:text-[16px] font-[700] pr-4" :class="openFaq === i ? 'text-[#0d568b]' : 'text-slate-800'">{{ faq.q }}</span>
              <div class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors" :class="openFaq === i ? 'bg-[#0381e0] text-white' : 'bg-gray-200 text-gray-500'">
                <Icon :name="openFaq === i ? 'ph:minus-bold' : 'ph:plus-bold'" class="text-[14px]"/>
              </div>
            </button>
            <Transition name="faq">
              <div v-if="openFaq === i" class="px-5 md:px-6 pb-5">
                <p class="text-[13px] md:text-[15px] text-slate-600 font-[500] leading-relaxed">{{ faq.a }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== FINAL CTA ==================== -->
    <section class="final-cta-bg py-14 md:py-20 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#2f8ce2]/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 max-w-2xl text-center relative z-10">
        <p class="text-[24px] md:text-[40px] font-[900] text-white leading-tight">পরীক্ষা সামনে।</p>
        <p class="mt-3 md:mt-4 text-[14px] md:text-[18px] font-[500] text-white/60">
          এখন গুরুত্বপূর্ণ জিনিস আগে শেষ করার সময়।
        </p>
        <p class="mt-5 md:mt-6 text-[16px] md:text-[22px] font-[700] text-white/90">
          আজই E-Test Paper আনলক করুন।
        </p>
        <p class="mt-2 text-[13px] md:text-[15px] font-[500] text-white/40">
          প্র্যাকটিস করুন → ভুল ধরুন → Final পর্যন্ত প্রস্তুত থাকুন।
        </p>
        <div class="mt-8 md:mt-10">
          <button @click="scrollToOrder" class="cta-glass group">
            <span>এখনই শুরু করুন</span>
            <svg class="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  offer: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
});

const activeCard = ref(0);
const openFaq = ref(null);

// Touch swipe for content cards
const touchStartX = ref(0);
const touchEndX = ref(0);

const onTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX;
};

const onTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX;
  const diff = touchStartX.value - touchEndX.value;
  if (Math.abs(diff) > 50) {
    if (diff > 0 && activeCard.value < contentCards.length - 1) {
      activeCard.value++;
    } else if (diff < 0 && activeCard.value > 0) {
      activeCard.value--;
    }
  }
};

const toggleFaq = (i) => {
  openFaq.value = openFaq.value === i ? null : i;
};

const heroFeatures = [
  'সব বিষয়',
  'Full Guide + Full Test Paper',
  'Master Suggestion',
  'Community Smart Practice',
  'Mistake Tracking + Final Revision',
];

const problemSolutions = [
  'কী গুরুত্বপূর্ণ আগে বুঝতে পারেন',
  'দ্রুত প্র্যাকটিস করতে পারেন',
  'নিজের দুর্বল জায়গা আলাদা করতে পারেন',
  'শেষ সময়ের প্রস্তুতি আরও স্মার্ট করতে পারেন',
];

const appFeatures = [
  { emoji: '📚', title: 'Full Guide Book' },
  { emoji: '📝', title: 'Full Test Paper' },
  { emoji: '🎯', title: 'Master Suggestion' },
  { emoji: '📊', title: 'Community Learning' },
  { emoji: '🧠', title: 'Mistake Tracking' },
  { emoji: '⚡', title: 'Final Revision' },
];

const masterSuggestionFeatures = [
  'গুরুত্বপূর্ণ প্রশ্ন',
  'বেশি পুনরাবৃত্ত টপিক',
  'দ্রুত রিভিশনের জন্য নির্বাচিত অংশ',
];

const communityInsights = [
  { icon: '🔥', text: 'কোন প্রশ্ন বেশি গুরুত্বপূর্ণ হিসেবে মার্ক হচ্ছে' },
  { icon: '📈', text: 'কোন প্রশ্ন বেশি প্র্যাকটিস হচ্ছে' },
  { icon: '⚠️', text: 'কোন প্রশ্নে বেশি ভুল হচ্ছে' },
];

const mistakeFeatures = [
  'পরে আবার প্র্যাকটিস করুন',
  'দুর্বল জায়গা শক্ত করুন',
  'পরীক্ষার আগে শুধু নিজের ভুলগুলো রিভিশন করুন',
];

const prepSteps = [
  { title: 'Master Suggestion দেখুন', desc: 'কোন প্রশ্ন বেশি গুরুত্বপূর্ণ জানুন' },
  { title: 'গুরুত্বপূর্ণ প্রশ্ন প্র্যাকটিস করুন', desc: 'ফোকাসড প্র্যাকটিস শুরু করুন' },
  { title: 'Mistake List তৈরি করুন', desc: 'ভুলগুলো অটো-ট্র্যাক হবে' },
  { title: 'Final Revision দিন', desc: 'শুধু দুর্বল জায়গা রিভিশন করুন' },
];

const whatYouGet = [
  'HSC Final Exam পর্যন্ত অ্যাক্সেস',
  'সব বিষয়',
  'Full Guide',
  'Full Test Paper',
  '১০ বছরের Master Suggestion',
  'Community প্রশ্ন ইনসাইট',
  'Mistake Feature',
  'অ্যাপ আপডেট',
];

const faqs = [
  { q: 'এটা কি শুধু সাজেশন?', a: 'না। এটি Full Guide + Test Paper + Practice App।' },
  { q: 'আমি কি নিজের ভুলগুলো পরে আবার করতে পারবো?', a: 'হ্যাঁ। ভুল করা প্রশ্ন Mistake Section এ জমা হবে এবং পরে আবার প্র্যাকটিস করতে পারবেন।' },
  { q: 'সব বিষয় থাকবে?', a: 'হ্যাঁ, আপনার বিভাগের প্রয়োজনীয় বিষয়গুলো থাকবে।' },
  { q: 'কতদিন ব্যবহার করতে পারবো?', a: 'HSC Final Exam পর্যন্ত।' },
];

const contentCards = [
  {
    num: '১',
    hook: 'HSC শুরু ২ জুলাই। তুমি এখনো পুরো সিলেবাস cover করার চেষ্টা করছো — কিন্তু পরীক্ষায় আসে selective pattern',
    body: 'এখন সব পড়ার চেষ্টা করাটা ভুল। যদি এখনও পুরো বই শেষ করার চেষ্টা করো, তাহলে সম্ভবত তুমি ভুল স্ট্র্যাটেজিতে আছো।',
    smartLabel: 'স্মার্ট স্টুডেন্টরা কী করছে?',
    smartPoints: [
      'High probability প্রশ্ন ফোকাস করছে',
      'Weak area identify করে practice করছে',
      'সময় বাঁচিয়ে score বাড়াচ্ছে',
    ],
  },
  {
    num: '২',
    hook: 'HSC শুরু ২ জুলাই। বাংলাদেশের অন্যরা কোন গুরুত্বপূর্ন প্রশ্ন বেশি প্রাকটিস করছে— তুমি জানো?',
    body: 'যে প্রশ্নগুলো হাজার হাজার শিক্ষার্থী গুরুত্বপূর্ণ মার্ক করছে সেগুলো তুমি দেখছো? কোন প্রশ্নগুলো বেশি ভুল হচ্ছে সেগুলো জানো? নাকি এখনও এলোমেলো পড়ছো?',
    smartLabel: null,
    smartPoints: null,
  },
  {
    num: '৩',
    hook: 'HSC শুরু ২ জুলাই। এই সময়ে তোমার সবচেয়ে বড় শত্রু কম পড়া না — তোমার সবচেয়ে বড় শত্রু ভুল জিনিসে সময় নষ্ট।',
    body: 'রিসার্চ বলছে যেই প্রশ্নগুলো পরিক্ষায় আসবেই না বেশিরভাগ পরিক্ষার্থী সেই প্রশ্নগুলোতেই অনেক বেশি ফোকাস দিচ্ছো। ফলে কাজের কাজ কিছুই হচ্ছে না কিন্তু সময়তো চলে যাচ্ছে।',
    smartLabel: null,
    smartPoints: null,
  },
  {
    num: '৪',
    hook: 'এই ভুলটা HSC পরীক্ষার আগে প্রায় সবাই করে। সবাই নতুন প্রশ্ন খুঁজে, কিন্তু নিজের আগের করা ভুলগুলো আর দেখে না।',
    body: 'অথচ সমিক্ষা বলছে পরিক্ষায় সবথেকে বেশি ঐ প্রশ্নগুলোই কমন পড়ে যেই প্রশ্নগুলো বিগত সময়ে শিক্ষার্থীরা বেশি ভুল করেছে। তাই পরিক্ষায় ভালো করতে নতুন প্রশ্ন না — দরকার বেশি ভুল করা প্রশ্নগুলো ট্র্যাক করে বার বার প্র্যাকটিস করে পূর্ন প্রস্তুতি নিয়ে রাখা।',
    smartLabel: null,
    smartPoints: null,
  },
  {
    num: '৫',
    hook: 'একটা প্রশ্ন— আজ HSC পরীক্ষা হলে তুমি প্রস্তুত?',
    body: 'যদি উত্তর ১০০% না হয়… তাহলে শেষ সময়টা প্ল্যান করে ব্যবহার করো।',
    smartLabel: null,
    smartPoints: null,
  },
  {
    num: '৬',
    hook: 'HSC পরীক্ষার আগের ১৫ দিনে কেউ নতুন সিলেবাস শেষ করে না।',
    body: 'এখন নতুন কিছু শেখার সময় নেই — এখন দরকার যা পড়েছো তা গুছিয়ে রিভিশন করা এবং দুর্বল জায়গা শক্ত করা।',
    smartLabel: null,
    smartPoints: null,
  },
];

const sharedNeeds = [
  'কি আগে পড়বে',
  'কি বাদ দিবে',
  'কোথায় বেশি ফোকাস করবে',
];

const scrollToOrder = () => {
  const el = document.getElementById('orderSection');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style lang="scss" scoped>
/* ===== Section titles ===== */
.section-title {
  font-size: 22px;
  font-weight: 900;
  line-height: 1.25;

  @media (min-width: 768px) {
    font-size: 40px;
  }
}

/* ===== Hero ===== */
.hero-bg {
  background: linear-gradient(180deg, #f0f7ff 0%, #e4f0fc 40%, #f6fcfd 100%);
}

.hero-title-gradient {
  background: linear-gradient(135deg, #0d568b 0%, #2f8ce2 50%, #0d568b 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

/* Blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
}

.blob-1 {
  width: 300px;
  height: 300px;
  background: rgba(47, 140, 226, 0.25);
  top: -80px;
  right: -60px;
  animation: float 8s ease-in-out infinite;

  @media (min-width: 768px) { width: 500px; height: 500px; }
}

.blob-2 {
  width: 250px;
  height: 250px;
  background: rgba(124, 58, 237, 0.15);
  bottom: -50px;
  left: -80px;
  animation: float 10s ease-in-out infinite reverse;

  @media (min-width: 768px) { width: 400px; height: 400px; }
}

.blob-3 {
  width: 180px;
  height: 180px;
  background: rgba(4, 120, 87, 0.12);
  top: 60%;
  left: 50%;
  animation: float 12s ease-in-out infinite;

  @media (min-width: 768px) { width: 300px; height: 300px; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-30px); }
}

/* ===== Glass cards ===== */
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
}

.glass-card-accent {
  background: rgba(211, 1, 99, 0.04);
  backdrop-filter: blur(12px);
  border: 2px solid rgba(211, 1, 99, 0.12);
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(211, 1, 99, 0.06);
}

/* ===== Section gradients ===== */
.section-gradient-blue {
  background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
}

.section-gradient-amber {
  background: linear-gradient(180deg, #fffbf0 0%, #ffffff 100%);
}

/* ===== Feature cards ===== */
.feature-card-modern {
  background: #ffffff;
  border-radius: 20px;
  padding: 24px 16px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(13, 86, 139, 0.1);
    border-color: rgba(13, 86, 139, 0.1);
  }

  @media (min-width: 768px) {
    padding: 32px 20px;
  }
}

.feature-icon-bg {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    border-radius: 18px;
  }
}

.icon-variant-0 { background: linear-gradient(135deg, #eff6ff, #dbeafe); }
.icon-variant-1 { background: linear-gradient(135deg, #f0fdf4, #dcfce7); }
.icon-variant-2 { background: linear-gradient(135deg, #faf5ff, #ede9fe); }
.icon-variant-3 { background: linear-gradient(135deg, #fff7ed, #fed7aa); }
.icon-variant-4 { background: linear-gradient(135deg, #fef2f2, #fecaca); }
.icon-variant-5 { background: linear-gradient(135deg, #ecfdf5, #a7f3d0); }

/* ===== Content insight cards ===== */
.content-insight-card {
  position: relative;
  background: #ffffff;
  border-radius: 24px;
  padding: 24px 20px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    padding: 32px 28px;
  }
}

/* ===== Step numbers ===== */
.step-number {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 16px;
  color: #ffffff;
  shrink: 0;

  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 18px;
    border-radius: 16px;
  }
}

.step-color-0 { background: linear-gradient(135deg, #0d568b, #2f8ce2); }
.step-color-1 { background: linear-gradient(135deg, #047857, #10b981); }
.step-color-2 { background: linear-gradient(135deg, #dc2626, #f87171); }
.step-color-3 { background: linear-gradient(135deg, #7c3aed, #a78bfa); }

/* ===== Pricing ===== */
.pricing-bg {
  background: linear-gradient(180deg, #f8fafc 0%, #f0f7ff 50%, #e7f3fc 100%);
}

.pricing-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  padding: 28px 20px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }

  @media (min-width: 768px) {
    padding: 36px 24px;
  }
}

.pricing-card-popular {
  position: relative;
  background: linear-gradient(135deg, #0d568b, #1a6fba, #2f8ce2);
  border: none;
  border-radius: 24px;
  padding: 32px 20px 28px;
  box-shadow: 0 8px 40px rgba(13, 86, 139, 0.25);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 56px rgba(13, 86, 139, 0.35);
  }

  @media (min-width: 768px) {
    padding: 40px 24px 36px;
    transform: scale(1.04);

    &:hover {
      transform: scale(1.04) translateY(-6px);
    }
  }
}

/* ===== CTA Buttons ===== */
.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: linear-gradient(135deg, #0d568b, #2f8ce2);
  color: #ffffff;
  border: none;
  border-radius: 60px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 24px rgba(13, 86, 139, 0.3), 0 0 0 0 rgba(13, 86, 139, 0);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 36px rgba(13, 86, 139, 0.4), 0 0 0 4px rgba(47, 140, 226, 0.15);

    &::before { left: 100%; }
  }

  &:active { transform: translateY(-1px); }

  @media (min-width: 768px) {
    padding: 20px 48px;
    font-size: 20px;
  }
}

.cta-glass {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.95);
  color: #0d568b;
  border: none;
  border-radius: 60px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 24px rgba(255, 255, 255, 0.2), 0 0 0 0 rgba(255, 255, 255, 0);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 36px rgba(255, 255, 255, 0.3), 0 0 0 4px rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 768px) {
    padding: 20px 48px;
    font-size: 20px;
  }
}

/* ===== Final CTA ===== */
.final-cta-bg {
  background: linear-gradient(135deg, #0a1628 0%, #0d568b 50%, #1a3a5c 100%);
}

/* ===== FAQ transitions ===== */
.faq-enter-active { transition: all 0.3s ease-out; }
.faq-leave-active { transition: all 0.2s ease-in; }
.faq-enter-from, .faq-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ===== Animations ===== */
.animate-fade-in-up {
  animation: fadeInUp 0.7s ease-out both;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }

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
</style>
