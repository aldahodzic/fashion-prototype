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

<style lang="scss" scope>
.home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
