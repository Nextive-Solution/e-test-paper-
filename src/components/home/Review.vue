<template>
  <div class="container mx-auto pt-6 md:pt-12 px-4 md:px-6">

    <!-- Section heading -->
    <div class="text-center mb-4 md:mb-10 animate-fade-in-up">
      <h2 class="section-title font-['Hind_Siliguri']">প্রাক্তন শিক্ষার্থীদের রিভিউ</h2>
    </div>

    <!-- Review images - Desktop grid -->
    <div class="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-100">
      <div v-for="(item, i) in reviewImage" :key="i" class="review-card">
        <img loading="lazy" :src="item.link" alt="review" class="w-full rounded-2xl" />
      </div>
    </div>

    <!-- Review images - Mobile swiper -->
    <div class="block md:hidden animate-fade-in-up delay-100">
      <swiper-slide :data-array="reviewImage" slide-type="review" />
    </div>

    <!-- CTA Button -->
    <div class="flex justify-center mt-8 md:mt-12 animate-fade-in-up delay-200">
      <button @click="findActiveLayer" class="cta-main group">
        <span class="font-['Hind_Siliguri']">বন্ধুদের থেকে এগিয়ে থাকতে যুক্ত হও এখনই</span>
        <svg class="cta-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Play Store reviews swiper -->
    <div class="mt-8 md:mt-12 animate-fade-in-up delay-300">
      <swiper-slide :data-array="playStoreReviews" slide-type="playStoreReview" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SwiperSlide from "~/components/slider/SwiperSlide.vue";
import ReviewCard from "~/components/card/ReviewCard.vue";

const playStoreReviews = ref([
  { imageLink: '/review/1.png', date: 'April 4, 2024', text: 'I got a lot of benefit from using this app. I understood my HSC preparation by taking the exam. As a result, I revised the paras later. HSC candidates can install this app at least once. You will be benefited.' },
  { imageLink: '/review/2.png', date: 'April 5, 2024', text: 'This app is very cheap as test Paper book.So everyone can purchase it.There are also a lot of amazing service to make one\'s study comfortable and effective.' },
  { imageLink: '/review/3.png', date: 'March 31, 2024', text: 'Such an impressive work done by the creator. Thanks a lot there are also so many free contents and the subscription is not also that high. Take love and respect. I recommend this to all the candidate brothers 😉' },
  { imageLink: '/review/4.png', date: 'April 7, 2024', text: 'Very good study app. Every segments are very good. Must recommended.' },
  { imageLink: '/review/5.png', date: 'April 6, 2024', text: 'Nice app great interface. Very helpful for HSC students. I will highly recommend this for my juniors' },
  { imageLink: '/review/6.png', date: 'March 4, 2024', text: 'For the candidate HSC .It is Very useful app .It may helps various subjects all qwestions ,board qwestions, different college test exam qwestions, topic verify qwestions, model test exam and self pratice etc . Thank you E Test paper' },
  { imageLink: '/review/7.png', date: 'April 5, 2024', text: 'Alhumdulliah,I got a lot of benefits in studying using this app.. Hopefully many students will benefit by using this app🥰🥰' }
])

const studentReviews = ref([
  { 'name': 'Anik Das', image: '/icon/icon1.png', institute: 'Govt. Science College', review: 'I got a lot of benefit from using this app. I understood my HSC preparation by taking the exam. As a result, I revised the paras later. HSC candidates can install this app at least once. You will be benefited.' },
  { 'name': 'Rahat', image: '/icon/icon1.png', institute: 'Govt. Science College', review: 'Such an impressive work done by the creator. Thanks a lot there are also so many free contents and the subscription is not also that high. Take love and respect. I recommend this to all the candidate brothers 😉' },
  { 'name': 'Rahat', image: '/icon/icon1.png', institute: 'Govt. Science College', review: 'For the candidate HSC .It is Very useful app .It may helps various subjects all qwestions ,board qwestions, different college test exam qwestions, topic verify qwestions, model test exam and self pratice etc . Thank you E Test paper' },
  { 'name': 'Rahat', image: '/icon/icon1.png', institute: 'Govt. Science College', review: 'For the candidate HSC .It is Very useful app .It may helps various subjects all qwestions ,board qwestions, different college test exam qwestions, topic verify qwestions, model test exam and self pratice etc . Thank you E Test paper' },
  { 'name': 'Rahat', image: '/icon/icon1.png', institute: 'Govt. Science College', review: 'For the candidate HSC .It is Very useful app .It may helps various subjects all qwestions ,board qwestions, different college test exam qwestions, topic verify qwestions, model test exam and self pratice etc . Thank you E Test paper' },
  { 'name': 'Rahat', image: '/icon/icon1.png', institute: 'Govt. Science College', review: 'For the candidate HSC .It is Very useful app .It may helps various subjects all qwestions ,board qwestions, different college test exam qwestions, topic verify qwestions, model test exam and self pratice etc . Thank you E Test paper' },
])

const reviewImage = ref([
  { link: '/review/review1.png' },
  { link: '/review/review2.png' },
  { link: '/review/review3.png' },
  { link: '/review/review4.png' },
  { link: '/review/review5.png' },
  { link: '/review/review6.png' }
])

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

/* Review cards */
.review-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(13, 86, 139, 0.12);
  }

  img {
    display: block;
    border-radius: 16px;
  }
}

/* CTA Button (matching green accent) */
.cta-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #15803d, #22c55e);
  color: #ffffff;
  border: none;
  border-radius: 60px;
  font-weight: 800;
  font-size: 13px;
  cursor: pointer;
  width: 100%;
  max-width: 380px;
  text-align: center;
  line-height: 1.4;
  transition: all 0.3s ease;
  box-shadow:
    0 4px 20px rgba(21, 128, 61, 0.35),
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
      0 8px 32px rgba(21, 128, 61, 0.45),
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
