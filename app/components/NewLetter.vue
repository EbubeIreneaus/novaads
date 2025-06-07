<template>
  <div class="bg-surface">
    <div class="card card-xl container overflow-hidden">
      <div class="card-body py-20">
        <h3 class="card-title justify-center text-2xl font-bold capitalize" data-aos="fade-down">
          Sbuscribe to our news letter
        </h3>
        <p class="text-base text-center mb-6 mt-1" data-aos="fade-up">
          Subscribe to our channel for expert tips and powerful ad strategies
          that grow your business.
        </p>
        <div class="flex flex-col gap-y-2 sm:flex-row max-w-xl w-full mx-auto">
          <input
            type="email"
            inputMode="email"
            class="input input-lg focus:outline-0 rounded-none w-full"
            placeholder="Email Address"
            data-aos="fade-right"
          />
          <UiBtn
            label="subscribe"
            class="btn-primary btn-lg text-secondary rounded-none"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
