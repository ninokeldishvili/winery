<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col gap-5 md:gap-20 items-center justify-center w-full h-full md:mb-30 py-20 md:py-0"
  >
    <h1 class="font-tangerine text-6xl font-bold italic">
      {{ $t("find-your-perfect-pour") }}
    </h1>
    <div class="grid md:grid-cols-3 grid-cols-1 w-full md:gap-0 gap-30">
      <i18n-link
        to="/wine/red-wines"
        class="relative flex flex-col gap-12 md:gap-20 items-center justify-center group cursor-pointer"
      >
        <h2
          class="relative text-2xl font-georgian uppercase px-8 py-3 z-10 transition-colors duration-300 group-hover:text-secondary md:text-primary text-secondary"
        >
          <span
            class="absolute inset-0 bg-wine-red/80 -z-10 opacity-100 md:opacity-0 transition-all duration-500 ease-in-out rounded-[60%_40%_30%_70%/60%_30%_70%_40%] group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-6"
          ></span>

          <span
            class="absolute inset-0 bg-wine-red -z-20 opacity-100 md:opacity-0 transition-all duration-700 ease-in-out rounded-[40%_60%_60%_40%/40%_50%_60%_50%] group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-3"
          ></span>

          {{ $t("red-wines") }}
        </h2>
        <div
          class="relative w-80 h-80 rounded-full bg-wine-red overflow-hidden flex items-center justify-center"
        >
          <div
            class="absolute inset-[-50%] flex flex-wrap content-center justify-center gap-x-8 gap-y-4 -rotate-12 opacity-20 pointer-events-none select-none"
          >
            <span
              v-for="n in 7"
              :key="n"
              class="text-6xl font-extrabold uppercase whitespace-nowrap font-tangerine"
            >
              {{ $t("red-wines") }}
            </span>
          </div>
        </div>
        <div
          class="absolute -bottom-10 w-25 rotate-15 group-hover:scale-110 group-hover:rotate-0 transition-all fade-in duration-600 pointer-events-none select-none"
        >
          <img src="/images/red.webp" alt="red wines" />
        </div>
      </i18n-link>
      <i18n-link
        to="/wine/white-wines"
        class="relative flex flex-col gap-12 md:gap-20 items-center justify-center group cursor-pointer"
      >
        <h2
          class="relative text-2xl font-georgian uppercase px-8 py-3 z-10 transition-colors duration-300 group-hover:text-secondary md:text-primary text-secondary"
        >
          <span
            class="absolute inset-0 bg-wine-white/80 -z-10 opacity-100 md:opacity-0 transition-all duration-500 ease-in-out rounded-[38%_62%_63%_37%/41%_44%_56%_59%] group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-2"
          ></span>

          <span
            class="absolute inset-0 bg-wine-white -z-20 opacity-100 md:opacity-0 transition-all duration-700 ease-in-out rounded-[50%_50%_33%_67%/55%_27%_73%_45%] group-hover:opacity-100 group-hover:scale-105 group-hover:-rotate-1"
          ></span>

          {{ $t("white-wines") }}
        </h2>
        <div
          class="relative w-80 h-80 rounded-full bg-wine-white overflow-hidden flex items-center justify-center"
        >
          <div
            class="absolute inset-[-50%] flex flex-wrap content-center justify-center gap-x-8 gap-y-4 -rotate-12 opacity-20 pointer-events-none select-none"
          >
            <span
              v-for="n in 7"
              :key="n"
              class="text-6xl font-extrabold uppercase whitespace-nowrap font-tangerine"
            >
              {{ $t("white-wines") }}
            </span>
          </div>
        </div>
        <div
          class="absolute -bottom-10 w-25 rotate-15 group-hover:scale-110 group-hover:rotate-0 transition-all fade-in duration-600 pointer-events-none select-none"
        >
          <img src="/images/white.webp" alt="white wines" />
        </div>
      </i18n-link>
      <i18n-link
        to="/wine/rose-wines"
        class="relative flex flex-col gap-12 md:gap-20 items-center justify-center group cursor-pointer"
      >
        <h2
          class="relative text-2xl font-georgian uppercase px-8 py-3 z-10 transition-colors duration-300 group-hover:text-secondary md:text-primary text-secondary"
        >
          <span
            class="absolute inset-0 bg-wine-rose/80 -z-10 opacity-100 md:opacity-0 transition-all duration-500 ease-in-out rounded-[45%_55%_70%_30%/50%_30%_70%_50%] group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-3"
          ></span>

          <span
            class="absolute inset-0 bg-wine-rose -z-20 opacity-100 md:opacity-0 transition-all duration-700 ease-in-out rounded-[70%_30%_30%_70%/60%_40%_60%_40%] group-hover:opacity-100 group-hover:scale-105 group-hover:-rotate-2"
          ></span>

          {{ $t("rose-wines") }}
        </h2>
        <div
          class="relative w-80 h-80 rounded-full bg-wine-rose overflow-hidden flex items-center justify-center"
        >
          <div
            class="absolute inset-[-50%] flex flex-wrap content-center justify-center gap-x-8 gap-y-4 -rotate-12 opacity-20 pointer-events-none select-none"
          >
            <span
              v-for="n in 7"
              :key="n"
              class="text-6xl font-extrabold uppercase whitespace-nowrap font-tangerine"
            >
              {{ $t("rose-wines") }}
            </span>
          </div>
        </div>
        <div
          class="absolute -bottom-10 w-25 rotate-15 group-hover:scale-110 group-hover:rotate-0 transition-all fade-in duration-600 pointer-events-none select-none"
        >
          <img src="/images/rose.webp" alt="rose wines" />
        </div>
      </i18n-link>
    </div>
  </div>
</template>

<style scoped></style>
