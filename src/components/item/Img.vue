<template>
  <section class="img__section">
    <div class="img__container">
      <div class="img__wrapper">
        <img
          v-for="(image, index) in images"
          :key="image.id"
          :src="require(`@/assets/img/${image}`)"
          :alt="name + ' ' + index"
          class="img__image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["images", "name"],
};
</script>

<style lang="scss" scoped>
.img {
  &__image {
    width: 100%;
  }
}
</style>
