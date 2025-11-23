<script setup lang="ts">
import SocialMedia from "@/components/SocialMedia.vue";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const { getLocale } = useI18n();
const currentLocale = computed(() => {
  return getLocale();
});
</script>

<template>
  <div
    class="min-h-screen bg-background text-foreground py-20 relative overflow-hidden"
    :class="currentLocale !== 'ka' ? 'font-display' : ''"
  >
    <!-- Decorative grapevine corner -->
    <img
      alt="stain"
      src="/images/red-stain.svg"
      class="hidden md:block absolute top-10 left-10 w-40 opacity-20"
    />
    <img
      alt="stain"
      src="/images/red-stain.svg"
      class="hidden md:block absolute bottom-10 right-10 w-40 opacity-20 rotate-180"
    />
    <div class="px-6 md:px-20 xl:px-40 flex flex-col gap-8 md:gap-12">
      <h1
        class="text-2xl md:text-5xl md:mb-16 text-center text-wine-white"
        :class="currentLocale !== 'ka' ? 'font-display' : ''"
      >
        {{ $t("title") }}
      </h1>

      <div class="space-y-12">
        <!-- Contact Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card class="bg-card shadow-xl border-wine-red/20">
            <CardHeader>
              <CardTitle
                class="text-2xl text-wine-white"
                :class="currentLocale !== 'ka' ? 'font-display' : ''"
                >{{ $t("address-title") }}</CardTitle
              >
            </CardHeader>
            <CardContent>
              <p
                class="text-lg leading-relaxed"
                :class="currentLocale !== 'ka' ? 'font-display' : ''"
              >
                {{ $t("address-line1") }}<br />
                {{ $t("address-line2") }}
              </p>
            </CardContent>
          </Card>

          <Card class="bg-card shadow-xl border-wine-red/20">
            <CardHeader>
              <CardTitle
                class="text-2xl text-wine-white"
                :class="currentLocale !== 'ka' ? 'font-display' : ''"
                >{{ $t("details-title") }}</CardTitle
              >
            </CardHeader>
            <CardContent>
              <p
                class="text-lg leading-relaxed"
                :class="currentLocale !== 'ka' ? 'font-display' : ''"
              >
                {{ $t("email") }}:
                <a href="mailto:info@alazare.ge" class="underline"
                  >info@alazare.ge</a
                ><br />
                {{ $t("phone") }}:
                <a href="tel:+995500000000" class="underline"
                  >+995 500 00 00 00</a
                >
              </p>
            </CardContent>
          </Card>
        </div>

        <!-- Fancy Section -->
        <Card
          class="relative bg-card shadow-xl border-wine-red/30 overflow-hidden"
        >
          <!-- Overlay wine texture -->
          <div
            class="absolute inset-0 bg-[url('/images/wine-texture.jpg')] bg-cover opacity-10 pointer-events-none"
          ></div>

          <CardHeader>
            <CardTitle
              class="text-4xl text-center text-wine-white mb-6"
              :class="currentLocale !== 'ka' ? 'font-display' : ''"
            >
              {{ $t("visit-title") }}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p
              class="text-lg text-center max-w-2xl mx-auto leading-relaxed mb-10"
              :class="currentLocale !== 'ka' ? 'font-display' : ''"
            >
              {{ $t("description") }}
            </p>

            <div class="flex flex-col md:flex-row justify-center gap-6 mt-8">
              <Card class="bg-secondary/60 w-full md:w-1/3 border-wine-red/20">
                <CardHeader>
                  <CardTitle
                    class="text-xl text-center text-wine-white"
                    :class="currentLocale !== 'ka' ? 'font-display' : ''"
                    >{{ $t("tastings-title") }}</CardTitle
                  >
                </CardHeader>
                <CardContent>
                  <p
                    class="text-center leading-relaxed"
                    :class="currentLocale !== 'ka' ? 'font-display' : ''"
                  >
                    {{ $t("tastings-description") }}
                  </p>
                </CardContent>
              </Card>

              <Card class="bg-secondary/60 w-full md:w-1/3 border-wine-red/20">
                <CardHeader>
                  <CardTitle
                    class="text-xl text-center text-wine-white"
                    :class="currentLocale !== 'ka' ? 'font-display' : ''"
                    >{{ $t("tours-title") }}</CardTitle
                  >
                </CardHeader>
                <CardContent>
                  <p
                    class="text-center leading-relaxed"
                    :class="currentLocale !== 'ka' ? 'font-display' : ''"
                  >
                    {{ $t("tours-description") }}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <!-- Social Media -->
        <div class="text-center mt-10">
          <h2
            class="text-3xl font-semibold mb-6 text-wine-white"
            :class="currentLocale !== 'ka' ? 'font-display' : ''"
          >
            {{ $t("follow-us") }}
          </h2>
          <SocialMedia class="text-wine-red" />
        </div>
      </div>
    </div>
  </div>
</template>
