<template>
  <div>
    <ul>
      <li v-for="item in products" :key="item.id">{{ item.id }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.getCollections;
    },
  },
};
</script>

<style lang="scss" scoped></style>
