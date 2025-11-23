<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const { $t } = useI18n();
</script>

<template>
  <div class="h-full">
    <Carousel
      class="w-full"
      :opts="{
        loop: true, // Recommended for fade effects so it cycles smoothly
      }"
      :plugins="[
        Autoplay({
          delay: 3000,
        }),
        Fade(), // <--- Add the plugin here
      ]"
    >
      <CarouselContent>
        <CarouselItem>
          <div class="grid grid-cols-3 h-screen">
            <div
              class="relative col-span-1 flex flex-col gap-6 items-center justify-center ml-10 py-20"
            >
              <span class="font-bold text-8xl font-tangerine"> Alazare </span>
              <div class="font-georgian text-xl max-w-1/2 text-center">
                {{ $t("where-every-bottle") }}
              </div>

              <!-- Corner borders -->
              <span
                class="absolute top-20 right-0 w-20 h-20 border-t-2 border-r-2 border-sidebar"
              ></span>
              <span
                class="absolute bottom-20 left-0 w-20 h-20 border-b-2 border-l-2 border-sidebar"
              ></span>
            </div>
            <div class="col-span-2 flex items-center justify-center">
              <img
                alt="white"
                src="/images/white.webp"
                class="h-full object-cover max-h-[550px]"
              />
              <img
                alt="white"
                src="/images/rose.webp"
                class="h-full object-cover max-h-[600px] mt-10"
              />
              <img
                alt="white"
                src="/images/red.webp"
                class="h-full object-cover max-h-[550px]"
              />
            </div></div
        ></CarouselItem>
        <CarouselItem class="relative">
          <i18n-link
            to="/wine"
            class="absolute z-50 text-6xl text-sidebar-foreground font-tangerine bottom-50 right-40 border-sidebar-foreground py-2 px-8 cursor-pointer transform transition-transform hover:scale-110 duration-500 ease-in-out hover:bg-sidebar-foreground/20 border-2 font-bold"
          >
            {{ $t("discover-our-red-wines") }}
          </i18n-link>
          <img
            src="/images/red.gif"
            alt="red wine"
            class="h-screen object-cover w-full"
          />
        </CarouselItem>
        <CarouselItem class="relative">
          <i18n-link
            to="/wine"
            class="absolute z-50 text-6xl font-bold text-secondary font-tangerine bottom-10 right-10 border-2 border-secondary py-2 px-8 cursor-pointer transform transition-transform hover:scale-110 duration-600 ease-in-out hover:bg-secondary/20"
          >
            {{ $t("discover-our-white-wines") }}
          </i18n-link>

          <img
            src="/images/white.gif"
            alt="white wine"
            class="h-screen object-cover w-full"
        /></CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="left-5" />
      <CarouselNext class="right-5" />
    </Carousel>
  </div>
</template>

<style scoped></style>
