<template>
  <div class="container mx-auto py-6 md:py-12 px-4 md:px-0">
    <div class="text-center">
      <p class="text-[26px] md:text-[46px] font-[700] text-[#0381e0]">প্রাক্তন শিক্ষার্থীদের রিভিউ</p>
    </div>
<!--    <div class="grid grid-cols-3">-->
<!--      <div v-for="(item ,i) in studentReviews" :key="i" class="p-4 mt-16" >-->
<!--        <ReviewCard  :item="item"/>-->
<!--      </div>-->
<!--    </div>-->
    <div class="hidden md:grid grid-cols-1 md:grid-cols-3 ">
      <div v-for="(item ,i) in reviewImage" :key="i" class="p-6">
        <img loading="lazy" :src="item.link" alt="review"/>
      </div>
    </div>
    <div class="block md:hidden">
      <swiper-slide :data-array="reviewImage" slide-type="review"/>
    </div>
    <div class="pt-4 md:pt-10 flex justify-center">
      <cta-button button-text="হাজারো শিক্ষার্থীদের সাথে যুক্ত হও" />
    </div>
    <div>
      <swiper-slide :data-array="playStoreReviews" slide-type="playStoreReview"/>
    </div>
  </div>
</template>

<script setup>
import SwiperSlide from "~/components/slider/SwiperSlide.vue";
import ReviewCard from "~/components/card/ReviewCard.vue";
import CtaButton from "~/components/common/CtaButton.vue";

const playStoreReviews = ref([
  { imageLink:'/review/1.png', date:'April 4, 2024', text:'I got a lot of benefit from using this app. I understood my HSC preparation by taking the exam. As a result, I revised the paras later. HSC candidates can install this app at least once. You will be benefited.' },
  { imageLink:'/review/2.png', date:'April 5, 2024', text:'This app is very cheap as test Paper book.So everyone can purchase it.There are also a lot of amazing service to make one\'s study comfortable and effective.' },
  { imageLink:'/review/3.png', date:'March 31, 2024', text:'Such an impressive work done by the creator. Thanks a lot there are also so many free contents and the subscription is not also that high. Take love and respect. I recommend this to all the candidate brothers 😉' },
  { imageLink:'/review/4.png', date:'April 7, 2024', text:'Very good study app. Every segments are very good. Must recommended.' },
  { imageLink:'/review/5.png', date:'April 6, 2024', text:'Nice app great interface. Very helpful for HSC students. I will highly recommend this for my juniors' },
  { imageLink:'/review/6.png', date:'March 4, 2024', text:'For the candidate HSC .It is Very useful app .It may helps various subjects all qwestions ,board qwestions, different college test exam qwestions, topic verify qwestions, model test exam and self pratice etc . Thank you E Test paper' },
  { imageLink:'/review/7.png', date:'April 5, 2024', text:'Alhumdulliah,I got a lot of benefits in studying using this app.. Hopefully many students will benefit by using this app🥰🥰' }
])

const studentReviews = ref([
  { 'name':'Anik Das', image:'/icon/icon1.png', institute:'Govt. Science College', review:'I got a lot of benefit from using this app. I understood my HSC preparation by taking the exam. As a result, I revised the paras later. HSC candidates can install this app at least once. You will be benefited.' },
  { 'name':'Rahat', image:'/icon/icon1.png', institute:'Govt. Science College', review:'Such an impressive work done by the creator. Thanks a lot there are also so many free contents and the subscription is not also that high. Take love and respect. I recommend this to all the candidate brothers 😉' },
  { 'name':'Rahat', image:'/icon/icon1.png', institute:'Govt. Science College', review:'For the candidate HSC .It is Very useful app .It may helps various subjects all qwestions ,board qwestions, different college test exam qwestions, topic verify qwestions, model test exam and self pratice etc . Thank you E Test paper' },
  { 'name':'Rahat', image:'/icon/icon1.png', institute:'Govt. Science College', review:'For the candidate HSC .It is Very useful app .It may helps various subjects all qwestions ,board qwestions, different college test exam qwestions, topic verify qwestions, model test exam and self pratice etc . Thank you E Test paper' },
  { 'name':'Rahat', image:'/icon/icon1.png', institute:'Govt. Science College', review:'For the candidate HSC .It is Very useful app .It may helps various subjects all qwestions ,board qwestions, different college test exam qwestions, topic verify qwestions, model test exam and self pratice etc . Thank you E Test paper' },
  { 'name':'Rahat', image:'/icon/icon1.png', institute:'Govt. Science College', review:'For the candidate HSC .It is Very useful app .It may helps various subjects all qwestions ,board qwestions, different college test exam qwestions, topic verify qwestions, model test exam and self pratice etc . Thank you E Test paper' },
])

const reviewImage = ref([
  { link:'/review/review1.png' },
  { link:'/review/review2.png' },
  { link:'/review/review3.png' },
  { link:'/review/review4.png' },
  { link:'/review/review5.png' },
  { link:'/review/review6.png' }
])

</script>

<style lang="scss" scoped>

</style>