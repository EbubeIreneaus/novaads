<script setup lang="ts"></script>

<template>
  <div class="py-15 flex flex-col justify-center" id="home">
    <div class="flex gap-x-5 w-full items-center container mx-auto">
      <div class="w-full px-5 overflow-hidden">
        <h1 class="text-4xl font-bold mb-3" data-aos="fade-up">
          Skyrocket Your Business With Laser-Focused Ads & Smart Funnels
        </h1>
        <p class="text-lg font-medium mb-8" data-aos="fade-up">
          We don’t just run ads—we build complete traffic systems. From targeted
          Facebook & Instagram ads to high-converting landing pages, we help
          turn clicks into loyal customers.
        </p>
        <div class="mb-8 flex gap-x-10">
          <UiBtn
            label="Contact Us"
            class-name="btn-primary btn-lg px-10 text-text"
            icon-right="fa6-solid:angle-right"
            icon-class="text-secondary"
            data-aos="fade-right"
          />
          <UiBtn
            label="About Us"
            class-name="btn-secondary btn-md"
            icon-class="text-white"
            data-aos="fade-left"
          />
        </div>
        <ClientOnly>
          <CounterSection class="hidden lg:flex" />
        </ClientOnly>
      </div>
      <div class="w-full hidden sm:flex flex-col flex-wrap items-center ">
        <NuxtImg src="/images/hero-1.png" width="250" />
        <div class="hidden md:flex lg:justify-between justify-end container w-full">
          <NuxtImg src="/images/hero-2.png" width="250" class="lg:size-[280px]" />
          <NuxtImg
            src="/images/hero-3.png"
            width="250"
            class="hidden lg:block"
          />
        </div>
      </div>
    </div>
    <div class="container mx-auto px-5 mt-8 lg:hidden">
      <ClientOnly>
        <CounterSection />
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped></style>
