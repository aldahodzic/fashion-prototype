<template>
  <section class="item__container">
    <itemImg></itemImg>

    <itemInfo></itemInfo>

    <itemMatch></itemMatch>
  </section>
</template>

<script>
import itemImg from "@/components/item/Img.vue";
import itemInfo from "@/components/item/Info.vue";
import itemMatch from "@/components/item/Match.vue";

export default {
  data() {
    return {
      product: [
        {
          id: "0001",
          name: "TWISTED KNIT SWEATER",
          price: { tag: 890, sale: 250 },
        },
      ],
    };
  },
  components: {
    itemImg,
    itemInfo,
    itemMatch,
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

    // @media only screen and (max-width: 56.25em) {
    //   display: block;
    // }
  }
}
</style>
