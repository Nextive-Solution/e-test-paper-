<template>
  <div class="clock-card group">
    <div class="clock-inner">
      <span class="clock-value">{{ value }}</span>
      <span class="clock-label">{{ label }}</span>
    </div>
    <div class="clock-glow"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  value: String,
});
</script>

<style lang="scss" scoped>
.clock-card {
  position: relative;
  width: 72px;
  height: 88px;
  border-radius: 16px;
  background: linear-gradient(145deg, #0d568b, #2f8ce2);
  box-shadow:
    0 4px 24px rgba(13, 86, 139, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    width: 110px;
    height: 120px;
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-2px);
  }
}

.clock-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2px;
}

.clock-value {
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 0 20px rgba(47, 140, 226, 0.5);

  @media (min-width: 768px) {
    font-size: 46px;
  }
}

.clock-label {
  font-size: 11px;
  font-weight: 600;
  color: #b8ddf7;
  letter-spacing: 1.5px;

  @media (min-width: 768px) {
    font-size: 13px;
    letter-spacing: 2px;
  }
}

.clock-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(47, 140, 226, 0.15) 0%,
    transparent 60%
  );
  z-index: 1;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
</style>
