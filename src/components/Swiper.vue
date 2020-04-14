<template>
  <!-- ... -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- It is important to set "left" style prop on every slide -->
      <div
        class="swiper-slide"
        v-for="(slide, index) in virtualData.slides"
        :key="index"
        :style="{ left: `${virtualData.offset}px` }"
      >
        {{ slide }}
      </div>
    </div>
  </div>
  <!-- ... -->
</template>
<script>
import Swiper from "swiper/js/swiper.esm.bundle";

export default {
  data() {
    return {
      // dummy slides data
      slides: (function() {
        var slides = [];
        for (var i = 0; i < 600; i += 1) {
          slides.push("Slide " + (i + 1));
        }
        return slides;
      })(),
      // virtual data
      virtualData: {
        slides: []
      }
    };
  },
  mounted() {
    const self = this;
    const swiper = new Swiper(".swiper-container", {
      virtual: {
        slides: self.slides,
        renderExternal(data) {
          // assign virtual slides data
          self.virtualData = data;
        }
      }
    });
    return swiper;
  }
};
</script>
