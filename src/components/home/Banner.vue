<template>
  <div class="banner-root">
    <!-- Top promotional banner -->
    <div @click="findActiveLayer" class="top-banner cursor-pointer ">
      <img class="w-full h-[70px] md:h-auto object-fill" loading="lazy" src="/banner/topBanner.png"
        alt="Promotional banner" />
    </div>

    <!-- Hero section -->
    <div class="hero-section">


      <div class="container mx-auto flex flex-col items-center px-4 md:px-6 py-6 md:py-12 relative z-10">

        <!-- Countdown timer -->
        <div class="w-full flex justify-center mb-6 md:mb-10 animate-fade-in-up">
          <CountDown />
        </div>

        <!-- Main heading -->
        <div class="text-center mb-4 md:mb-6 animate-fade-in-up delay-100">
          <h1 class="text-[24px] md:text-[48px] lg:text-[56px] leading-tight font-['Siyam_Rupali']">
            <span class="hero-title-gradient font-[800]">ই-টেস্টপেপার</span>
          </h1>
          <p
            class="text-[18px] md:text-[32px] lg:text-[40px] text-slate-700 font-[700] font-['Siyam_Rupali'] mt-1 md:mt-2">
            দেশের প্রথম এবং একমাত্র ডিজিটাল টেস্টপেপার
          </p>
        </div>

        <!-- Subtitle -->
        <div class="text-center max-w-5xl mb-6 md:mb-10 animate-fade-in-up delay-200">
          <p
            class="text-[15px] md:text-[24px] lg:text-[28px] text-slate-600 font-[600] font-['Hind_Siliguri'] leading-relaxed">
            যা এইচএসসি শিক্ষার্থীদের
            <span class="highlight-text">গাইডবই, সাপ্লিমেন্ট</span>
            এবং
            <span class="highlight-text">টেস্টপেপার</span>
            এর একমাত্র ডিজিটাল বিকল্প
          </p>
        </div>

        <!-- Video embed -->
        <div class="video-wrapper animate-fade-in-up delay-300">
          <div class="video-container">
            <iframe class="video-iframe" src="https://www.youtube.com/embed/SW4UteiYzV8?si=DzqmKioZztzTfDJC"
              title="E-Test Paper Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="mt-6 md:mt-10 animate-fade-in-up delay-400">
          <button @click="findActiveLayer" class="cta-main group">
            <span class="cta-text font-['Hind_Siliguri']">৫ লাখ শিক্ষার্থীর সাথে যুক্ত হও তুমিও</span>
            <svg class="cta-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Trust badges -->
        <div class="trust-badges mt-6 md:mt-8 animate-fade-in-up delay-500">
          <div class="badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span class="font-['Hind_Siliguri']">৫ লাখ+ শিক্ষার্থী</span>
          </div>
          <div class="badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span class="font-['Hind_Siliguri']">সেরা রেটিং</span>
          </div>
          <div class="badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span class="font-['Hind_Siliguri']">নিরাপদ পেমেন্ট</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CountDown from "~/components/common/CountDown.vue";

const findActiveLayer = () => {
  const currentActiveElement = document.getElementById('orderSection');
  if (currentActiveElement) {
    currentActiveElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style lang="scss" scoped>
/* Hero section */
.hero-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #f6fcfd 0%, #e8f4fc 40%, #f6fcfd 100%);
}

/* Background blobs */
.hero-bg-decor {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.blob-1 {
  width: 300px;
  height: 300px;
  background: rgba(47, 140, 226, 0.2);
  top: -100px;
  right: -50px;
  animation: float 8s ease-in-out infinite;

  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
}

.blob-2 {
  width: 250px;
  height: 250px;
  background: rgba(13, 86, 139, 0.15);
  bottom: -50px;
  left: -80px;
  animation: float 10s ease-in-out infinite reverse;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
}

.blob-3 {
  width: 200px;
  height: 200px;
  background: rgba(47, 140, 226, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 12s ease-in-out infinite;

  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-30px);
  }
}

/* Title gradient */
.hero-title-gradient {
  background: linear-gradient(135deg, #0d568b 0%, #2f8ce2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Highlighted text */
.highlight-text {
  color: #2f8ce2;
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #e11d48, #f43f5e);
    border-radius: 2px;
    opacity: 0.7;
  }
}

/* Video */
.video-wrapper {
  width: 100%;
  max-width: 1000px;
  padding: 4px;
  background: linear-gradient(135deg, #0d568b, #2f8ce2);
  border-radius: 16px;
  box-shadow:
    0 20px 60px rgba(13, 86, 139, 0.2),
    0 8px 24px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    padding: 5px;
    border-radius: 24px;
  }
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  /* 16:9 */
  border-radius: 13px;
  overflow: hidden;
  background: #000;

  @media (min-width: 768px) {
    border-radius: 20px;
  }
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* CTA Button */
.cta-main {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #0d568b, #2f8ce2);
  color: #ffffff;
  border: none;
  border-radius: 60px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow:
    0 4px 20px rgba(13, 86, 139, 0.35),
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
      0 8px 32px rgba(13, 86, 139, 0.45),
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
  }
}

.cta-arrow {
  transition: transform 0.3s ease;

  .group:hover & {
    transform: translateX(4px);
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
}

/* Trust badges */
.trust-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 20px;
  }
}

.badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(13, 86, 139, 0.12);
  border-radius: 40px;
  font-size: 12px;
  font-weight: 600;
  color: #0d568b;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    border-color: rgba(13, 86, 139, 0.3);
    transform: translateY(-1px);
  }

  svg {
    color: #2f8ce2;
    flex-shrink: 0;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 15px;
    gap: 8px;
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

.delay-400 {
  animation-delay: 0.4s;
}

.delay-500 {
  animation-delay: 0.5s;
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

/* Top banner */
.top-banner {
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.92;
  }
}
</style>
