<template>
  <div>
    <HeroSection />
    <div class="container mb-24 overflow-hidden">
      <TitleComp
        title="Why Choose Us"
        class="text-center uppercase"
      ></TitleComp>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        <div class="card bg-surface" data-aos="fade-right">
          <div class="card-body">
            <div class="flex gap-5 mb-2">
              <NuxtImg
                src="/images/icons/rocket.png"
                width="30px"
                format="webp"
                fit="cover"
                alt="rocket icon"
                class="sm:size-[20px] lg-size-[25px]"

              />
              <h4 class="card-title">Proven Expertise in Digital Ads</h4>
            </div>
            <p class="font-medium">
              We specialize in high-converting Facebook and Instagram ads,
              backed by years of data-driven strategies that boost visibility
              and drive real sales.
            </p>
          </div>
        </div>

        <div class="card bg-surface" data-aos="fade-up">
          <div class="card-body">
            <div class="flex gap-5 mb-2">
              <NuxtImg
                src="/images/icons/target.png"
                densities="x1"
                width="25px"
                format="webp"
                fit="cover"
                alt="rocket icon"
              />
              <h4 class="card-title">Targeted Approach That Delivers</h4>
            </div>
            <p class="font-medium">
              Our campaigns are laser-focused on your ideal audience, ensuring
              you get more leads, more customers, and more ROI — not just
              likes..
            </p>
          </div>
        </div>

        <div class="card bg-surface" data-aos="fade-left">
          <div class="card-body">
            <div class="flex gap-5 mb-2">
              <NuxtImg
                src="/images/icons/graph.png"
                densities="x1"
                width="25px"
                format="webp"
                fit="cover"
                alt="rocket icon"
              />
              <h4 class="card-title">Results You Can Measure</h4>
            </div>
            <p class="font-medium">
              We don’t just run ads — we track, analyze, and optimize
              performance to make every naira or dollar work harder for your
              business.
            </p>
          </div>
        </div>

        <div class="card bg-surface" data-aos="fade-up">
          <div class="card-body">
            <div class="flex gap-5 mb-2">
              <NuxtImg
                src="/images/icons/brain.png"
                densities="x1"
                width="25px"
                format="webp"
                fit="cover"
                alt="rocket icon"
              />
              <h4 class="card-title">All-in-One Brand Growth</h4>
            </div>
            <p class="font-medium">
              From ad campaigns to conversion-focused landing pages, we build
              complete sales funnels that capture and convert traffic
            </p>
          </div>
        </div>

        <div class="card bg-surface" data-aos="fade-right">
          <div class="card-body">
            <div class="flex gap-5 mb-2">
              <NuxtImg
                src="/images/icons/creative.png"
                densities="x1"
                width="25px"
                format="webp"
                fit="cover"
                alt="rocket icon"
              />
              <h4 class="card-title">Creative That Stands Out</h4>
            </div>
            <p class="font-medium">
              With eye-catching graphics and scroll-stopping copy, we create ads
              that cut through the noise and grab attention fast.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- service we offer -->
    <div id="service"  class="grid md:grid-cols-2 gap-5 container mb-28">
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-sm font-bold md:hidden mb-4" data-aos="fade-up">|| Service We Offer</h2>
        <nuxt-img
          src="/images/aboutus.png"
          format="webp"
          width="500px"
          densities="x1"
          loading="lazy"
          quality="80"
          fit="cover"
          class="mask mask-hexagon size-full md:size-[500px]"
          data-aos="fade-right"
        />
      </div>
      <div>
        <h2 class="text-sm font-bold hidden md:block my-3" data-aos="fade-right">|| Service We Offer</h2>
        <p class="text-base mb-7" data-aos="fade-right">
          <strong>NovaAds</strong> is a performance-driven digital marketing
          brand focused on helping small businesses and entrepreneurs grow
          through smart, targeted advertising. We are passionate about building
          visibility, increasing brand awareness, and driving measurable
          results. At our core, we believe that every business deserves the
          chance to thrive online — and we use data, creativity, and strategy to
          make that happen.
        </p>
        <div class="grid md:grid-cols-2 gap-5 overflow-hidden">
          <div class="card bg-surface" data-aos="fade-right">
            <div class="card-body">
              <div>
                <NuxtImg
                  src="/images/icons/ads.png"
                  class="block"
                  width="40"
                  format="webp"
                  densities="x1"
                  quality="80"
                  fit="cover"
                />
                <h4 class="my-1 card-title">Targeted Ad Campaigns</h4>
              </div>
              <p class="font-medium">
                We specialize in running high-performing Facebook and Instagram
                ads tailored to your business goals. By targeting the right
                audience with the right message at the right time, we help you
                generate leads, increase sales, and grow your brand online.
              </p>
            </div>
          </div>

          <div class="card bg-surface" data-aos="fade-left">
            <div class="card-body">
              <div>
                <NuxtImg
                  src="/images/icons/web.png"
                  class="block"
                  width="40"
                  format="webp"
                  densities="x1"
                  quality="80"
                  fit="cover"
                />
                <h4 class="my-1 card-title">Landing Page Design</h4>
              </div>
              <p class="font-medium">
                A powerful ad needs a powerful landing page. We design
                conversion-focused pages that are fast, visually appealing, and
                aligned with your brand. Each page is optimized to turn your
                traffic into action — whether it’s a sale, a signup, or a
                booking.
              </p>
            </div>
          </div>

          <div class="card bg-surface" data-aos="fade-right">
            <div class="card-body">
              <div>
                <NuxtImg
                  src="/images/icons/conversion.png"
                  class="block"
                  width="40"
                  format="webp"
                  densities="x1"
                  quality="80"
                  fit="cover"
                />
                <h4 class="my-1 card-title">Conversion Optimization</h4>
              </div>
              <p class="font-medium">
                We don’t just run ads — we improve them. Through A/B testing,
                performance tracking, and data-driven adjustments, we ensure
                your campaigns get better over time, giving you more results
                without increasing your ad spend.
              </p>
            </div>
          </div>

          <div class="card bg-surface" data-aos="fade-left">
            <div class="card-body">
              <div>
                <NuxtImg
                  src="/images/icons/audience.png"
                  class="block"
                  width="40"
                  format="webp"
                  densities="x1"
                  quality="80"
                  fit="cover"
                />
                <h4 class="my-1 card-title">Audience Research & Strategy</h4>
              </div>
              <p class="font-medium">
                Before any campaign goes live, we conduct in-depth research to
                understand your target market, industry trends, and competitor
                strategies. This insight allows us to craft custom strategies
                that position your business for success.
              </p>
            </div>
          </div>
          <div class="card bg-surface" data-aos="fade-up">
            <div class="card-body">
              <div>
                <NuxtImg
                  src="/images/icons/adcopy.png"
                  class="block"
                  width="40"
                  format="webp"
                  densities="x1"
                  quality="80"
                  fit="cover"
                />
                <h4 class="my-1 card-title">Ad Copy & Creative Design</h4>
              </div>
              <p class="font-medium">
                Great ads require great content. We write compelling ad copy and create scroll-stopping visuals that speak directly to your audience’s pain points and desires. Our creative approach helps your ads stand out and perform.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="testimonial" class="mb-25">
        <div>
            <TitleComp title="What Client Say" />
        </div>
        <Textimonial />
    </div>

    <div>
        <NewLetter class="mb-28" />
        <ContactUs />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
