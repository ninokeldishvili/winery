<script setup lang="ts">
import WineShowcase from "@/components/WineShowcase.vue";

const wines = [
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
];
</script>

<template>
  <WineShowcase
    :wines="wines"
    bgImage="/images/white-wine-bg.png"
    bottleImage="/images/white.webp"
    primaryColor="white"
    secondaryColor="red"
  />
</template>
