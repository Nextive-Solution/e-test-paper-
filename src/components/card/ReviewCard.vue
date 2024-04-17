<template>
  <div class="w-[375px] h-[300px] ring-2 ring-[#0381e0] bg-white p-2">
    <div>
      <div class="flex justify-between items-center">
        <div>
          <img :src="item.imageLink" alt="image"/>
          <p class="text-[14px] pl-2">{{ item.date }}</p>
        </div>
        <Icon class="text-[#0381e0]" name="ph:google-play-logo-fill"/>
      </div>
      <hr/>
      <div>
        <p class="text-[16px] p-0 m-0">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="scss" scoped>

</style>