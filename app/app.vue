<script setup lang="ts">
const config = useRuntimeConfig()
defineOgImageComponent('NuxtSeo')
useSeoMeta({
  description: config.public.seo_desc,
  ogTitle: config.public.seo_title,
  ogDescription: config.public.seo_desc,
  twitterCard: 'summary_large_image',
  twitterTitle: config.public.title as string | undefined,
  ogUrl: config.public.seo_link,
  ogSiteName:'Nova Ads',
  ogImage: '/og-image.png',
  ogImageAlt: 'Boost your brand with high-converting digital advertising from Nova Ads',
  ogImageHeight: 500,
  ogImageWidth: 500
})
</script>

<template>
  <div data-theme="light">
    <SplashScreen />
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
