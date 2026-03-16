<script setup>
import OfferBanner from "~/components/offer/OfferBanner.vue";
import Feature from "~/components/home/Feature.vue";
import Review from "~/components/home/Review.vue";
import OfferOrderSection from "~/components/offer/OfferOrderSection.vue";
import SpecialFeature from "~/components/home/SpecialFeature.vue";

const route = useRoute();
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const offerId = ref(null);
const offerBatch = ref(null);
const pageTitle = ref('');
const pageLoading = ref(true);

const resolveOfferPage = async () => {
  const slug = route.params.slug;

  // If slug is a number (2 or 3), look up its slug and redirect
  if (['2', '3'].includes(slug)) {
    try {
      const res = await $fetch(`${apiBase}/offer-site/offer-page/by-offer/${slug}`);
      if (res?.data?.length > 0 && res.data[0].slug) {
        navigateTo(`/offer/${res.data[0].slug}`, { redirectCode: 301, replace: true });
        return;
      }
    } catch (e) {
      // No slug configured, fall back to rendering with numeric offer id
    }
    offerId.value = slug;
    pageLoading.value = false;
    return;
  }

  try {
    const data = await $fetch(`${apiBase}/offer-site/offer-page/by-slug/${slug}`);
    if (data?.data) {
      offerId.value = data.data.offer;
      offerBatch.value = data.data.batch;
      pageTitle.value = data.data.title;
      useHead({ title: pageTitle.value });
    } else {
      navigateTo('/', { redirectCode: 302 });
    }
  } catch (e) {
    navigateTo('/', { redirectCode: 302 });
  } finally {
    pageLoading.value = false;
  }
};

await resolveOfferPage();
</script>

<template>
  <div v-if="pageLoading" class="flex items-center justify-center min-h-screen">
    <div class="w-10 h-10 border-4 border-[#0381e0] border-t-transparent rounded-full animate-spin"></div>
  </div>
  <template v-else-if="offerId">
    <div class="bg-[#f6fcfd]">
      <OfferBanner :offer="offerId" :batch="offerBatch" />
    </div>
    <div class="bg-[#b8e0fc]">
      <Feature />
    </div>
    <div>
      <Review />
    </div>
    <div>
      <SpecialFeature />
    </div>
    <div id="orderSection" class="bg-[#e7f3fc]">
      <OfferOrderSection :offer="offerId" :batch="offerBatch" />
    </div>
  </template>
</template>
