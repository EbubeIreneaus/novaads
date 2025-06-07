<style scoped>
.slideDown {
  animation: slideDown 0.3s linear forwards;
}

@keyframes slideDown {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    opacity: 1;
  }
}

.aside {
  transform: translate(1000px, -1000px);
  opacity: 0;
  transition: all .3s linear;
}

.aside-open{
  animation: openAside .4s linear forwards;
}

@keyframes openAside {
  from {
    transform: translate(1000px, -1000px);
    opacity: 0;
  }

  to {
     transform: translate(0, 0);
    opacity: 1;
    border-bottom-left-radius: 0;
  }
}
</style>

<template>
  <div class="min-h-screen bg-background">
    <header
      ref="header"
      class="transition-all duration-300 flex items-center h-20 shadow-xs"
    >
      <div class="flex items-center justify-between container">
        <div>
          <nuxt-img
            src="/logo-full.png"
            width="180px"
            alt="logo"
            format="webp"
            quality="90"
            fit="cover"
          />
        </div>
        <nav class="hidden lg:flex items-center justify-center gap-x-5">
          <nuxt-link
            :href="link.href"
            v-for="link in navLink"
            :key="link.label"
            class="text-text hover:text-textMute"
          >
            <span class="text-lg font-semibold font-sans">{{
              link.label
            }}</span>
          </nuxt-link>
        </nav>
        <UiBtn
          label="Contact Us"
          class-name="btn-primary !gap-x-3 hidden lg:block"
          icon-right="ic:baseline-arrow-forward-ios"
          icon-class="text-white"
        />

        <UiBtn
          icon="fa6-solid:bars"
          class-name="btn-surface hover:btn-surface/50 block lg:hidden"
          @click="openAside()"
        />
      </div>
    </header>

    <aside ref="aside" class="fixed w-full h-full top-0 left-0 z-[999] bg-background rounded-bl-full aside">
     <div class="p-5"> 
       <div class="flex justify-end mb-10">
        <UiBtn icon="fa6-solid:x" @click="closeAside()" />
      </div>
      <nav class="flex justify-center">
        <ul>
          <li v-for="link in navLink":key="link.label" class="mb-5 text-center font-semibold">
            <nuxt-link :to="link.href" class="text-secondary hover:text-secondary/50">{{ link.label }}</nuxt-link>
          </li>
          <li class="mb-3 text-center font-semibold">
            <nuxt-link to="/#contact" class="text-secondary hover:text-secondary/50">Contact us</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="flex justify-center gap-x-5 my-10">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <UiBtn icon="fa6-brands:facebook-f" class="!rounded-full" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <UiBtn icon="fa6-brands:twitter" class="!rounded-full" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <UiBtn icon="fa6-brands:tiktok" class="!rounded-full" />
        </a>
      </div>
     </div>
    </aside>

    <slot></slot>

    <footer class=" text-secondary py-10 px-4 container">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo & About -->
        <div>
          <div>
            <nuxt-img
            src="/logo-full.png"
            width="150px"
            alt="logo"
            format="webp"
            quality="90"
            fit="cover"
          />
          </div>
          <p class="text-sm text-secondary/60">
            We help brands run high-converting Facebook and Instagram ads that
            deliver real business growth.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-2">Quick Links</h4>
          <ul class="space-y-1 text-sm text-gray-400">
            <li v-for="link in navLink" :key="link.label">
                <nuxt-link :to="link.href" class="hover:text-textMute text-text font-bold">{{ link.label }}</nuxt-link>
           </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-2">Contact Us</h4>
          <p class="text-sm mb-1">
            Email:
            <a href="mailto:service@novaads.com.ng" class="hover:text-textMute/60"
              >service@novaads.com.ng</a
            >
          </p>
          <p class="text-sm">
            Phone:
            <a href="tel:+2347076125099" class="hover:text-textMute/60"
              >+234 707 612 5099</a
            >
          </p>
          <div class="mt-2 space-x-3">
            <a href="#" class="text-text/70 hover:text-textMute">Facebook</a>
            <a href="#" class="text-text/70 hover:text-textMute">Instagram</a>
            <a href="#" class="text-text/70 hover:text-textMute">Twitter</a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="text-center text-sm mt-10 border-t border-gray-800 pt-4"
      >
        &copy; 2025 NovaAds. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const header = ref<HTMLElement>(null as unknown as HTMLElement);
const aside = ref<HTMLElement>(null as unknown as HTMLElement);
const navLink = [
  { label: "Home", href: "/#home" },
  { label: "Our Service", href: "/#service" },
  { label: "Testimonial", href: "/#testimonial" },
];

function scrollDownHeader() {
  if (window.scrollY > 100) {
    header.value.classList.add("bg-surface");
    header.value.classList.add("slideDown");
  } else {
    header.value.classList.remove("bg-surface");
    header.value.classList.remove("slideDown");
  }
}

function handleScroll() {
  scrollDownHeader();
}

function openAside(){
  aside.value.classList.add('aside-open')
}

function closeAside(){
  aside.value.classList.remove('aside-open')
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  function CAside(event: Event) {
  closeAside();
  
  const target = event.currentTarget as HTMLElement;
  target.removeEventListener('click', CAside);
}

const asideLinks = document.querySelectorAll('aside a');

asideLinks.forEach((a) => {
  a.addEventListener('click', CAside);
});
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
