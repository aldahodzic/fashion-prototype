<template>
  <div class="swiper-slide secondItem__swiper__slide">
    <router-link :to="`/item/${id}`" tag="a" class="secondItem__swiper__link">
      <img
        class="secondItem__swiper__img"
        :src="require(`@/assets/img/${image}`)"
        :alt="name"
      />
    </router-link>
    <div class="secondItem__swiper__info">
      <span class="secondItem__swiper__info__name">{{ name }}</span>
      <div class="secondItem__swiper__info__price">
        <span class="secondItem__swiper__info__price__tag cut"
          >{{ price.tag }} THB</span
        >
        <span class="secondItem__swiper__info__price__sale"
          >{{ price.sale }} THB</span
        >
        <span class="secondItem__swiper__info__price__discount-percentage"
          >-{{ price.discount }}%</span
        >
      </div>
      <div class="secondItem__swiper__info__size">
        <form class="secondItem__swiper__info__size__container">
          <fieldset
            class="secondItem__swiper__info__size__fieldset"
            v-show="sizeShow"
          >
            <div
              class="secondItem__swiper__info__size__list"
              v-for="size in sizes"
              :key="size.id"
            >
              <input
                type="radio"
                class="secondItem__swiper__info__size__radio"
                name="size"
                :id="`${id}-size-${size.sizeName}`"
                :disabled="!size.inStock"
                v-model="sizePicked"
                :value="{ id: id, size: size.sizeName }"
                @click="sizeShow = !sizeShow"
              />
              <label
                class="secondItem__swiper__info__size__label"
                :for="`${id}-size-${size.sizeName}`"
                :class="{ outOfStock: !size.inStock }"
                >{{ size.sizeName }}</label
              >
            </div>

            <div class="secondItem__swiper__info__size__guide">
              <a href="" class="secondItem__swiper__info__size__guide__link"
                >Size guide</a
              >
            </div>
          </fieldset>

          <div
            class="secondItem__swiper__info__size__selected"
            @click="sizeShow = !sizeShow"
            @blur="sizeShow = false"
          >
            <div
              class="secondItem__swiper__info__size__result"
              v-if="!sizePicked"
            >
              <span class="secondItem__swiper__info__size__placeholder"
                >Choose a size</span
              >
              <i class="fas fa-sort-down"></i>
            </div>
            <div class="secondItem__swiper__info__size__result" v-else>
              <p class="secondItem__swiper__info__size__picked">
                {{ sizePicked.size }}
              </p>
            </div>
          </div>
          <div class="secondItem__swiper__info__size__addCart">
            <button
              class="secondItem__swiper__info__size__addCart__btn"
              @click.stop.prevent="addToCart"
            >
              add
            </button>
          </div>
        </form>
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
  </div>
</template>

<script>
export default {
  props: ["image", "id", "name", "price", "sizes"],
  data() {
    return {
      sizePicked: "",
      sizeShow: false,
      modalShow: false,
      prompt: "you must select a size",
    };
  },
  methods: {
    addToCart() {
      if (!this.sizePicked) {
        this.modalShow = true;
      } else {
        console.log(`${this.sizePicked.id} add to cart`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.secondItem {
  &__swiper {
    &__slide {
      max-width: 525.429px;
      margin-right: 16px;
    }
    &__link {
      width: 100%;
    }
    &__img {
      width: 100%;
    }

    &__info {
      font-size: 1.6rem;
      text-align: left;
      padding-top: 20px;

      &__price {
        font-size: 1.6rem;

        display: flex;
        flex-wrap: wrap;
        justify-self: start;
        padding-bottom: 16px;
        margin-top: 0;
        align-items: center;

        &__tag {
          margin-right: 8px;
        }
        &__sale {
          color: red;
          margin-right: 8px;
        }

        &__discount-percentage {
          font-size: 1.1rem;
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

      &__size {
        &__container {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 25%;
          position: relative;
          column-gap: 20px;
        }

        &__fieldset {
          position: absolute;
          border: 1px solid black;
          background-color: white;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0 12px;
        }

        &__list {
        }

        &__radio {
          display: none;
        }

        &__label {
          font-size: 1.4rem;
          cursor: pointer;
          display: flex;
          height: 100%;
          padding: 12px 0 12px 8px;
          margin: 0;

          &:hover {
            background-color: #efefef;
          }
        }

        &__radio:checked + &__label {
          font-weight: 700;
        }

        &__guide {
          padding: 12px;
          text-align: right;
          border-top: 1px solid #000;

          &__link {
            font-size: 12px;
            text-transform: none;
            width: 100%;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        &__selected {
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
          cursor: pointer;
          grid-column: 1/2;
        }
        &__result {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 1.5rem;
          height: 100%;
        }
        &__placeholder {
          text-transform: none;
          font-size: 1.4rem;
          line-height: 22px;
        }
        &__picked {
          margin: 0 12px;
          font-weight: 700;
        }

        &__addCart {
          grid-column: 2/3;
          display: flex;
          &__btn {
            font-weight: 700;
            background-color: #fff;
            border: 1px solid #000;
            line-height: 20px;
            outline: 0;
            padding: 10px 16px;
            text-transform: uppercase;
            white-space: nowrap;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
