<template>
    <div class="mb-8">
        <h2 class="font-extrabold text-4xl text-center font-serif" data-aos="fade-down">{{ title }}</h2>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<style scoped>

</style>