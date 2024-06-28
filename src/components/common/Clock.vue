<template>
  <div>
    <section class="flex flex-col justify-center items-center rounded-md set_bgc w-16 h-16 md:w-20 md:h-20">
      <p class="text-[26px] md:text-[34px] py-0 my-0 font-[600] leading-tight">{{ value }}</p>
      <p class="text-[14px] md:text-[18px] font-[600] py-0 my-0 ">{{ label }}</p>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  value: String,
});
</script>

<style lang="scss" scoped>
.set_bgc{
  background-color: #3b82f6;
  color: white;
}
</style>