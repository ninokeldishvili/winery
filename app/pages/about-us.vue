<script setup lang="ts">
const heroImage = "/images/alazani.jpg";
const storyImage = "/images/us.png";
const { getLocale } = useI18n();
const currentLocale = computed(() => {
  return getLocale();
});

const philosophy = [
  {
    title: "Craftsmanship",
    text: "Every bottle is created with precision, passion, and years of experience.",
    img: "/images/craft.jpg",
  },
  {
    title: "Tradition",
    text: "We honor generations of knowledge passed down through our family.",
    img: "/images/tradition.png",
  },
  {
    title: "Connection",
    text: "Wine is more than a drink — it's a way to bring people together.",
    img: "/images/connection.png",
  },
];
</script>
<template>
  <div
    class="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
  >
    <!-- Hero Section -->
    <section class="relative w-full h-[70vh] flex items-center justify-center">
      <div
        class="absolute inset-0 bg-cover bg-center scale-100 opacity-0 animate-fade-in-scale"
        :style="{ backgroundImage: `url(${heroImage})` }"
      ></div>

      <div class="absolute inset-0"></div>

      <h1
        class="relative z-10 text-6xl md:text-7xl font-bold text-secondary tracking-wide text-center opacity-0 animate-slide-up"
      >
        Our Story
      </h1>
    </section>

    <!-- Story Section -->
    <section
      class="max-w-5xl w-full px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12"
    >
      <div class="opacity-0 animate-fade-in-left">
        <h2
          class="text-4xl font-semibold mb-6 text-wine-red"
          :class="
            currentLocale === 'ka'
              ? 'font-georgian '
              : 'font-tangerine text-6xl'
          "
        >
          How It All Began
        </h2>
        <p
          class="text-lg leading-relaxed text-neutral-700 mb-6"
          :class="currentLocale === 'ka' ? 'font-georgian' : 'font-display'"
        >
          Nestled in the heart of our homeland, our winery was born from a
          passion for craftsmanship, culture, and the timeless process of
          bringing people together over a shared bottle. What began as a small
          family tradition blossomed into a lifelong dedication to the art of
          winemaking.
        </p>
        <p
          class="text-lg leading-relaxed text-neutral-700"
          :class="currentLocale === 'ka' ? 'font-georgian' : 'font-display'"
        >
          Every grape, every barrel, every bottle tells a story — a story of
          patience, nature, and love. Our mission is to honor the land, our
          heritage, and the people who enjoy the fruits of our labor.
        </p>
      </div>

      <div class="w-full h-full opacity-0 animate-fade-in-right">
        <img
          :src="storyImage"
          class="rounded-xl shadow-lg w-full h-full object-cover"
          alt="us"
        />
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="bg-white py-20 w-full">
      <div class="max-w-5xl mx-auto px-6">
        <h2
          :class="
            currentLocale === 'ka'
              ? 'font-georgian '
              : 'font-tangerine text-6xl'
          "
          class="text-4xl font-semibold text-center mb-10 text-wine-red opacity-0 animate-fade-in"
        >
          Our Philosophy
        </h2>

        <div class="grid md:grid-cols-3 gap-10">
          <div
            v-for="(item, index) in philosophy"
            :key="index"
            class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in"
            :style="{ animationDelay: `${0.2 * index}s` }"
          >
            <img
              :src="item.img"
              class="w-full h-48 object-cover"
              alt="philosophy"
            />
            <div class="p-6">
              <h3
                :class="
                  currentLocale === 'ka' ? 'font-georgian ' : 'font-display'
                "
                class="text-2xl font-semibold mb-3 text-wine-red"
              >
                {{ item.title }}
              </h3>
              <p
                :class="
                  currentLocale === 'ka' ? 'font-georgian ' : 'font-display'
                "
                class="text-neutral-700 leading-relaxed"
              >
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 flex flex-col items-center">
      <h2
        :class="
          currentLocale === 'ka' ? 'font-georgian ' : 'font-tangerine text-6xl'
        "
        class="text-4xl font-semibold text-center mb-6 text-wine-red opacity-0 animate-fade-in"
      >
        Experience the Journey
      </h2>

      <p
        :class="currentLocale === 'ka' ? 'font-georgian ' : 'font-display'"
        class="text-neutral-700 text-lg text-center max-w-xl mb-10 opacity-0 animate-fade-in"
        style="animation-delay: 0.2s"
      >
        Discover our wines, crafted with passion, heritage, and a love for what
        we do.
      </p>

      <i18n-link
        to="/wine"
        :class="currentLocale === 'ka' ? 'font-georgian ' : 'font-display'"
        class="bg-wine-red text-white px-10 py-6 rounded-xl text-lg shadow-md hover:bg-wine-red/90 transition-all duration-300"
      >
        Explore Our Collection
      </i18n-link>
    </section>
  </div>
</template>

<style>
/* Fade in */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease forwards;
}

/* Slide up */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 1.2s ease forwards;
}

/* Fade in + scale */
@keyframes fade-in-scale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-scale {
  animation: fade-in-scale 1.4s ease forwards;
}

/* Left */
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 1s ease forwards;
}

/* Right */
@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-right {
  animation: fade-in-right 1s ease forwards;
}
</style>
