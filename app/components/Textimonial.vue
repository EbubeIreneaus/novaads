<style scoped>
.swiper-slide:before {
  content: '"';
  position: absolute;
  font-size: 2rem;
  padding: 10px;
}

.swiper-pagination{
    margin-top: 10px;
    position: relative !important;
}
</style>
<template>
  <div>
    <div class="container swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide h-full card bg-surface before:text-textMute/50"
          v-for="review in testimonials"
          :key="review.id"
        >
          <div class="card-body">
            <p class="text-lg">
              {{ review.content }}
            </p>
            <h5 class="font-bold">{{ review.name }}</h5>
            <div>
              <div class="rating">
                <input
                  v-for="x in 5"
                  :key="x"
                  type="radio"
                  :name="review.name"
                  class="mask mask-star-2 bg-orange-400 size-[20px]"
                  aria-label="1 star"
                  checked
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Chinedu Okafor",
    content:
      "NovaAds helped me reach more customers through Facebook ads. The results were amazing — over 200% increase in sales within a month!",
  },
  {
    id: 2,
    name: "Amina Yusuf",
    content:
      "They created a landing page that looked clean and professional. It helped my business look more credible and brought in quality leads.",
  },
  {
    id: 3,
    name: "Tolu Adesanya",
    content:
      "Their team really understands online marketing. They optimized my campaign weekly, and I saw real improvement in performance.",
  },
  {
    id: 4,
    name: "Grace Eze",
    content:
      "NovaAds was responsive and professional. I loved how they explained every step and tailored the ads to my exact audience.",
  },
  {
    id: 5,
    name: "Ibrahim Musa",
    content:
      "Before NovaAds, I wasted a lot of money running ads that didn’t convert. Their service finally gave me a clear ROI.",
  },
  {
    id: 6,
    name: "Ngozi Chukwu",
    content:
      "They didn’t just create ads — they built a whole system that brings in customers daily. I highly recommend their service.",
  },
];

onMounted(() => {
  new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: "20",
    autoHeight: true,
    loop: true,
    modules: [Pagination],
    autoplay: {
      delay: 500
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      1020: {
        slidesPerView: 3,
      },
      640 :{
        slidesPerView: 3,
      }
    },
  });
});
</script>
