<template>
  <div class="filter__container">
    <div class="filter__view__container">
      <div class="filter__view__wrapper">
        <p class="filter__view__text">view</p>
        <a class="filter__view__btn" id="twoCol">2</a>
        <a class="filter__view__btn" id="fourCol">4</a>
        <p class="filter__view__separator">|</p>
      </div>
      <div class="filter__openner__container">
        <div :class="{ hide: panelOpen }">
          <i class="filter__openner__plus fas fa-plus"></i>
        </div>
        <div :class="{ hide: !panelOpen }">
          <i class="filter__openner__minus fas fa-minus"></i>
        </div>
        <a
          id="filter__openner__btn"
          class="filter__openner__btn"
          @click="expandPanel"
          :class="{ selected: panelOpen, expand: panelOpen }"
        >
          filters
          <span class="filter__openner__selectedNumber">(1)</span>
        </a>
        <div class="filter__openner__separator"></div>
        <a id="clearFilter" class="filter__openner__clear" v-if="panelOpen"
          >clear</a
        >
      </div>
    </div>
    <div class="filter__panel__container" :class="{ panelOpen: panelOpen }">
      <ul class="filter__panel__wrapper">
        <li
          class="filter__panel__list"
          v-for="filter in filters"
          :key="filter.id"
        >
          <h4 class="filter__panel__name">{{ filter.title }}</h4>
          <ul class="filter__panel__type__wrapper">
            <li
              class="filter__panel__type__list"
              v-for="item in filter.items"
              :key="item.id"
              :class="{ selected: item.selected }"
            >
              <label class="filter__panel__type__label"
                >{{ item.name }}
                <input
                  type="checkbox"
                  class="filter__panel__type__checkbox"
                  v-model="item.selected"
                />
                <p v-if="item.selected" class="filter__panel__type__checkmark">
                  <i class="fas fa-check"></i>
                </p>
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["panelOpen"],
  data() {
    return {
      selectedLength: "",
      filters: [
        {
          title: "size",
          items: [
            { name: "xs", selected: false },
            { name: "s", selected: false },
            { name: "m", selected: false },
            { name: "l", selected: false },
            { name: "xl", selected: false },
          ],
        },
        {
          title: "color",
          items: [
            { name: "beige", selected: false },
            { name: "black", selected: false },
            { name: "blue", selected: false },
            { name: "brown", selected: false },
            { name: "ecru", selected: false },
          ],
        },
        {
          title: "collection",
          items: [
            { name: "basic", selected: false },
            { name: "ladies", selected: false },
            { name: "trf", selected: false },
          ],
        },
        {
          title: "characteristics",
          items: [
            { name: "accessories", selected: false },
            { name: "dresses", selected: false },
            { name: "handbags", selected: false },
            { name: "jackets", selected: false },
            { name: "jeans", selected: false },
            { name: "knitwear", selected: false },
          ],
        },
        {
          title: "price",
          items: [
            { name: "1,000 THB", selected: false },
            { name: "2,000 THB", selected: false },
            { name: "3,000 THB", selected: false },
            { name: "4,000 THB", selected: false },
            { name: "5,000 THB", selected: false },
          ],
        },
      ],
    };
  },
  methods: {
    navIsHover() {
      this.$store.commit("NAV_IS_HOVER");
    },
    navNotHover() {
      this.$store.commit("NAV_NOT_HOVER");
    },
    expandPanel() {
      this.$emit("panelOpening");
    },
    // countSelected() {
    //   return this.filters(filter =>
    //     filter.items.forEach(item => (item.selected = true))
    //   ).length;
    // },
  },
  computed: {
    isNavHover() {
      return this.$store.getters.getNavHover;
    },

  },
};
</script>

<style lang="scss" scoped>
.filter {
  &__container {
    grid-column: 1/-1;
    justify-self: end;
    margin-right: 40px;
    position: sticky;
    top: 103px;
    text-transform: uppercase;
    // padding-bottom: 12px;
    // margin-bottom: 12px;
    transition: background-color 0.3s;
    &.hover {
      background-color: white;
    }
  }
  &__view {
    &__container {
      display: flex;
      justify-content: flex-end;

      @media only screen and (max-width: 56.25em) {
        top: 0;
        padding-bottom: 0;
      }

      & * {
        display: inline-block;
        font-size: 12px;
        margin: 0;
      }
    }

    &__wrapper {
      & * {
        margin-left: 18px;
      }
    }
  }

  &__openner {
    &__container {
      margin-left: 16px;
    }
    &__plus,
    &__minus {
      font-size: 9px;
    }
    &__btn {
      margin-left: 5px;
      cursor: pointer;
      transition: margin 0.3s;

      &.expand {
        margin-right: 188px;
      }
    }
  }
  &__panel {
    &__container {
      padding: 52px 24px 24px 48px;
      min-width: 338px;
      background-color: white;
      position: fixed;
      right: 0;
      top: 110px;

      transition: transform 0.3s;
      transform: translateX(100%);
      height: 87.3vh;
      overflow-y: auto;
      overscroll-behavior: contain;
      text-align: left;

      // @media only screen and (max-width: 56.25em) {
      //   top: 100px;
      // }

      &.panelOpen {
        transform: translateX(0);
      }
    }
    &__list {
      margin-bottom: 40px;
    }
    &__name {
      font-size: 16px;
      font-weight: 700;
    }
    &__type {
      &__list {
        margin-top: 1.6rem;
      }

      &__label {
        font-size: 12px;

        display: flex;
        justify-content: space-between;
      }
      &__checkbox {
        display: none;
      }
      &__checkmark {
        font-size: 12px;
        margin: 0;
      }
    }
  }
}
.selected {
  font-weight: 700;
}
.hide {
  display: none;
}
</style>
