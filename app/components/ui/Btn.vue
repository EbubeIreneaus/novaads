<style scoped></style>

<template>
  <button :class="className" class="btn rounded-md space-x-3">
    <Icon :name="icon" v-if="icon" :size="iconSize" :class="iconClass" class="text-text" />
    <span v-if="label" :class="labelClass" >{{ label }}</span>
    <Icon :name="iconRight" v-if="iconRight" :size="iconSize" class="text-text" :class="iconClass"  />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    icon?: string;
    iconSize?: string;
    iconRight?: string;
    className?: string;
    labelClass?: string;
    iconClass?: string;
  }>(),
  {
    iconSize: "1em",
  }
);
</script>
