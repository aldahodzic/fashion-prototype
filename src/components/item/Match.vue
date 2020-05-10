<template>
  <section class="match__section">
    <div class="match__container">
      <h1 class="match__header">match with</h1>
      <p class="match__count">3 items</p>
    </div>
    <div class="swiper-container match__swiper__container">
      <div class="swiper-wrapper match__swiper__wrapper">
        <div
          class="swiper-slide match__swiper__slide"
          v-for="image in images"
          :key="image.id"
        >
          <a class="match__swiper__link">
            <img
              class="match__swiper__img"
              :src="require(`@/assets/img/${image}`)"
            />
          </a>
          <div class="match__swiper__info">
            <span class="match__swiper__info__name">tweed mini skirt</span>
            <div class="match__swiper__info__price">
              <span class="match__swiper__info__price__tag cut">1,090 THB</span>
              <span class="match__swiper__info__price__sale">590 THB</span>
              <span class="match__swiper__info__price__discount-percentage"
                >-45%</span
              >
            </div>
            <div class="match__swiper__info__size">
              <form class="match__swiper__info__size__container">
                <fieldset class="match__swiper__info__size__fieldset">
                  <div class="match__swiper__info__size__list">
                    <input
                      type="radio"
                      class="match__swiper__info__size__radio"
                      name="match-size"
                      id="match-xs"
                    />
                    <label
                      for="match-xs"
                      class="match__swiper__info__size__label"
                      >xs</label
                    >
                  </div>
                  <div class="match__swiper__info__size__list">
                    <input
                      type="radio"
                      class="match__swiper__info__size__radio"
                      name="match-size"
                      id="match-s"
                    />
                    <label
                      for="match-s"
                      class="match__swiper__info__size__label"
                      >s</label
                    >
                  </div>
                  <div class="match__swiper__info__size__list">
                    <input
                      type="radio"
                      class="match__swiper__info__size__radio"
                      name="match-size"
                      id="match-m"
                    />
                    <label
                      for="match-m"
                      class="match__swiper__info__size__label"
                      >m</label
                    >
                  </div>
                  <div class="match__swiper__info__size__list">
                    <input
                      type="radio"
                      class="match__swiper__info__size__radio"
                      name="match-size"
                      id="match-l"
                    />
                    <label
                      for="match-l"
                      class="match__swiper__info__size__label"
                      >l</label
                    >
                  </div>
                  <div class="match__swiper__info__size__list">
                    <input
                      type="radio"
                      class="match__swiper__info__size__radio"
                      name="match-size"
                      id="match-xl"
                    />
                    <label
                      for="match-xl"
                      class="match__swiper__info__size__label"
                      >xl</label
                    >
                  </div>
                  <div class="match__swiper__info__size__guide">
                    <a href="" class="match__swiper__info__size__guide__link"
                      >Size guide</a
                    >
                  </div>
                </fieldset>

                <div class="match__swiper__info__size__selected">
                  <span class="match__swiper__info__size__selected__placeholder"
                    >Choose a size</span
                  >
                  <i class="fas fa-sort-down"></i>
                </div>
                <div class="match__swiper__info__size__addCart">
                  <button class="match__swiper__info__size__addCart__btn">
                    add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper/js/swiper.esm.bundle";

export default {
  data() {
    return {
      images: [
        "product/t-shirt-girl/nkg63001-yellow-corn/nkg63001-yellow-corn-0.jpg",
        "product/t-shirt-girl/nkg63001-yellow-corn/nkg63001-yellow-corn-1.jpg",
        "product/t-shirt-girl/nkg63001-yellow-corn/nkg63001-yellow-corn-2.jpg",
      ],
    };
  },
  mounted() {
    const swiperMatch = new Swiper(".swiper-container", {
      spaceBetween: 10,
      slidesPerView: "auto",
    });
    return swiperMatch;
  },
};
</script>

<style lang="scss" scoped>
.match {
  &__section {
    grid-column: 1/3;

    margin-top: 10rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
  &__container {
    grid-column: span 2;
    text-align: left;
  }
  &__header {
    font-size: 3.2rem;
  }
  &__count {
    text-transform: lowercase;
    font-size: 1.6rem;
    color: #828282;
    margin-bottom: 32px;
  }

  &__swiper {
    &__slide {
      max-width: 525.429px;
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
          grid-template-columns: 75% 25%;
          position: relative;
        }

        &__fieldset {
          position: absolute;
          border: 1px solid black;
          background-color: white;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0 12px;

          display: none;
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
          display: flex;
          justify-content: space-between;
          align-items: center;

          margin-right: 2rem;
          padding-right: 1.5rem;
          cursor: pointer;

          grid-column: 1/2;

          &__placeholder {
            text-transform: none;
            font-size: 1.4rem;
            line-height: 22px;
          }
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
