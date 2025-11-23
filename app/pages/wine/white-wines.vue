<script setup lang="ts">
interface Wine {
  id: number;
  name: string;
  type: string;
  region: string;
  grape: string;
  year: string;
  alcohol: number;
  volume: number;
}

const wines = ref<Wine[]>([
  {
    id: 1,
    name: "tsolikauri",
    type: "white-dry",
    region: "kakheti",
    grape: "tsolikauri",
    year: "2024",
    alcohol: 14,
    volume: 750,
  },
  {
    id: 2,
    name: "kisi",
    type: "amber-dry",
    region: "kakheti",
    grape: "kisi",
    year: "2024",
    alcohol: 12,
    volume: 750,
  },
  {
    id: 3,
    name: "tvishi",
    type: "white-semi-sweet",
    region: "kakheti",
    grape: "tsolikauri",
    year: "2024",
    alcohol: 13,
    volume: 750,
  },
]);
</script>

<template>
  <div class="pb-20">
    <div class="text-center py-20">
      <h1
        class="font-display text-5xl md:text-7xl uppercase tracking-widest text-wine-white"
      >
        <span class="relative inline-block mr-1">
          <span
            class="absolute inset-0 bg-wine-red/20 blur-xl rounded-full scale-150"
          ></span>

          <span class="relative z-10 text-wine-red">D</span>
        </span>
        <span class="font-display relative z-10">epth</span>

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
        class="flex md:mx-20 h-[450px] relative"
        v-for="wine in wines"
        :key="wine.id"
      >
        <img
          src="/images/white-wine-bg.png"
          alt="white wine"
          class="w-full object-cover opacity-30 blur-xs"
        />
        <img
          src="/images/white.webp"
          alt="white wine"
          class="h-3/5 md:h-full absolute right-5 md:right-unset md:left-50 -top-5 md:top-unset md:bottom-5 object-cover"
        />

        <div
          class="absolute left-2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-1/2 flex flex-col items-start gap-8 z-20"
        >
          <div class="flex flex-col gap-4">
            <h1
              class="font-georgian text-5xl leading-none text-wine-white drop-shadow-lg"
            >
              {{ $t(wine.name) }}
            </h1>
            <p class="font-georgian text-xl tracking-wide uppercase">
              {{ $t(wine.type) }}
            </p>
          </div>

          <div class="flex gap-8 items-start ml-4">
            <div class="w-1 h-40 bg-wine-white/60 rounded-full mt-2"></div>

            <div class="flex flex-col gap-5 font-georgian">
              <div class="flex items-baseline gap-4">
                <span
                  class="text-wine-white uppercase text-sm tracking-widest"
                  >{{ $t("region") }}</span
                >
                <span class="text-xl">{{ $t(wine.region) }}</span>
              </div>

              <div class="flex items-baseline gap-4">
                <span
                  class="text-wine-white uppercase text-sm tracking-widest"
                  >{{ $t("grapes") }}</span
                >
                <span class="text-xl">{{ $t(wine.grape) }}</span>
              </div>

              <div class="flex items-baseline gap-4">
                <span
                  class="text-wine-white uppercase text-sm tracking-widest"
                  >{{ $t("year") }}</span
                >
                <span class="text-xl">{{ $t(wine.year) }}</span>
              </div>

              <div
                class="flex items-center gap-6 mt-2 pt-4 border-t border-wine-white"
              >
                <div class="text-center">
                  <span class="block text-3xl font-bold text-wine-white"
                    >{{ wine.alcohol }}%</span
                  >
                  <span class="text-xl uppercase tracking-wider">{{
                    $t("alcohol")
                  }}</span>
                </div>
                <div class="w-px h-8 bg-wine-white/20"></div>
                <div class="text-center">
                  <span class="block text-3xl font-bold text-wine-white"
                    >{{ wine.volume
                    }}<span class="text-base">{{ $t("ml") }}</span></span
                  >
                  <span class="text-xl uppercase tracking-wider">{{
                    $t("volume")
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
