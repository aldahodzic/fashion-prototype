<template>
  <div id="app">
    <TopNav></TopNav>
    <SideBar></SideBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    TopNav,
    SideBar,
    Footer,
  },
};
</script>

<style lang="scss">
// MEDIA QUERY MANAGER
/*
0 - 600px:      Phone
600 - 900px:    Tablet portrait
900 - 1200px:   Tablet landscape
[1200 - 1800] is where our normal styles apply
1800px + :      Big desktop

$breakpoint arguement choices:
- phone
- tab-port
- tab-land
- big-desktop

ORDER: Base + typography > general layout + grid > page layout > components

1em = 16px
*/
@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    @media only screen and (max-width: 37.5em) {
      @content;
    } //600px
  }
  @if $breakpoint == tab-port {
    @media only screen and (max-width: 56.25em) {
      @content;
    } //900px
  }
  @if $breakpoint == tab-land {
    @media only screen and (max-width: 75em) {
      @content;
    } //1200px
  }
  @if $breakpoint == big-desktop {
    @media only screen and (min-width: 112.5em) {
      @content;
    } //1800
  }
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  // This defines what 1rem is
  font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

  @include respond(tab-land) {
    // width < 1200?
    font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
  }

  @include respond(tab-port) {
    // width < 900?
    font-size: 50%; //1 rem = 8px, 8/16 = 50%
  }

  @include respond(big-desktop) {
    font-size: 75%; //1rem = 12, 12/16
  }
}

body {
  box-sizing: border-box;

  @include respond(tab-port) {
  }
}

#app {
  font-family: "Prompt", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a,
a:active {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: none;
  color: black;
}

ul,
ol {
  list-style-type: none;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

.header span {
  font-weight: 700;
}
</style>
