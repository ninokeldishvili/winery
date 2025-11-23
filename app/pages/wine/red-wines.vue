<script setup lang="ts"></script>

<template>
  <div class="text-center py-20">
    <h1
      class="font-georgian text-5xl md:text-7xl uppercase tracking-widest text-wine-red"
    >
      <span class="relative inline-block mr-1">
        <span
          class="absolute inset-0 bg-wine-white/20 blur-2xl rounded-full scale-150"
        ></span>

        <span class="relative z-10 text-wine-white">D</span>
      </span>
      <span class="relative z-10">epth</span>

      <span
        class="text-4xl md:text-6xl align-middle mx-2 font-tangerine lowercase text-primary"
        >of</span
      >
      Tradition
    </h1>

    <p class="mt-4 text-lg text-primary font-georgian italic">
      {{ $t("explore-bold-textures") }}
    </p>
  </div>
  <div class="flex px-20 h-1/2 relative">
    <img
      src="/images/red-wine-bg.png"
      alt="red wine"
      class="w-full object-cover opacity-30 blur-xs"
    />
    <img
      src="/images/red.webp"
      alt="red wine"
      class="h-full absolute left-40 bottom-5 object-cover"
    />
  </div>
</template>
