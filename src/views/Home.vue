<template>
  <div class="home">
    <Swiper></Swiper>
    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Swiper,
    Footer,
  },
};
</script>
