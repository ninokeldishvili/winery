<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
        loop: true,
      }"
      :plugins="[
        Autoplay({
          delay: 3000,
        }),
        Fade(),
      ]"
    >
      <CarouselContent>
        <CarouselItem>
          <div class="grid grid-cols-1 md:grid-cols-3 h-screen">
            <div
              class="relative col-span-1 flex flex-col gap-4 md:gap-6 items-center justify-center p-6 md:ml-10 md:py-20 animate-fade-in-left"
            >
              <span class="font-bold text-6xl md:text-8xl font-tangerine">
                Alazare
              </span>
              <div
                class="font-georgian text-lg md:text-xl max-w-[80%] md:max-w-1/2 text-center italic"
              >
                {{ $t("where-every-bottle") }}
              </div>

              <span
                class="absolute top-10 right-10 md:top-20 md:right-0 w-10 h-10 md:w-20 md:h-20 border-t-2 border-r-2 border-sidebar"
              ></span>
              <span
                class="absolute bottom-10 left-10 md:bottom-20 md:left-0 w-10 h-10 md:w-20 md:h-20 border-b-2 border-l-2 border-sidebar"
              ></span>
            </div>

            <div
              class="col-span-1 md:col-span-2 flex md:items-center justify-center overflow-hidden py-2 md:py-0 animate-fade-in-scale"
            >
              <img
                alt="white"
                src="/images/white.webp"
                class="h-[35vh] md:h-full object-cover md:max-h-[550px]"
              />
              <img
                alt="rose"
                src="/images/rose.webp"
                class="h-[40vh] md:h-full object-cover md:max-h-[600px] mt-5 md:mt-10 mx-[-20px] md:mx-0 z-10"
              />
              <img
                alt="red"
                src="/images/red.webp"
                class="h-[35vh] md:h-full object-cover md:max-h-[550px]"
              />
            </div>
          </div>
        </CarouselItem>

        <CarouselItem class="relative">
          <i18n-link
            to="/wine/red-wines"
            class="absolute z-50 bottom-20 left-1/2 -translate-x-1/2 text-xl whitespace-nowrap px-6 italic md:bottom-50 md:right-40 md:left-auto md:translate-x-0 md:text-2xl md:px-8 text-sidebar-foreground border-sidebar-foreground py-2 cursor-pointer transform transition-transform hover:scale-110 duration-600 ease-in-out bg-sidebar-foreground/20 border-2 backdrop-blur-sm"
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
            to="/wine/white-wines"
            class="absolute z-50 bottom-20 left-1/2 -translate-x-1/2 text-xl whitespace-nowrap px-6 italic md:bottom-10 md:right-10 md:left-auto md:translate-x-0 md:text-2xl md:px-8 text-secondary border-2 border-secondary py-2 cursor-pointer transform transition-transform hover:scale-110 duration-600 ease-in-out bg-secondary/20 backdrop-blur-sm"
          >
            {{ $t("discover-our-white-wines") }}
          </i18n-link>

          <img
            src="/images/white.gif"
            alt="white wine"
            class="h-screen object-cover w-full"
          />
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious class="hidden md:flex left-5" />
      <CarouselNext class="hidden md:flex right-5" />
    </Carousel>
  </div>
</template>

<style scoped></style>
