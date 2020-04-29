<template>
  <div>
    <router-view></router-view>
    <FooterTwo></FooterTwo>
  </div>
</template>

<script>
import FooterTwo from "@/components/FooterTwo.vue";
export default {
  components: {
    FooterTwo,
  },
};
</script>

<style lang="scss" scoped></style>
