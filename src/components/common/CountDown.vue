<template>
  <section class="flex justify-center items-center">
    <div class="pb-4">
      <div class="flex gap-4 md:gap-8">
        <Clock label="Days" :value="days" />
        <Clock label="Hours" :value="hours" />
        <Clock label="Minutes" :value="minutes" />
        <Clock label="Seconds" :value="seconds" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Clock from './Clock.vue';

const days = ref('00');
const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');
let interval;

const startTimer = () => {
  // Set the countdown date to 1 day (24 hours) from now
  const countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

  interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval);
    } else {
      days.value = day < 10 ? '0' + day : day;
      hours.value = hour < 10 ? '0' + hour : hour;
      minutes.value = minute < 10 ? '0' + minute : minute;
      seconds.value = second < 10 ? '0' + second : second;
    }
  }, 1000);
};

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style lang="scss" scoped>

</style>