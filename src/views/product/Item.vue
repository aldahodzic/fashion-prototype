<template>
  <section class="item__container">
    <!-- <p>{{ item }}</p> -->

    <itemImg :images="item.images" :name="item.name"></itemImg>
    <itemInfo
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :details="item.details"
      :sizes="item.sizes"
    ></itemInfo>
    <itemMatch :collections="collections"></itemMatch>
  </section>
</template>

<script>
import itemImg from "@/components/item/Img.vue";
import itemInfo from "@/components/item/Info.vue";
import itemMatch from "@/components/item/Match.vue";

export default {

  components: {
    itemImg,
    itemInfo,
    itemMatch,
  },
  computed: {
    collections() {
      return this.$store.getters.getCollections;
    },
    item() {
      let collection = this.collections;
      return collection.find(item => item.id == this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  &__container {
    min-height: 700px;
    width: 100%;
    display: grid;
    grid-template-columns: 59% 1fr;
    text-transform: uppercase;
    column-gap: 2.5%;

    // @media only screen and (max-width: 56.25em) {
    //   display: block;
    // }
  }
}
</style>
