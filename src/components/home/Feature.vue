<template>
  <div class="feature-section">
    <div class="container mx-auto pt-8 md:pt-16 px-4 md:px-6 relative z-10">

      <!-- Section heading -->
      <div class="text-center mb-4 md:mb-8 animate-fade-in-up">
        <h2 class="section-title font-['Hind_Siliguri']">
          ই-টেস্ট পেপার কেন পড়বো ?
        </h2>
      </div>

      <!-- Comparison table - Desktop -->
      <div class="hidden md:block max-w-5xl mx-auto animate-fade-in-up delay-100">
        <div class="comparison-table">
          <!-- Table header -->
          <div class="table-header">
            <div class="table-header-cell feature-col font-['Hind_Siliguri']">বৈশিষ্ট্য</div>
            <div class="table-header-cell physical-col font-['Hind_Siliguri']">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              জেনারেল/ফিজিক্যাল টেস্ট পেপার
            </div>
            <div class="table-header-cell digital-col font-['Hind_Siliguri']">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              ই-টেস্ট পেপার
            </div>
          </div>

          <!-- Table rows -->
          <div v-for="(item, index) in comparisonData" :key="index" class="table-row"
            :class="{ 'row-alt': index % 2 === 0 }">
            <div class="table-cell feature-col font-['Hind_Siliguri']">
              <span class="feature-label">{{ item.feature }}</span>
            </div>
            <div class="table-cell physical-col font-['Hind_Siliguri']">
              <div class="cell-content physical">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  class="icon-cross">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>{{ item.physical }}</span>
              </div>
            </div>
            <div class="table-cell digital-col font-['Hind_Siliguri']">
              <div class="cell-content digital">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  class="icon-check">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{{ item.digital }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Comparison cards - Mobile -->
      <div class="md:hidden space-y-4 animate-fade-in-up delay-100">
        <div v-for="(item, index) in comparisonData" :key="index" class="comparison-card">
          <div class="card-feature font-['Hind_Siliguri']">{{ item.feature }}</div>
          <div class="card-row physical font-['Hind_Siliguri']">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              class="icon-cross">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span>{{ item.physical }}</span>
          </div>
          <div class="card-row digital font-['Hind_Siliguri']">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              class="icon-check">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{{ item.digital }}</span>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="flex justify-center py-6  md:py-8 animate-fade-in-up delay-200">
        <button @click="findActiveLayer" class="cta-main group">
          <span class="font-['Hind_Siliguri']">সকল বিষয়ের টেস্টপেপার একত্রে পেতে ক্লিক করো</span>
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

const comparisonData = ref([
  {
    feature: 'প্র্যাকটিস সুবিধা',
    physical: 'বইতে বারবার পরীক্ষা দেওয়ার বা প্র্যাকটিসের সুযোগ নেই।',
    digital: 'আনলিমিটেড প্র্যাকটিস করার পূর্ণ স্বাধীনতা রয়েছে।',
  },
  {
    feature: 'প্রশ্নভাণ্ডার',
    physical: 'পেজ লিমিটের কারণে প্রশ্নের পরিমাণ সীমিত থাকে।',
    digital: '৮-৯ বছরের বোর্ড প্রশ্ন এবং সাথে এডমিশন প্রশ্ন ব্যাংক যুক্ত থাকে।',
  },
  {
    feature: 'নোটস ও মার্কিং',
    physical: 'লাল/নীল কালি দিয়ে দাগালে তা আর মোছা বা রিমুভ করা পসিবল হয় না।',
    digital: "এক ক্লিকেই 'Favorite' মার্ক করা এবং প্রয়োজন শেষে রিমুভ করা পসিবল।",
  },
  {
    feature: 'ভুল ট্র্যাকিং',
    physical: 'নিজের করা ভুলগুলো আলাদা করে মনে রাখা বা সেভ রাখা যায় না।',
    digital: "'Previous Mistakes' সেকশনে ভুলগুলো অটোমেটিক সেভ থাকে।",
  },
  {
    feature: 'সার্চিং সুবিধা',
    physical: 'নির্দিষ্ট কোনো এমসিকিউ বা টপিক সার্চ করে পড়া যায় না।',
    digital: 'খুব সহজেই এমসিকিউ সার্চ করে কাঙ্ক্ষিত প্রশ্ন বের করা যায়।',
  },
  {
    feature: 'অ্যাডভান্সড ফিল্টার',
    physical: 'ম্যানুয়ালি পাতা উল্টিয়ে বোর্ড বা সাল খুঁজতে হয়।',
    digital: 'অধ্যায়, বোর্ড, কলেজ ও সাল অনুযায়ী মুহূর্তেই প্রশ্ন ফিল্টার করা পসিবল।',
  },
  {
    feature: 'বহনযোগ্যতা ও সময়',
    physical: 'ভারী বই বহন করা কষ্টসাধ্য এবং প্রশ্ন খুঁজতে প্রচুর সময় নষ্ট হয়।',
    digital: 'যেকোনো ডিভাইসে ব্যবহারযোগ্য, প্রশ্ন খোঁজাখুঁজি দ্রুত এবং সহজ।',
  },
  {
    feature: 'খরচ (Cost)',
    physical: 'প্রতি বছর নতুন সেট কিনতে পুরো ১০০% টাকা খরচ করতে হয়।',
    digital: 'ফিজিক্যাল সেটের দামের তুলনায় ৮৫% কম খরচে (Cost-Effective) পাওয়া যায়।',
  },
  {
    feature: 'রিপোর্ট',
    physical: 'প্রোগ্রেস রিপোর্ট দেখার কোনো সুযোগ নেই।',
    digital: 'প্রোগ্রেস রিপোর্ট থাকবে। CQ এবং MCQ ভিত্তিক',
  },
  {
    feature: 'মকটেস্ট',
    physical: 'একাধিক সাবজেক্ট সিলেক্ট করে পরীক্ষা দেওয়া যায় না।',
    digital: 'একাধিক সাবজেক্ট সিলেক্ট করে পরীক্ষা দেওয়া যাবে CQ এবং MCQ',
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
/* Section heading */
.section-title {
  font-size: 26px;
  font-weight: 800;
  background: linear-gradient(135deg, #0d568b 0%, #2f8ce2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 46px;
  }
}

.section-subtitle {
  font-size: 15px;
  font-weight: 600;
  color: #64748b;
  margin-top: 6px;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-top: 10px;
  }
}

/* ===== Desktop comparison table ===== */
.comparison-table {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(13, 86, 139, 0.12);
  box-shadow: 0 8px 40px rgba(13, 86, 139, 0.08);
}

.table-header {
  display: grid;
  grid-template-columns: 1.2fr 2fr 2fr;
  background: linear-gradient(135deg, #0d568b, #2f8ce2);
}

.table-header-cell {
  padding: 18px 24px;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 8px;
  border-right: 1px solid rgba(255, 255, 255, 0.15);

  &:last-child {
    border-right: none;
  }
}

.table-row {
  display: grid;
  grid-template-columns: 1.2fr 2fr 2fr;
  background: #ffffff;
  transition: background 0.2s ease;

  &.row-alt {
    background: #f8fbfe;
  }

  &:hover {
    background: #eef6fd;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(13, 86, 139, 0.08);
  }
}

.table-cell {
  padding: 16px 24px;
  font-size: 14.5px;
  line-height: 1.6;
  color: #334155;
  border-right: 1px solid rgba(13, 86, 139, 0.06);

  &:last-child {
    border-right: none;
  }
}

.feature-col {
  &.table-cell {
    font-weight: 700;
    color: #0d568b;
    font-size: 15px;
  }
}

.cell-content {
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
  }
}

.icon-cross {
  color: #dc2626;
}

.icon-check {
  color: #16a34a;
}

/* ===== Mobile comparison cards ===== */
.comparison-card {
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(13, 86, 139, 0.1);
  box-shadow: 0 2px 12px rgba(13, 86, 139, 0.06);
}

.card-feature {
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #0d568b, #2f8ce2);
}

.card-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 12px 16px;
  font-size: 13px;
  line-height: 1.6;
  color: #334155;

  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }

  &.physical {
    background: #fef2f2;
    border-bottom: 1px solid rgba(220, 38, 38, 0.08);
  }

  &.digital {
    background: #f0fdf4;
  }
}

/* ===== CTA Button (matching Banner) ===== */
.cta-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #e11d48, #f43f5e);
  color: #ffffff;
  border: none;
  border-radius: 60px;
  font-weight: 800;
  font-size: 13px;
  cursor: pointer;
  width: 100%;
  max-width: 360px;
  text-align: center;
  line-height: 1.4;
  transition: all 0.3s ease;
  box-shadow:
    0 4px 20px rgba(225, 29, 72, 0.35),
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
      0 8px 32px rgba(225, 29, 72, 0.45),
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

/* ===== Animations ===== */
.animate-fade-in-up {
  animation: fadeInUp 0.7s ease-out both;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
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
