<template>
  <div class="max-w-3xl mx-auto py-8 md:py-12 px-4 md:px-0">
    <swiper
      :slides-per-view="1"
      :space-between="20"
      :grab-cursor="true"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        640: { slidesPerView: 1.5, spaceBetween: 20 },
        1024: { slidesPerView: 2.5, spaceBetween: 30 },
      }"
      :modules="modules"
      class="image-slider"
    >
      <swiper-slide v-for="(img, i) in images" :key="i">
        <img
          :src="img"
          :alt="`slide-${i + 1}`"
          loading="lazy"
          class="w-full h-auto rounded-xl shadow-md object-cover"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Autoplay, Pagination]

const images = [
  '/images/slider/1.jpg',
  '/images/slider/2.jpeg',
  '/images/slider/3.jpeg',
  '/images/slider/4.jpeg',
  '/images/slider/5.jpeg',
]
</script>

<style scoped>
.image-slider :deep(.swiper-pagination) {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
}
.image-slider :deep(.swiper-pagination-bullet) {
  background: #0381e0;
  opacity: 0.4;
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  margin: 0 !important;
}
.image-slider :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}
</style>
