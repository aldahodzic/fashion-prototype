<template>
  <section class="match__section">
    <div class="match__container">
      <h1 class="match__header">match with</h1>
      <p class="match__count">3 items</p>
    </div>
    <div class="swiper-container match__swiper__container">
      <div class="swiper-wrapper match__swiper__wrapper">
        <template v-for="item in collections">
          <MatchList
            v-if="item.id != $route.params.id"
            :key="item.id"
            :image="item.images[0]"
            :id="item.id"
            :name="item.name"
            :price="item.price"
            :sizes="item.sizes"
          ></MatchList>
        </template>

        <!-- <MatchList
          v-for="item in collections"
          :key="item.id"
          :image="item.images[0]"
          :id="item.id"
          :name="item.name"
          :price="item.price"
          :sizes="item.sizes"
        ></MatchList> -->
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper/js/swiper.esm.bundle";
import MatchList from "@/components/item/SecondItem.vue";

export default {
  props: ["collections"],
  data() {
    return {};
  },
  components: {
    MatchList,
  },
  mounted() {
    // console.log(this.collections);
    const swiperMatch = new Swiper(".swiper-container", {
      // spaceBetween: 16,
      slidesPerView: "auto",
    });
    return swiperMatch;
  },
};
</script>

<style lang="scss" scoped>
.match {
  &__section {
    grid-column: 1/3;

    margin-top: 10rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
  &__container {
    grid-column: span 2;
    text-align: left;
  }
  &__header {
    font-size: 3.2rem;
  }
  &__count {
    text-transform: lowercase;
    font-size: 1.6rem;
    color: #828282;
    margin-bottom: 32px;
  }
}
</style>
