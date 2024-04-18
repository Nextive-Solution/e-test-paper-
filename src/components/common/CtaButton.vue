<template>
  <button @click="findActiveLayer"
          class="text-[16px] lg:text-[22px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#0381e0] hover:bg-[#ffffff]  hover:ring-2 ring-[#0381e0] text-[#ffffff] hover:text-[#000000] py-2 px-3 md:py-3 md:px-6 rounded-[30px] font-[600]">
    {{ buttonText }}
  </button>
</template>

<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: true
  }
});

const findActiveLayer = () => {
  const currentActiveElement = document.getElementById('orderSection');

  if (currentActiveElement) {
    currentActiveElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
};
</script>

<style lang="scss" scoped>

</style>