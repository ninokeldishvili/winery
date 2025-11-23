<script setup lang="ts">
// 1. Define the shape of your Wine object
interface Wine {
  id: number;
  name: string;
  type: string;
  region: string;
  variety: string;
  year: string;
  alcohol: number;
  volume: number;
  // Optional: distinct colors for Red vs White wines if you want
  colorClass?: string;
}

// 2. The Data Array
const wines = ref<Wine[]>([
  {
    id: 1,
    name: "ქინძმარაული",
    type: "წითელი ნახევრად ტკბილი",
    region: "ყვარელი",
    variety: "საფერავი",
    year: "2023",
    alcohol: 11.5,
    volume: 750,
  },
  {
    id: 2,
    name: "წინანდალი",
    type: "თეთრი მშრალი",
    region: "თელავი",
    variety: "რქაწითელი / მწვანე",
    year: "2022",
    alcohol: 12.5,
    volume: 750,
  },
  {
    id: 3,
    name: "ხვანჭკარა",
    type: "წითელი ნახევრად ტკბილი",
    region: "რაჭა",
    variety: "ალექსანდროული",
    year: "2023",
    alcohol: 11,
    volume: 750,
  },
  {
    id: 4,
    name: "საფერავი",
    type: "წითელი მშრალი",
    region: "მუკუზანი",
    variety: "საფერავი",
    year: "2020",
    alcohol: 13,
    volume: 750,
  },
]);
</script>

<template>
  <div class="text-center py-20">
    <h1
      class="font-georgian text-5xl md:text-7xl uppercase tracking-widest text-wine-red"
    >
      <span class="relative inline-block mr-1">
        <span
          class="absolute inset-0 bg-wine-white/20 blur-xl rounded-full scale-150"
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
  <div class="flex flex-col gap-25">
    <div
      class="flex px-20 h-[450px] relative"
      v-for="wine in wines"
      :key="wine.id"
    >
      <img
        src="/images/red-wine-bg.png"
        alt="red wine"
        class="w-full object-cover opacity-30 blur-xs"
      />
      <img
        src="/images/red.webp"
        alt="red wine"
        class="h-full absolute left-50 bottom-5 object-cover"
      />

      <div
        class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 flex flex-col items-start gap-8 z-20"
      >
        <div class="flex flex-col gap-4">
          <h1
            class="font-georgian text-5xl leading-none text-wine-red drop-shadow-lg"
          >
            {{ wine.name }}
          </h1>
          <p class="font-georgian text-xl tracking-wide uppercase">
            {{ wine.type }}
          </p>
        </div>

        <div class="flex gap-8 items-start ml-4">
          <div class="w-1 h-40 bg-wine-red/60 rounded-full mt-2"></div>

          <div class="flex flex-col gap-5 font-georgian">
            <div class="flex items-baseline gap-4">
              <span class="text-wine-red uppercase text-sm tracking-widest"
                >რეგიონი</span
              >
              <span class="text-xl">{{ wine.region }}</span>
            </div>

            <div class="flex items-baseline gap-4">
              <span class="text-wine-red uppercase text-sm tracking-widest"
                >ჯიში</span
              >
              <span class="text-xl">{{ wine.variety }}</span>
            </div>

            <div class="flex items-baseline gap-4">
              <span class="text-wine-red uppercase text-sm tracking-widest"
                >წელი</span
              >
              <span class="text-xl">{{ wine.year }}</span>
            </div>

            <div
              class="flex items-center gap-6 mt-2 pt-4 border-t border-wine-red"
            >
              <div class="text-center">
                <span class="block text-3xl font-bold text-wine-red"
                  >{{ wine.alcohol }}%</span
                >
                <span class="text-xl uppercase tracking-wider">ალკოჰოლი</span>
              </div>
              <div class="w-px h-8 bg-wine-red/20"></div>
              <div class="text-center">
                <span class="block text-3xl font-bold text-wine-red"
                  >{{ wine.volume }}<span class="text-base">მლ</span></span
                >
                <span class="text-xl uppercase tracking-wider">მოცულობა</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
