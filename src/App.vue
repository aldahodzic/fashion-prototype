<template>
  <div id="app">
    <TopNav></TopNav>
    <SideBar></SideBar>
    <router-view />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    TopNav,
    SideBar,
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
  color: black;
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
  margin: 0;
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
p {
  font-size: 1.4rem;
}

.header span {
  font-weight: 700;
}

input[type="checkbox"][class$="__input"] {
  display: none;
  position: absolute;
}
label[class$="__label"] {
  display: block;
}
span[class$="__checkbox"] {
  height: 16px;
  width: 16px;
  border: 1px solid black;
  margin-right: 8px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}

[class$="__checkbox-icon"] {
  font-size: 15px;
  opacity: 0;
  position: absolute;
  left: 0;
}

input[type="checkbox"][class$="__input"]:checked
  + label[class$="__label"]
  span[class$="__checkbox"]
  [class$="__checkbox-icon"] {
  opacity: 1;
}

.btn {
  &-main {
    display: inline-block;
    outline: none;
    cursor: pointer;
    text-align: center;
    border-radius: ".5em";
    border: none;
    font-size: 16px;
    height: 40px;
    min-width: 165px;
    width: auto;
    letter-spacing: 0.2px;
    font-stretch: condensed;
    font-weight: 700;
    background-color: black;
    border: 1px solid black;
    color: white;
    position: relative;
    text-transform: uppercase;

    &:hover {
      background-color: #cccccc;
      border: 1px solid white;
      outline-color: white;
    }
  }
}

.modal {
  &__container {
    background-color: rgba(255, 255, 255, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  &__box {
    border: 1px solid #cccc;
    background-color: white;
    z-index: 501;
    padding: 30px;
    width: 400px;
  }

  &__icon {
    font-size: 20px;
    margin: 0 auto 25px;
  }

  &__warning {
    margin-bottom: 25px;
    font-size: 18px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }
  &__prompt {
    margin-bottom: 1em;
    font-size: 1.2rem;
    white-space: pre;
  }
}
</style>
