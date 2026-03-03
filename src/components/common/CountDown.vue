<template>
  <section v-if="isLoaded" class="countdown-wrapper">
    <div class="countdown-header">
      <div class="pulse-dot"></div>
      <span class="countdown-label font-['Hind_Siliguri']">স্পেশাল অফার শেষ হচ্ছে</span>
      <div class="pulse-dot"></div>
    </div>
    <div class="countdown-grid">
      <div v-for="(item, index) in timeUnits" :key="item.label" class="countdown-item">
        <Clock :label="item.label" :value="item.value" />
        <span v-if="index < timeUnits.length - 1" class="separator">:</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import Clock from './Clock.vue';

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const toBangla = (str) => String(str).replace(/[0-9]/g, (d) => banglaDigits[d]);

const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');
const isLoaded = ref(false);
let interval;

const timeUnits = computed(() => [
  { label: 'ঘণ্টা', value: toBangla(hours.value) },
  { label: 'মিনিট', value: toBangla(minutes.value) },
  { label: 'সেকেন্ড', value: toBangla(seconds.value) },
]);

const startTimer = (countDownDate) => {
  interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(interval);
      hours.value = '00';
      minutes.value = '00';
      seconds.value = '00';
    } else {
      const totalHours = Math.floor(distance / (1000 * 60 * 60));
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);

      hours.value = totalHours < 10 ? '0' + totalHours : String(totalHours);
      minutes.value = minute < 10 ? '0' + minute : String(minute);
      seconds.value = second < 10 ? '0' + second : String(second);
    }
  }, 1000);
};

const fetchCountdown = async () => {
  try {
    const res = await $fetch(`${apiBase}/offer-site/countdown`);
    const counterData = res?.data;

    if (!counterData) return;

    const countDownDate = new Date(counterData.targetDate).getTime();

    isLoaded.value = true;
    startTimer(countDownDate);
  } catch (e) {
    // Fallback to 24h countdown if API fails
    isLoaded.value = true;
    const fallback = new Date().getTime() + 24 * 60 * 60 * 1000;
    startTimer(fallback);
  }
};

onMounted(() => {
  fetchCountdown();
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style lang="scss" scoped>
.countdown-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(13, 86, 139, 0.05), rgba(47, 140, 226, 0.08));
  border: 1px solid rgba(13, 86, 139, 0.15);

  @media (min-width: 768px) {
    gap: 12px;
    padding: 20px 140px;
  }

  @media (min-width: 1024px) {
    padding: 20px 220px;
  }
}

.countdown-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.countdown-label {
  font-size: 15px;
  font-weight: 700;
  color: #dc2626;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #dc2626;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.4;
    transform: scale(0.7);
  }
}

.countdown-grid {
  display: flex;
  align-items: center;
  gap: 6px;

  @media (min-width: 768px) {
    gap: 12px;
  }
}

.countdown-item {
  display: flex;
  align-items: center;
  gap: 6px;

  @media (min-width: 768px) {
    gap: 12px;
  }
}

.separator {
  font-size: 28px;
  font-weight: 800;
  color: #0d568b;
  line-height: 1;
  opacity: 0.6;
  animation: blink 1s step-end infinite;

  @media (min-width: 768px) {
    font-size: 40px;
  }
}

@keyframes blink {

  0%,
  100% {
    opacity: 0.6;
  }

  50% {
    opacity: 0;
  }
}
</style>
