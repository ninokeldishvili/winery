<script setup lang="ts">
const { $t } = useI18n();
</script>

<template>
  <div class="grid grid-cols-3 h-full">
    <div
      class="relative col-span-1 flex flex-col gap-6 items-center justify-center py-12"
    >
      <span class="font-bold text-8xl font-tangerine"> Alazare </span>
      <div class="font-georgian text-xl max-w-1/2 text-center">
        {{ $t("where-every-bottle") }}
      </div>

      <!-- Corner borders -->
      <span
        class="absolute top-12 right-0 w-20 h-20 border-t-2 border-r-2 border-sidebar"
      ></span>
      <span
        class="absolute bottom-12 left-0 w-20 h-20 border-b-2 border-l-2 border-sidebar"
      ></span>
    </div>
    <div class="col-span-2 flex px-20 items-center justify-center">
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
    </div>
  </div>
</template>

<style scoped></style>
