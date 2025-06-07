<template>
    <div id="splash-screen" class="fixed inset-0 bg-background z-50 flex items-center justify-center">
  <div class="text-center">
    <!-- Logo or Initial -->
   <div class="w-18 h-18 mx-auto mb-4 animate-pulse bg-primary rounded-full flex items-center justify-center">
      <span class="text-secondary text-4xl font-bold">N</span>
    </div>
    <!-- Loading Text -->
    <p class="text-secondary text-lg font-medium animate-bounce">Loading NovaAds...</p>
  </div>
</div>
</template>

<script setup lang="ts">
onMounted(() => {
    const splash = document.getElementById("splash-screen");
    splash?.classList.add("opacity-0", "transition-opacity", "duration-500");
    setTimeout(() => splash?.remove(), 500);
})
</script>

<style scoped>

</style>