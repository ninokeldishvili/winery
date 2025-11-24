<script setup lang="ts">
import WineShowcase from "@/components/WineShowcase.vue";

const wines = [
  {
    id: 1,
    name: "kindzmarauli",
    type: "red-semi-sweet",
    region: "kakheti",
    grape: "saperavi",
    year: "2023",
    alcohol: 11.5,
    volume: 750,
  },
  {
    id: 2,
    name: "mukuzani",
    type: "red-dry",
    region: "kakheti",
    grape: "saperavi",
    year: "2022",
    alcohol: 12.5,
    volume: 750,
  },
  {
    id: 3,
    name: "khvanchkara",
    type: "red-semi-sweet",
    region: "kakheti",
    grape: "aleksandrouli",
    year: "2023",
    alcohol: 11,
    volume: 750,
  },
  {
    id: 4,
    name: "saperavi",
    type: "red-dry",
    region: "kakheti",
    grape: "saperavi",
    year: "2020",
    alcohol: 13,
    volume: 750,
  },
];
</script>

<template>
  <WineShowcase
    :wines="wines"
    bgImage="/images/red-wine-bg.png"
    bottleImage="/images/red.webp"
    primaryColor="red"
    secondaryColor="white"
  />
</template>
