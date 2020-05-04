<template>
  <div class="info__page">
    <div class="info__content">
      <router-view></router-view>
    </div>
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

<style lang="scss" scoped>
.info {
  &__content {
    // width: 50%;
    // margin: 0 auto;
    text-align: left;

    padding-top: 50px;
    min-height: 530px;
    padding-left: 368px;
    padding-right: 32px;
  }
}
</style>
