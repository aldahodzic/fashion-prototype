<template>
  <footer class="footerTwo">
    <hr />
    <nav class="footerTwo__menus-box">
      <ul class="footerTwo__menus-wrapper">
        <li
          class="footerTwo__menus-list"
          v-for="utility in utilities"
          :key="utility.id"
        >
          <a class="footerTwo__menus-link">
            {{ utility.name }}
          </a>
          <ul class="footerTwo__menus__sub-wrapper">
            <router-link
              tag="li"
              class="footerTwo__menus__sub-list"
              v-for="sub in utility.subs"
              :key="sub.id"
              :to="sub.link"
            >
              <a class="footerTwo__menus__sub-link">{{ sub.name }}</a>
            </router-link>
          </ul>
        </li>
      </ul>
    </nav>
    <hr />
    <div class="footerTwo__languages">
      <div class="footerTwo__languages__countries">
        <p class="footerTwo__languages__countries-country">thailand</p>
      </div>
      <div class="footerTwo__languages__language">
        <p class="footerTwo__languages__language-name">ไทย</p>
        |
        <p class="footerTwo__languages__language-name">english</p>
      </div>
    </div>
    <div class="footerTwo__itemscopAndCopyright">
      <div class="footerTwo__itemscopAndCopyright__page">
        <p class="footerTwo__itemscopAndCopyright__page-site">
          noproblemfashion
        </p>
        /
        <p class="footerTwo__itemscopAndCopyright__page-current">
          {{ this.$route.name }}
        </p>
      </div>
      <div class="footerTwo__itemscopAndCopyright__copyright">
        <p class="footerTwo__itemscopAndCopyright__copyright-text">
          © All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    utilities() {
      return this.$store.getters.getUtilities;
    },
  },
};
</script>

<style lang="scss" scoped>
.footerTwo {
  padding: 0 0 30px;
  margin-left: 285px;
  margin-right: 40px;
  margin-top: 200px;

  &__menus {
    &-box {
      margin: 50px auto;
      width: 62.5vw;
    }

    &-wrapper {
      margin: 40px 0;
      line-height: 16px;
      padding: 0;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    &-list {
      text-align: left;
      font-size: 1.8rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    &-link {
    }

    &__sub {
      &-wrapper {
        margin-top: 24px;
      }
      &-list {
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 16px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  &__languages {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-top: 100px;
    &__language {
      &-name {
        display: inline;
      }
    }
  }
  &__itemscopAndCopyright {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    &__page {
      font-weight: 700;
      text-transform: uppercase;

      &-site,
      &-current {
        display: inline;
      }
    }
    &__copyright {
      font-size: 1.4rem;
    }
  }
}
</style>
