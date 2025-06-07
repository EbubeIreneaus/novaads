<template>
  <div class="container py-10" id="contactus">
    <div class="card card-xl py-10 bg-surface/50">
      <div class="card-body grid md:grid-cols-2 gap-5">
        <div class="sm:px-2">
          <h4 class="text-sm font-bold mb-1" data-aos="fade-right">|| We are here to help you</h4>
          <p class="text-3xl font-extrabold mb-4" data-aos="fade-up">
            <strong class="text-primary">Discuss</strong> Your Business
            Advertising Goals
          </p>
          <p class="mb-5" data-aos="fade-up">
            Looking to grow your business with high-converting ads? Let’s talk
            about how we can drive real results for you.
          </p>

          <div>
            <div class="flex items-center gap-x-4 ct mb-5" data-aos="fade-right">
              <div class="bg-surface/50 px-4 py-3 rounded-full">
                <Icon name="fa6-solid:envelope" class="text-secondary" />
              </div>
              <div class="">
                <p class="text-sm font-medium">E-mail</p>
                <p class="font-semibold">
                  <a href="mailto:">service@novaads.com.ng</a>
                </p>
              </div>
            </div>
            <div class="flex items-center gap-x-4 ct" data-aos="fade-right">
              <div class="bg-surface/50 px-4 py-3 rounded-full">
                <Icon name="fa6-solid:phone" class="text-secondary" />
              </div>
              <div class="">
                <p class="text-sm font-medium">Phone</p>
                <p class="font-semibold">
                  <a href="tel:+2347076125099">+234 707 612 5099</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card card-sm md:card-lg bg-surface" data-aos="fade-up">
            <form class="card-body">
                <div class="mb-3">
                    <label class="label block px-1">Fullname</label>
                    <input class="input w-full focus:outline-none focus:border-0 text-secondary " placeholder="Jon Doe" />
                </div>
                <div class="mb-3">
                    <label class="label block px-1">Email</label>
                    <input class="input w-full focus:outline-none focus:border-0 text-secondary " placeholder="johndoe@gmail.com" />
                </div>
                <div class="mb-3">
                    <label class="label block px-1">Subject</label>
                    <input class="input w-full focus:outline-none focus:border-0 text-secondary " placeholder="Landing Page Design" />
                </div>
                <div class="mb-3">
                    <label class="label block px-1">Message</label>
                    <textarea class="textarea w-full focus:outline-none focus:border-0 text-secondary " cols="5" placeholder="type content here" ></textarea>
                </div>
                <UiBtn label="submit" class="btn-primary btn-lg px-7 text-secondary w-fit" />
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.ct p {
  line-height: 1.3;
}
</style>
