<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { SlashIcon } from "lucide-vue-next";
const route = useRouter();
console.log(route.currentRoute.value.path);

const currentRouteName = computed(() => {
  let arr = route.currentRoute.value.path.split("/");
  return arr[arr.length - 1];
});

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

const props = defineProps<{
  wines: Wine[];
  bgImage: string;
  bottleImage: string;
  primaryColor: "red" | "white" | "rose";
  secondaryColor: string;
}>();

const wineColors = {
  red: {
    blur: "bg-wine-red/20",
    bg: "bg-wine-red/60",
    text: "text-wine-red",
    d: "text-wine-white",
    border: "border-wine-red",
  },
  white: {
    blur: "bg-wine-white/20",
    bg: "bg-wine-white/60",
    text: "text-wine-white",
    d: "text-wine-red",
    border: "border-wine-white",
  },
  rose: {
    blur: "bg-wine-white/20",
    bg: "bg-wine-white/60",
    text: "text-wine-white",
    d: "text-wine-red",
    border: "border-wine-white",
  },
};

const colors = computed(() => wineColors[props.primaryColor]);
</script>

<template>
  <div class="pb-20">
    <!-- HEADER -->
    <div class="text-center pt-10 md:pt-20 md:pb-10 pb-5">
      <h1
        class="font-display text-5xl md:text-7xl uppercase tracking-widest"
        :class="colors.text"
      >
        <span class="relative inline-block mr-1">
          <span
            class="absolute inset-0 blur-xl rounded-full scale-150"
            :class="colors.blur"
          ></span>

          <span class="relative z-10 font-display" :class="colors.d">D</span>
        </span>

        <span class="relative z-10 font-display">epth</span>

        <span
          class="text-4xl md:text-6xl align-middle mx-2 font-tangerine lowercase text-primary"
        >
          of
        </span>

        Tradition
      </h1>

      <p class="mt-4 text-lg text-primary font-georgian italic">
        {{ $t("explore-bold-textures") }}
      </p>
    </div>

    <Breadcrumb class="mx-5 md:mx-20 pb-10">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            {{ $t("home") }}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <i18n-link to="/wine">
            {{ $t("wine") }}
          </i18n-link>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem v-if="currentRouteName">
          {{ $t(currentRouteName) }}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <!-- LIST -->
    <div class="flex flex-col gap-25">
      <div
        class="flex mx-5 md:mx-20 h-[450px] relative"
        v-for="wine in wines"
        :key="wine.id"
      >
        <!-- Background -->
        <img
          :src="bgImage"
          alt=""
          class="w-full object-cover opacity-30 blur-xs"
        />

        <!-- Bottle -->
        <img
          :src="bottleImage"
          alt=""
          class="h-3/5 md:h-full absolute right-5 md:right-unset md:left-50 -top-5 md:top-unset md:bottom-5 object-cover"
        />

        <!-- CONTENT -->
        <div
          class="absolute left-2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-1/2 flex flex-col items-start gap-8 z-20"
        >
          <div class="flex flex-col gap-4">
            <h1
              class="font-georgian text-3xl md:text-5xl leading-none drop-shadow-lg"
              :class="colors.text"
            >
              {{ $t(wine.name) }}
            </h1>
            <p class="font-georgian text-md md:text-xl tracking-wide uppercase">
              {{ $t(wine.type) }}
            </p>
          </div>

          <div class="flex gap-2 md:gap-8 items-start ml-4">
            <div class="w-1 h-40 rounded-full mt-2" :class="colors.bg"></div>

            <div class="flex flex-col gap-2 md:gap-5 font-georgian">
              <div class="flex items-baseline gap-4">
                <span
                  class="uppercase text-sm md:tracking-widest"
                  :class="colors.text"
                >
                  {{ $t("region") }}
                </span>
                <span class="md:text-xl">{{ $t(wine.region) }}</span>
              </div>

              <div class="flex items-baseline gap-4">
                <span
                  class="uppercase text-sm md:tracking-widest"
                  :class="colors.text"
                >
                  {{ $t("grapes") }}
                </span>
                <span class="text-md md:text-xl">{{ $t(wine.grape) }}</span>
              </div>

              <div class="flex items-baseline gap-4">
                <span
                  class="uppercase text-sm md:tracking-widest"
                  :class="colors.text"
                >
                  {{ $t("year") }}
                </span>
                <span class="text-xl">{{ $t(wine.year) }}</span>
              </div>

              <!-- STATS -->
              <div
                class="flex items-center gap-6 mt-2 pt-4 border-t"
                :class="colors.border"
              >
                <div class="text-center">
                  <span class="block text-3xl font-bold" :class="colors.text">
                    {{ wine.alcohol }}%
                  </span>
                  <span class="text-xl uppercase tracking-wider">
                    {{ $t("alcohol") }}
                  </span>
                </div>

                <div class="w-px h-8 opacity-20" :class="colors.bg"></div>

                <div class="text-center">
                  <span class="block text-3xl font-bold" :class="colors.text">
                    {{ wine.volume
                    }}<span class="text-base">{{ $t("ml") }}</span>
                  </span>
                  <span class="text-xl uppercase tracking-wider">
                    {{ $t("volume") }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /each -->
    </div>
  </div>
</template>
