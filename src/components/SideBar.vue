<template>
  <div
    id="nav"
    class="sidebar"
    :class="{ expand: menuHover }"
    @mouseenter="menuHover = true"
    @mouseleave="menuHover = false"
  >
    <ul class="sidebar__menu__level1-wrapper">
      <li
        class="sidebar__menu__level1-list"
        v-for="level1 in sidebars"
        :key="level1.id"
      >
        <a
          :href="level1.link"
          class="sidebar__menu__level1-link"
          @click.prevent="levelSelected(sidebars, level1)"
        >
          {{ level1.name }}
        </a>
        <ul
          class="sidebar__menu__level2-wrapper"
          v-if="level1.level2"
          :class="{ sidebarExpand: level1.selected }"
        >
          <li
            class="sidebar__menu__level2-list"
            v-for="level2 in level1.level2"
            :key="level2.id"
          >
            <a
              :href="level2.link"
              class="sidebar__menu__level2-link"
              @click.prevent="levelSelected(level1.level2, level2)"
              :class="{ sidebarBold: level2.selected }"
              >{{ level2.name }}</a
            >
            <ul
              class="sidebar__menu__level3-wrapper"
              v-if="level2.level3"
              :class="{ sidebarExpand: level2.selected }"
            >
              <li
                class="sidebar__menu__level3-list"
                v-for="level3 in level2.level3"
                :key="level3.id"
              >
                <a
                  :href="level3.link"
                  class="sidebar__menu__level3-link"
                  @click.prevent="levelSelected(level2.level3, level3)"
                  :class="{ sidebarBold: level3.selected }"
                  >{{ level3.name }}</a
                >
                <ul
                  class="sidebar__menu__level4-wrapper"
                  v-if="level3.level4"
                  :class="{ sidebarExpand: level3.selected }"
                >
                  <li
                    class="sidebar__menu__level4-list"
                    v-for="level4 in level3.level4"
                    :key="level4.id"
                  >
                    <a
                      :href="level4.link"
                      class="sidebar__menu__level4-link"
                      @click.prevent="levelSelected(level3.level4, level4)"
                      :class="{ sidebarBold: level4.selected }"
                      >{{ level4.name }}</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="sidebar__info__level1-wrapper" v-if="info">
      <li
        class="sidebar__info__level1-list"
        v-for="level1 in info"
        :key="level1.id"
      >
        <a
          class="sidebar__info__level1-link"
          @click="levelSelected(info, level1)"
          >{{ level1.name }}</a
        >
        <ul
          class="sidebar__info__level2-wrapper"
          v-if="level1.level2"
          :class="{ sidebarExpand: level1.selected }"
        >
          <router-link
            class="sidebar__info__level2-list"
            v-for="level2 in level1.level2"
            :key="level2.id"
            :to="level2.link"
            tag="ul"
          >
            <a
              :href="level2.link"
              class="sidebar__info__level2-link"
              @click="levelSelected(level1.level2, level2)"
              :class="{ sidebarBold: level2.selected }"
              >{{ level2.name }}</a
            >
          </router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      menuHover: false,
    };
  },
  created() {
    eventBus.$on("munuHoverUpdate", menuUpdate => {
      this.menuHover = menuUpdate;
    });
  },
  methods: {
    levelSelected(sameLevel, thisLevel) {
      sameLevel.forEach(level => {
        if (level != thisLevel) {
          level.selected = false;
        } else {
          thisLevel.selected = !thisLevel.selected;
        }
      });
    },
  },
  computed: {
    sidebars() {
      return this.$store.getters.getSidebars;
    },
    info() {
      return this.$store.getters.getInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  min-width: 300px;
  max-width: 420px;
  height: 100%;
  background-color: white;
  left: -400px;
  top: 0;
  padding: 80px 45px 0 30px;
  z-index: 20;
  transition: left 0.5s;
  text-transform: uppercase;
  text-align: left;
  overflow: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;

  &__menu {
    &__level1 {
      &-list {
        &:last-child {
          margin-top: 32px;
        }
      }
      &-link {
        font-size: 3.8rem;
        letter-spacing: 0.4px;
        line-height: 44px;
        font-weight: 700;
      }
    }

    &__level2 {
      &-wrapper {
        margin: 24px 0 62px;
        display: none;
      }

      &-list {
        margin-bottom: 6px;

        &:first-child {
          margin-bottom: 24px;
        }
      }
      &-link {
        font-size: 2.2rem;
        letter-spacing: 0.3px;
        line-height: 24px;
      }
    }

    &__level3 {
      &-wrapper {
        margin: 12px 0;
        display: none;
      }

      &-list {
        margin-bottom: 6px;
      }
      &-link {
        font-size: 1.5rem;
        line-height: 14px;
        text-align: left;
      }
    }
    &__level4 {
      &-wrapper {
        margin: 12px 0;
        display: none;
      }
      &-list {
        font-size: 1.5rem;
        line-height: 14px;
        margin-bottom: 6px;
        text-transform: capitalize;
      }
    }
  }

  &__info {
    &__level1 {
      &-wrapper {
        margin-top: 100px;
      }
      &-link {
        font-size: 1.6rem;
        cursor: pointer;
      }
    }
    &__level2 {
      &-wrapper {
        margin: 30px 0;
        display: none;
      }

      &-list {
        margin-bottom: 10px;
      }
      &-link {
        font-size: 1.6rem;
      }
    }
  }
}

.expand {
  left: 0;
}

.sidebarExpand {
  display: block;
}
.sidebarBold {
  font-weight: 700;
}
</style>
