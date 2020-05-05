<template>
  <section class="newsletter-page__container">
    <Subscribe></Subscribe>
    <Unsubscribe></Unsubscribe>
  </section>
</template>

<script>
import Subscribe from "@/components/Subscribe.vue";
import Unsubscribe from "@/components/Unsubscribe.vue";

export default {
  components: {
    Subscribe,
    Unsubscribe,
  },
};
</script>

<style lang="scss" scoped>
::v-deep .subscribe__header {
  background-color: green;
}
</style>
