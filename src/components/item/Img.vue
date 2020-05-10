<template>
  <section class="img__section">
    <div class="img__container">
      <div class="img__wrapper">
        <img
          v-for="image in images"
          :key="image.id"
          :src="require(`@/assets/img/${image}`)"
          class="img__image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "product/t-shirt-girl/nkg63001-yellow-corn/nkg63001-yellow-corn-0.jpg",
        "product/t-shirt-girl/nkg63001-yellow-corn/nkg63001-yellow-corn-1.jpg",
        "product/t-shirt-girl/nkg63001-yellow-corn/nkg63001-yellow-corn-2.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.img {
  &__section {
  }

  &__container {
  }
  &__wrapper {
  }
  &__image {
    width: 100%;
  }
}
</style>
