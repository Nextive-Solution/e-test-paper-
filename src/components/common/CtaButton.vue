<template>
  <button @click="findActiveLayer"
          class=" md:text-[28px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-3 md:py-3 md:px-8 rounded-full font-[800]"
          :class="buttonDesign"    >
    {{ buttonText }}
  </button>
</template>

<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: true
  },
  buttonDesign: {
    type: String,
    default: 'text-[14px] bg-[#0381e0] hover:bg-[#ffffff] hover:ring-2 hover:ring-[#0381e0] text-[#ffffff] hover:text-[#000000]'
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