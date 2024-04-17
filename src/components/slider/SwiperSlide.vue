<template>
  <swiper :scrollbar="{
    hide: true,
  }" :breakpoints="breakpoints" :navigation="nav" :slidesPerView="2" :spaceBetween="2" :grabCursor="true" :pagination="{
    clickable: false,
  }" :autoplay="{
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    }" :modules="modules" class="mySwiper">
    <swiper-slide v-for="(item, i) in dataArray" :key="i">
      <div v-if="slideType ==='playStoreReview'" class="py-9">
        <review-card :item="item"/>
      </div>
<!--      <div v-if="slideType ==='review'" class="py-9">-->
<!--        <img class="h-[300px]" :src="item.link" alt="">-->
<!--      </div>-->
    </swiper-slide>

  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "../../assets/css/style.css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Scrollbar, Pagination, Autoplay, Navigation } from "swiper";
import ReviewCard from "~/components/card/ReviewCard.vue";


export default {
  props: {
    dataArray: {
      type: Array,
      default: [],
    },
    slideType: {
      type: String,
      default: "",
    },
    sideNav: {
      type: Boolean,
      default: true,
    },
    breakpoints: {
      type: Object,
      default: {
        "@0.00": {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2.4,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 2.3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    },
  },
  components: {
    ReviewCard,
    Swiper,
    SwiperSlide
  },
  setup(props) {
    const dataArray = ref(props.dataArray);
    const slide_type = ref(props.slideType);
    const nav = ref(props.sideNav);
    const breakpoints = ref(props.breakpoints);
    return {
      modules: [Autoplay, Pagination, Navigation, Scrollbar],
      dataArray,
      breakpoints,
      slide_type,
      nav
    };
  },
};
</script>
