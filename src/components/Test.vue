<template>
  <div>
    <p
      ref="datas"
      v-for="data in datas"
      :key="data.id"
      :value="data"
      @click="turnRed(data)"
    >
      {{ data }}
    </p>
    <button @click="allRed">All Red</button>
    <p ref="red" @click="goRed">Red</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: ["one", "two", "tree"],
    };
  },
  methods: {
    turnRed(data) {
      console.log(data);
      console.log(typeof this.$refs.data);
    },
    goRed() {
      this.$refs.red.style.color = "red";
      console.log(typeof this.$refs.red);
    },
    allRed() {
      this.$refs.datas.style.color = "red";
    },
  },
};
</script>

<style lang="scss" scoped></style>
