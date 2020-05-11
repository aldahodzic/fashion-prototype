<template>
  <section class="info__section">
    <div class="info__container">
      <header>
        <h1 class="info__name">{{ name }}</h1>
      </header>
      <div class="info__price__container">
        <span class="info__price__tag" :class="{ cut: price.sale }"
          >{{ numberFormat(price.tag) }} THB</span
        >
        <span class="info__price__sale" v-if="price.sale"
          >{{ numberFormat(price.sale) }} THB</span
        >
        <span class="info__price__discount-percentage" v-if="price.discount"
          >-{{ price.discount }}%</span
        >
      </div>
      <div class="info__detail__container">
        <p class="info__detail__color">
          <span class="info__detail__color__name">{{ details.color }}</span> -
          <span class="info__detail__color__preference">{{
            details.preference
          }}</span>
        </p>
        <p class="info__detail__description">
          {{ details.description }}
        </p>

        <form class="info__size__container">
          <fieldset>
            <div class="info__size__selector">
              <div
                class="info__size__list"
                v-for="size in sizes"
                :key="size.id"
                v-show="!sizeCollapse || size.sizeName == sizePicked.size"
              >
                <input
                  type="radio"
                  class="info__size__radio"
                  name="size"
                  :id="`${id}-size-${size.sizeName}`"
                  :disabled="!size.inStock"
                  v-model="sizePicked"
                  :value="{ id: id, size: size.sizeName }"
                  @click="sizeCollapse = !sizeCollapse"
                />
                <label
                  :for="`${id}-size-${size.sizeName}`"
                  class="info__size__label"
                  :class="{ outOfStock: !size.inStock }"
                  >{{ size.sizeName }}</label
                >
              </div>
            </div>
            <div class="info__size__guide">
              <a class="info__size__guide__link">Size guide</a>
            </div>
          </fieldset>
          <div class="addCart__container">
            <button
              class="addCart__btn btn-main"
              @click.stop.prevent="addToCart"
            >
              add
            </button>
          </div>
        </form>

        <div class="info__misc__container">
          <ul class="info__misc__wrapper">
            <li class="info__misc__list">
              <i class="fas fa-caret-right"></i
              ><a href="" class="info__misc__list__link"
                >Composition and care</a
              >
            </li>
            <li class="info__misc__list">
              <i class="fas fa-caret-right"></i
              ><a href="" class="info__misc__list__link"
                >Check in-store availability</a
              >
            </li>
            <li class="info__misc__list">
              <i class="fas fa-caret-right"></i
              ><a href="" class="info__misc__list__link"
                >Delivery, Exchanges and Returns</a
              >
            </li>
            <li class="info__misc__list">
              <i class="fas fa-caret-right"></i
              ><a href="" class="info__misc__list__link">Share</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="modal__container" v-show="modalShow" @click="modalShow = false">
      <div class="modal__box">
        <i class="fas fa-exclamation modal__icon"></i>
        <h3 class="modal__warning">WARNING</h3>
        <p class="modal__prompt">
          {{ prompt }}
        </p>
        <button
          type="button"
          class="modal__btn btn-main"
          @click="modalShow = false"
        >
          ACCEPT
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id", "name", "price", "details", "sizes"],
  data() {
    return {
      sizePicked: "",
      sizeCollapse: false,
      modalShow: false,
      prompt: "you must select a size",
    };
  },
  methods: {
    numberFormat(number) {
      return Intl.NumberFormat().format(number);
    },

    addToCart() {
      if (!this.sizePicked) {
        this.modalShow = true;
      } else {
        this.$store.commit("ADD_TO_CART", [
          this.sizePicked.id,
          this.sizePicked.size,
        ]);
      }
    },
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
    cartNum() {
      return this.$store.getters.getCartNum;
    },
  },
};
</script>

<style lang="scss">
.outOfStock {
  cursor: default;
  color: #ccc;
  &:hover {
    background-color: inherit !important;
  }
}
</style>

<style lang="scss" scoped>
.info {
  &__section {
    padding-top: 56px;
  }
  &__container {
    width: 28vw;
    margin: 0 auto;
    position: sticky;
    top: 161px;
    text-align: left;

    // @media only screen and (max-width: 56.25em) {
    //   width: 100%;
    //   padding-right: 10px;
    //   padding-left: 10px;
    // }
  }
  &__name {
    font-size: 3.2rem;
    font-weight: 700;
    margin: 0;
  }
  &__price {
    &__container {
      font-size: 2rem;
      display: inline-flex;
      flex-wrap: wrap;
      justify-self: start;
      padding-bottom: 20px;
      margin-top: 0;
      align-items: center;
    }

    &__tag {
      margin-right: 8px;

      &.cut {
        text-decoration: line-through;
      }
    }

    &__sale {
      color: red;
      margin-right: 8px;
    }
    &__discount {
      &-percentage {
        font-size: 11px;
        letter-spacing: 0.2px;
        border: 1px solid #000;
        font-weight: 400;
        line-height: 12px;
        padding: 3px 0 1px;
        text-align: center;
        width: 35px;
        height: min-content;
      }
    }

    &__detail {
      font-size: 1.6rem;
    }
  }

  &__size {
    &__container {
      margin-bottom: 40px;
    }
    &__selector {
      display: block;
      margin-top: 16px;

      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      display: flex;
      flex-direction: column;
      padding: 0;
      width: 100%;
      overflow-y: auto;
    }

    &__radio {
      display: none;
    }

    &__label {
      cursor: pointer;
      padding: 12px 8px;
      min-height: 16px;
      font-size: 1.4rem;
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin: 0;

      &:hover {
        background-color: #efefef;
      }
    }

    &__radio:checked + &__label {
      font-weight: 700;
    }

    &__guide {
      padding-top: 12px;
      // padding-bottom: 8px;
      padding-bottom: 12px;

      &__link {
        width: 100%;
        display: block;
        background-color: transparent;
        border: 0;
        cursor: pointer;
        font-size: 12px;
        text-transform: none;
        text-align: right;
      }
    }
  }
  &__misc {
    &__wrapper {
      list-style-type: none;
    }
    &__list {
      display: block;
      padding: 0 0 0 12px;
      margin-bottom: 16px;

      &__link {
        font-size: 1.4rem;
        margin-left: 4px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.addCart {
  &__btn {
    width: 100%;
  }
}
</style>
