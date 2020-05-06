<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <picture class="swiper-slide" v-for="slide in slides" :key="slide.id">
        <source media="(orientation: portrait)" :srcset="slide[0]" />
        <source media="(orientation: landscape)" :srcset="slide[1]" />
        <img :src="slide[1]" />
      </picture>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper/js/swiper.esm.bundle";

export default {
  data() {
    return {
      slides: [
        [
          require("../assets/img/rsz_banner1.jpg"),
          require("../assets/img/rsz_banner2.jpg"),
        ],
        [
          require("../assets/img/portrait_0.jpg"),
          require("../assets/img/landscape_0.jpg"),
        ],
      ],
      virtualData: [],
    };
  },
  mounted() {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
    return swiper;
  },
};
</script>

<style lang="scss">
.swiper {
  &-container {
    width: 100%;
  }

  &-wrapper {
    width: 100%;
  }

  &-slide {
    width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>
