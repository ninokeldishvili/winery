<script setup lang="ts">
// Shadcn components used: Card, CardTitle, CardDescription, Button, Badge
definePageMeta({
  title: "Winery Experiences & Events",
});

const { getLocale } = useI18n();
const currentLocale = computed(() => {
  return getLocale();
});
</script>
<template>
  <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16 max-w-4xl mx-auto">
      <h1
        class="font-extrabold tracking-tight text-wine-red animate-fade-in-scale"
        :class="
          currentLocale === 'ka'
            ? 'font-georgian text-4xl'
            : 'font-tangerine text-8xl'
        "
      >
        Experience Our Winery
      </h1>
      <p
        class="mt-4 text-xl italic"
        :class="currentLocale === 'ka' ? 'font-georgian' : 'font-display'"
      >
        From intimate private tours to grand seasonal festivals, we offer unique
        ways to connect with our land, our history, and our wine.
      </p>
    </div>

    <div class="space-y-12">
      <Card
        class="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
      >
        <div class="flex flex-col lg:flex-row">
          <img
            src="/images/tasting.png"
            alt="tasting"
            class="lg:w-1/2 h-80 lg:h-auto bg-cover bg-center animate-fade-in-scale"
          />

          <div class="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div
              class="w-fit mb-3 bg-wine-red text-secondary py-1 px-4 rounded-2xl text-sm animate-fade-in-right"
            >
              Daily
            </div>
            <CardTitle class="text-3xl font-bold mb-3"
              >Intimate Wine Tastings & Tours</CardTitle
            >
            <CardDescription class="text-lg mb-6">
              Step into our cellar and explore the complexity of our portfolio.
              Our guided tours offer an exclusive look at our winemaking
              process, culminating in a curated tasting led by our experienced
              sommelier. A perfect, relaxed introduction to our craft.
            </CardDescription>
          </div>
        </div>
      </Card>

      <Card
        class="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
      >
        <div class="flex flex-col lg:flex-row-reverse">
          <img
            src="/images/harvest.png"
            alt="harvest"
            class="lg:w-1/2 h-80 lg:h-auto bg-cover bg-center animate-fade-in-scale"
          />

          <div class="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div
              class="w-fit mb-3 bg-wine-white text-secondary py-1 px-4 rounded-2xl text-sm animate-fade-in-left"
            >
              Seasonal
            </div>

            <CardTitle class="text-3xl font-bold mb-3"
              >Harvest & Seasonal Celebrations</CardTitle
            >
            <CardDescription class="text-lg mb-6">
              Twice a year, we throw open our doors for our famous seasonal
              festivals. Expect live music, traditional local cuisine, family
              activities like grape stomping, and the celebratory atmosphere of
              a true wine region gathering.
            </CardDescription>
          </div>
        </div>
      </Card>

      <Card
        class="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
      >
        <div class="flex flex-col lg:flex-row">
          <img
            src="/images/prevate.png"
            alt="private events"
            class="lg:w-1/2 h-80 lg:h-auto bg-cover bg-center animate-fade-in-scale"
          />

          <div class="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div
              class="w-fit mb-3 bg-wine-rose text-secondary py-1 px-4 rounded-2xl text-sm animate-fade-in-right"
            >
              Exclusive
            </div>

            <CardTitle class="text-3xl font-bold mb-3"
              >Host Your Private Event</CardTitle
            >
            <CardDescription class="text-lg mb-6">
              Our stunning vineyard views and rustic cellar spaces provide a
              breathtaking backdrop for weddings, corporate retreats, and
              private dinners. We offer customizable packages to ensure your
              event is truly unforgettable.
            </CardDescription>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
