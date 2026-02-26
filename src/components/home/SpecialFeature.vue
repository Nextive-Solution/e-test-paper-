<template>
  <div class="special-feature-section">
    <div class="container mx-auto py-8 md:py-16 px-4 md:px-6">

      <!-- Section heading -->
      <div class="text-center mb-6 md:mb-10 animate-fade-in-up">
        <h2 class="section-title font-['Hind_Siliguri']">ই-টেস্টপেপার এর স্পেশাল ফিচারসমূহ</h2>
      </div>

      <!-- Feature description -->
      <div class="text-center max-w-4xl mx-auto mb-8 md:mb-12 animate-fade-in-up delay-100">
        <p class="text-[14px] md:text-[18px] text-slate-600 font-[500] leading-relaxed font-['Hind_Siliguri']">
          ই-টেস্ট পেপার হলো দেশের প্রথম ডিজিটাল টেস্ট পেপার। যা ফিজিকাল টেস্ট পেপার এর একমাত্র বিকল্প।
          যেখানে সারাবছর SSC ও HSC শিক্ষার্থীরা গাইড, সাপ্লিমেন্ট কিংবা টেস্ট পেপার এর মত বোর্ড এবং কলেজ
          প্রশ্নব্যাংক প্র্যাকটিস, সাজেশন, মডেল টেস্ট সহ পড়াশোনাকে ইজি এবং ইফেক্টিভ করতে সকল আয়োজন এক সাথে পাওয়া
          যায়।
        </p>
      </div>

      <!-- Features grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto animate-fade-in-up delay-200">
        <div v-for="(item, i) in features" :key="i" class="feature-card" :style="{ animationDelay: `${i * 60}ms` }">
          <div class="feature-card-inner">
            <div class="feature-icon-wrap" :class="`icon-color-${i % 4}`">
              <Icon :name="item.icon" class="text-[20px] md:text-[22px] text-white" />
            </div>
            <div class="feature-content">
              <h3 class="feature-title font-['Hind_Siliguri']">{{ item.title }}</h3>
              <p class="feature-desc font-['Hind_Siliguri']">{{ item.description }}</p>
              <span v-if="item.upcoming" class="upcoming-badge font-['Hind_Siliguri']">Upcoming</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="flex justify-center mt-10 md:mt-14 animate-fade-in-up delay-300">
        <button @click="findActiveLayer" class="cta-main group">
          <span class="font-['Hind_Siliguri']">সকল ফিচারের এক্সেস পেতে সাবস্ক্রাইব করুন</span>
          <svg class="cta-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
  {
    icon: 'ph:bank-bold',
    title: 'বোর্ড প্রশ্ন ব্যাংক',
    description: 'SSC ও HSC শিক্ষার্থীরা বিগত বছরগুলোর বোর্ড পরীক্ষায় আসা সকল বিষয়ের MCQ এবং CQ পাবে।',
  },
  {
    icon: 'ph:graduation-cap-bold',
    title: 'কলেজ / স্কুল প্রশ্ন ব্যাংক',
    description: 'শীর্ষস্থানীয় কলেজ ও স্কুলগুলোর নির্বাচনী পরীক্ষায় আসা সকল বিষয়ের MCQ এবং CQ পাবে।',
  },
  {
    icon: 'ph:book-open-text-bold',
    title: 'অধ্যায় ভিত্তিক প্রশ্ন ব্যাংক',
    description: 'বোর্ড, কলেজ, স্কুল এবং বাছাইকৃত প্রশ্ন দিয়ে সাজানো অধ্যায় ভিত্তিক প্রশ্ন ব্যাংক। টপিক, বোর্ড, কলেজ ফিল্টার করে পড়া যাবে।',
  },
  {
    icon: 'ph:buildings-bold',
    title: 'ভার্সিটি এডমিশন',
    description: 'HSC শিক্ষার্থীরা ভার্সিটি প্রিপারেশনের জন্য বিভিন্ন বিশ্ববিদ্যালয়ের প্রিভিয়াস ইয়ার প্রশ্ন ব্যাংক পাবে।',
  },
  {
    icon: 'ph:student-bold',
    title: 'কলেজ এডমিশন',
    description: 'SSC শিক্ষার্থীরা কলেজে ভর্তির জন্য শীর্ষ কলেজের প্রিভিয়াস ইয়ার প্রশ্ন ব্যাংক পাবে।',
  },
  {
    icon: 'ph:exam-bold',
    title: 'মডেল টেস্ট',
    description: 'টপিক ভিত্তিক সিলেবাস শেষ করার মডেল টেস্ট এবং বোর্ড স্ট্যান্ডার্ড ফাইনাল মডেল টেস্ট দেওয়া যাবে।',
  },
  {
    icon: 'ph:lightbulb-bold',
    title: 'সাজেশন',
    description: 'প্রতিটি বিষয়ের জন্য অধ্যায় ও টপিক ভিত্তিক স্পেশাল সাজেশন থাকবে।',
  },
  {
    icon: 'ph:lightning-bold',
    title: 'Unlimited Quick Test',
    description: 'অধ্যায় ভিত্তিক ২০টি করে MCQ টেস্ট দিতে পারবে অনলিমিটেড বার।',
  },
  {
    icon: 'ph:clipboard-text-bold',
    title: 'Mock Test',
    description: 'একাধিক সাবজেক্ট সিলেক্ট করে CQ এবং MCQ পরীক্ষা দেওয়া যাবে।',
  },
  {
    icon: 'ph:heart-bold',
    title: 'ফেভারিট প্রশ্ন',
    description: 'গুরুত্বপূর্ণ প্রশ্ন সেভ করে রাখা এবং আলাদা প্র্যাকটিসের সুযোগ থাকবে।',
  },
  {
    icon: 'ph:arrow-counter-clockwise-bold',
    title: 'প্রিভিয়াস মিস্টেক',
    description: 'ভুল করা MCQ গুলো অটোমেটিক সেভ থাকবে এবং আলাদা করে প্র্যাকটিস করা যাবে।',
  },
  {
    icon: 'ph:magnifying-glass-bold',
    title: 'MCQ সার্চ',
    description: 'বিভিন্ন কীওয়ার্ড সার্চ করে সহজেই MCQ প্র্যাকটিস করা যাবে।',
  },
]);

const findActiveLayer = () => {
  const currentActiveElement = document.getElementById('orderSection');
  if (currentActiveElement) {
    currentActiveElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style lang="scss" scoped>
.special-feature-section {
  background: linear-gradient(180deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%);
}

/* Section title */
.section-title {
  font-size: 26px;
  font-weight: 800;
  background: linear-gradient(135deg, #047857 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 46px;
  }
}

/* Feature cards */
.feature-card {
  animation: fadeInUp 0.5s ease-out both;
}

.feature-card-inner {
  display: flex;
  gap: 14px;
  padding: 18px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid rgba(4, 120, 87, 0.08);
  box-shadow: 0 2px 12px rgba(4, 120, 87, 0.04);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(4, 120, 87, 0.1);
    border-color: rgba(16, 185, 129, 0.2);
  }

  @media (min-width: 768px) {
    padding: 22px;
    gap: 16px;
  }
}

.feature-icon-wrap {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }
}

/* 4 rotating icon bg colors */
.icon-color-0 {
  background: linear-gradient(135deg, #047857, #10b981);
}

.icon-color-1 {
  background: linear-gradient(135deg, #0d568b, #2f8ce2);
}

.icon-color-2 {
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
}

.icon-color-3 {
  background: linear-gradient(135deg, #e11d48, #fb7185);
}

.feature-content {
  flex: 1;
  min-width: 0;
}

.feature-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 4px;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 6px;
  }
}

.feature-desc {
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 14px;
  }
}

.upcoming-badge {
  display: inline-block;
  margin-top: 6px;
  padding: 2px 10px;
  font-size: 11px;
  font-weight: 700;
  color: #047857;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 20px;
  letter-spacing: 0.5px;
}

/* CTA Button */
.cta-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #047857, #10b981);
  color: #ffffff;
  border: none;
  border-radius: 60px;
  font-weight: 800;
  font-size: 13px;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  text-align: center;
  line-height: 1.4;
  transition: all 0.3s ease;
  box-shadow:
    0 4px 20px rgba(4, 120, 87, 0.35),
    0 2px 8px rgba(0, 0, 0, 0.1);
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
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 8px 32px rgba(4, 120, 87, 0.45),
      0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (min-width: 768px) {
    padding: 18px 42px;
    font-size: 22px;
    gap: 14px;
    width: auto;
    max-width: none;
  }
}

.cta-arrow {
  transition: transform 0.3s ease;
  flex-shrink: 0;

  .group:hover & {
    transform: translateX(4px);
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
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
</style>
