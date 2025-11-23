<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col gap-12 items-center justify-center w-full h-full mb-30"
  >
    <h1 class="font-tangerine text-6xl font-bold">
      {{ $t("find-your-perfect-pour") }}
    </h1>
    <div class="grid grid-cols-3 w-full">
      <div
        class="relative flex flex-col gap-20 items-center justify-center group cursor-pointer"
      >
        <h2
          class="text-2xl font-georgian uppercase group-hover:bg-wine-red px-6 group-hover:text-secondary transition-all fade-in duration-600"
        >
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
          class="absolute -bottom-10 w-25 rotate-20 group-hover:scale-110 group-hover:rotate-0 transition-all fade-in duration-600 pointer-events-none select-none"
        >
          <img src="/images/red.webp" alt="red wines" />
        </div>
      </div>
      <div
        class="relative flex flex-col gap-20 items-center justify-center group cursor-pointer"
      >
        <h2
          class="text-2xl font-georgian uppercase group-hover:bg-wine-white px-6 group-hover:text-secondary transition-all fade-in duration-600"
        >
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
          class="absolute -bottom-10 w-25 rotate-20 group-hover:scale-110 group-hover:rotate-0 transition-all fade-in duration-600 pointer-events-none select-none"
        >
          <img src="/images/white.webp" alt="white wines" />
        </div>
      </div>

      <div
        class="relative flex flex-col gap-20 items-center justify-center group cursor-pointer"
      >
        <h2
          class="text-2xl font-georgian uppercase group-hover:bg-wine-rose px-6 group-hover:text-secondary transition-all fade-in duration-600"
        >
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
          class="absolute -bottom-10 w-25 rotate-20 group-hover:scale-110 group-hover:rotate-0 transition-all fade-in duration-600 pointer-events-none select-none"
        >
          <img src="/images/rose.webp" alt="rose wines" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
