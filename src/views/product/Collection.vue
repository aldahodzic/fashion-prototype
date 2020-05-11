<template>
  <section class="collection__container">
    <div class="collection__banner__container">
      <img
        class="collection__banner__img"
        :src="require(`@/assets/img/${banner}`)"
      />
    </div>
    <div class="collection__products__container">
      <ul class="collection__products__wrapper"
      
      >
        <li
          class="collection__products__list"
          v-for="product in collections"
          :key="product.id"
          :class="{ double: product.isDouble }"
        >
          <div class="collection__prodcuts__media__container">
            <router-link
              :to="{ name: 'item', params: { id: product.id } }"
              tag="a"
              class="collection__products__media__link"
              :class="{ twoImg: product.twoImg }"
            >
              <img
                class="collection__products__media__img"
                :src="require(`@/assets/img/${product.images[0]}`)"
                :alt="product.name"
              />
              <img
                class="collection__products__media__img"
                :src="require(`@/assets/img/${product.images[1]}`)"
                :alt="product.name"
                v-if="product.twoImg"
              />
            </router-link>
          </div>
          <div class="collection__products__info__container">
            <div class="collection__products__info__status__container">
              <!-- <span class="collection__products__info__status__new"
                >new</span
              > -->
              <span
                class="collection__products__info__status__sale"
                v-if="product.price.sale"
                >{{ product.price.discount }}% off</span
              >
            </div>
            <div class="collection__products__info__name__container">
              <router-link
                :to="{ name: 'item', params: { id: product.id } }"
                tag="a"
                class="collection__products__info__name__link"
                >{{ product.name }}</router-link
              >
            </div>
            <div class="collection__products__info__price__container">
              <span
                class="collection__products__info__price__tag"
                :class="{ cut: product.price.sale }"
                >{{ numberFormat(product.price.tag) }} THB</span
              >
              <span class="collection__products__info__price__sale"
                >{{ numberFormat(product.price.sale) }} THB</span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      banner: "itemBanner.jpg",
    };
  },

  methods: {
    numberFormat(number) {
      return Intl.NumberFormat().format(number);
    },
  },
  computed: {
    collections() {
      return this.$store.getters.getCollections;
    },
  },
};
</script>

<style lang="scss" scoped>
.collection {
  &__banner {
    &__container {
      max-width: 1188px;
      margin: 0 auto 15rem;

      // @media only screen and (max-width: 56.25em) {
      //   margin-bottom: 2rem;
      // }
    }

    &__img {
      width: 100%;
    }
  }

  &__products {
    &__container {
      padding-left: 16px;
      padding-right: 16px;
    }
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 10px;
      align-items: end;

      @media only screen and (max-width: 56.25em) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 15px;
      }
    }
    &__list {
      text-align: left;

      &.double {
        grid-column: span 2;
        text-align: center;

        & img {
          width: 50%;
          @media only screen and (max-width: 56.25em) {
            width: 100%;
          }
        }

        & .twoImg img {
          width: 100%;
        }
      }
    }
    &__media {
      &__link {
        display: flex;
        justify-content: center;

        &.twoImg {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 30px;
        }
      }
      &__img {
        width: 100%;
        height: auto;
      }
    }
    &__info {
      &__container {
        margin-top: 2rem;
        margin-bottom: 3rem;
        font-size: 1.4rem;
      }
      &__status {
        &__container {
          font-size: 1.6rem;
          font-weight: 700;
          text-transform: uppercase;
        }
      }
      &__name {
        &__link {
          &:hover {
            text-decoration: underline;
          }
        }
      }
      &__price {
        &__tag {
          margin-right: 8px;
          &.cut {
            text-decoration: line-through;
          }
        }
        &__sale {
          color: red;
        }
      }
    }
  }
}
</style>
