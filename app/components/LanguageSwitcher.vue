<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const { $switchLocale, getLocale, getLocales, locale } = useI18n();

// helper to read current locale whether `locale` ref exists or not
const currentLocale = () => {
  // if `locale` exists and looks like a ref, use it
  if (locale && typeof locale === "object" && "value" in locale)
    return locale.value;
  // fallback to getLocale() (string)
  if (typeof getLocale === "function") return getLocale();
  return undefined;
};

const availableLocales = computed(() => {
  const current = currentLocale();
  const locales = typeof getLocales === "function" ? getLocales() : [];
  return locales.filter((i) => i.code !== current);
});
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <button
      v-for="loc in availableLocales"
      :key="loc.code"
      class="cursor-pointer hover:opacity-70 text-xl flex items-center justify-center"
      @click="$switchLocale(loc.code)"
      :aria-label="`Switch to ${loc.code}`"
    >
      <Icon :icon="loc.icon || 'mdi:translate'" />
    </button>
  </div>
</template>
