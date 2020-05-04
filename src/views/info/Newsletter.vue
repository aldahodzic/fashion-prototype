<template>
  <div class="newsletter-page__container">
    <h1 class="newsletter-page__header">Newsletter</h1>
    <p lass="newsletter-page__para">
      Subscribe to our Newsletter and we will send you news and information
      about new trends every week.
    </p>
    <Newsletter></Newsletter>
  </div>
</template>

<script>
import Newsletter from "@/components/Newsletter.vue";

export default {
  components: {
    Newsletter,
  },
};
</script>

<style lang="scss" scoped>
.newsletter-page {
  &__header {
    padding: 20px 0 0;
    font-size: 2.2rem;
  }
  &__para {
    letter-spacing: 0.2px;
    line-height: 1.5;
  }
}
</style>
