<template>
  <div class="flex flex-wrap gap-5 justify-between container">
    <div>
      <ICountUp
        start-val="0"
        end-val="5000"
        duration="3"
        :options="options"
        class="md:text-3xl text-2xl text-secondary font-bold"
      />
      <p class="text-sm font-semibold">Leads Generated</p>
    </div>
    <div>
      <ICountUp
        start-val="0"
        end-val="320"
        duration="3"
        :options="options"
        class="md:text-3xl text-2xl text-secondary font-bold"
      />
      <p class="text-sm font-semibold">Campaigns Launched</p>
    </div>
    <div>
      <ICountUp
        start-val="0"
        end-val="150"
        duration="3"
        :options="options"
        class="md:text-3xl text-2xl text-secondary font-bold"
      />
      <p class="text-sm font-semibold">Satisfied Clients</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CountUpOptions } from "vue-countup-v3";
import ICountUp from "vue-countup-v3";

const options: CountUpOptions = {
  enableScrollSpy: true,
  scrollSpyDelay: 500,
  scrollSpyOnce: true,
  suffix: "+",
};
</script>

<style scoped></style>
