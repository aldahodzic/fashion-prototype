<template>
  <div
    class="sidebar"
    :class="{ expand: menuHover }"
    @mouseenter="menuHover = true"
    @mouseleave="menuHover = false"
  >
    <h1>sideBar</h1>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      menuHover: false
    };
  },

  created() {
    eventBus.$on("munuHoverUpdate", menuUpdate => {
      this.menuHover = menuUpdate;
    });
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  min-width: 300px;
  max-width: 400px;
  height: 100%;
  background-color: white;
  left: -400px;
  top: 0;
  padding: 80px 30px 0 30px;
  z-index: 20;
  transition: left 0.5s;

  text-transform: uppercase;
}

.expand {
  left: 0;
}
</style>
