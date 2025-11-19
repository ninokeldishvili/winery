<script setup>
import { Icon } from "@iconify/vue";

// Social links (you can customize)
const props = defineProps({
  size: { type: Number, default: 22 },
  class: { type: String, default: "" },
});

const icons = [
  { name: "facebook", link: "https://facebook.com/", icon: "mdi:facebook" },
  { name: "instagram", link: "https://instagram.com/", icon: "mdi:instagram" },
  { name: "x", link: "https://x.com/", icon: "line-md:twitter-x" }, // X uses twitter icon
  { name: "tiktok", link: "https://tiktok.com/", icon: "ic:baseline-tiktok" },
];
</script>

<template>
  <div class="flex items-center justify-center gap-4" :class="props.class">
    <a
      v-for="{ name, icon, link } in icons"
      :key="name"
      :href="link"
      target="_blank"
      rel="noopener"
      class="transition hover:opacity-70"
    >
      <Icon :icon="icon" :width="size" :height="size" />
    </a>
  </div>
</template>
