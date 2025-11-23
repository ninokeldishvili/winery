<script setup lang="ts"></script>
<template>
  <section class="min-h-screen bg-background text-foreground py-20">
    <div class="container mx-auto px-6 max-w-4xl">
      <h1 class="font-heading text-5xl mb-10 text-center">{{ $t("title") }}</h1>

      <div class="space-y-12">
        <!-- Contact Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="p-6 rounded-2xl shadow bg-card">
            <h2 class="text-2xl font-semibold mb-4">
              {{ $t("address-title") }}
            </h2>
            <p class="font-base text-lg leading-relaxed">
              {{ $t("address-line1") }}<br />
              {{ $t("address-line2") }}
            </p>
          </div>

          <div class="p-6 rounded-2xl shadow bg-card">
            <h2 class="text-2xl font-semibold mb-4">
              {{ $t("details-title") }}
            </h2>
            <p class="font-base text-lg leading-relaxed">
              {{ $t("email") }}:
              <a href="mailto:info@alazare.ge" class="underline"
                >info@alazare.ge</a
              ><br />
              {{ $t("phone") }}:
              <a href="tel:+995500000000" class="underline"
                >+995 500 00 00 00</a
              >
            </p>
          </div>
        </div>

        <!-- Fancy Section -->
        <div class="relative p-12 rounded-2xl shadow bg-card overflow-hidden">
          <div
            class="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/grapes-pattern.png')] bg-cover bg-center"
          ></div>

          <h2 class="text-4xl font-semibold mb-6 text-center">
            {{ $t("visit-title") }}
          </h2>

          <p
            class="font-base text-lg text-center max-w-2xl mx-auto leading-relaxed mb-6"
          >
            {{ $t("description") }}
          </p>

          <div
            class="flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
          >
            <div
              class="p-6 rounded-xl bg-secondary shadow text-center w-full md:w-1/3"
            >
              <h3 class="text-xl font-semibold mb-2">
                {{ $t("working-hours-title") }}
              </h3>
              <p class="font-base leading-relaxed">
                {{ $t("working-days") }}<br />
                {{ $t("working-hours") }}
              </p>
            </div>

            <div
              class="p-6 rounded-xl bg-secondary shadow text-center w-full md:w-1/3"
            >
              <h3 class="text-xl font-semibold mb-2">
                {{ $t("tastings-title") }}
              </h3>
              <p class="font-base leading-relaxed">
                {{ $t("tastings-description") }}
              </p>
            </div>

            <div
              class="p-6 rounded-xl bg-secondary shadow text-center w-full md:w-1/3"
            >
              <h3 class="text-xl font-semibold mb-2">
                {{ $t("tours-title") }}
              </h3>
              <p class="font-base leading-relaxed">
                {{ $t("tours-description") }}
              </p>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="text-center">
          <h2 class="text-3xl font-semibold mb-4">{{ $t("follow-us") }}</h2>
          <SocialMedia class="text-wine-red" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
