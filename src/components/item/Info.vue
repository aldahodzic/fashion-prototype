<template>
  <section class="info__section">
    <div class="info__container">
      <header>
        <h1 class="info__name">TWISTED KNIT SWEATER</h1>
      </header>
      <div class="info__price__container">
        <span class="info__price__tag cut">890 THB</span>
        <span class="info__price__sale">250 THB</span>
        <span class="info__price__discount-percentage">-70%</span>
      </div>
      <div class="info__detail__container">
        <p class="info__detail__color">
          <span class="info__detail__color__name">Anthracite grey</span> -
          <span class="info__detail__color__preference">3284/762</span>
        </p>
        <p class="info__detail__description">
          Long sleeve twist knit sweater featuring a high neck with decorative
          cords.
        </p>

        <form class="info__size__container">
          <fieldset>
            <div class="info__size__selector">
              <div class="info__size__list">
                <input
                  type="radio"
                  class="info__size__radio"
                  name="size"
                  id="size-xs"
                />
                <label for="size-xs" class="info__size__label">xs</label>
              </div>
              <div class="info__size__list">
                <input
                  type="radio"
                  class="info__size__radio"
                  name="size"
                  id="size-s"
                />
                <label for="size-s" class="info__size__label">s</label>
              </div>
              <div class="info__size__list">
                <input
                  type="radio"
                  class="info__size__radio"
                  name="size"
                  id="size-m"
                />
                <label for="size-m" class="info__size__label">m</label>
              </div>
              <div class="info__size__list">
                <input
                  type="radio"
                  class="info__size__radio"
                  name="size"
                  id="size-l"
                />
                <label for="size-l" class="info__size__label">l</label>
              </div>
              <div class="info__size__list">
                <input
                  type="radio"
                  class="info__size__radio"
                  name="size"
                  id="size-xl"
                />
                <label for="size-xl" class="info__size__label">xl</label>
              </div>
            </div>
            <div class="info__size__guide">
              <a class="info__size__guide__link">Size guide</a>
            </div>
          </fieldset>
          <div class="addCart__container">
            <button class="addCart__btn btn-main">add</button>
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
  </section>
</template>

<script>
export default {};
</script>

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
      font-size: 1.8rem;
      display: flex;
      align-items: flex-start;
      width: 100%;

      &:hover {
        background-color: #efefef;
      }
    }

    &__guide {
      padding-top: 12px;
      padding-bottom: 8px;

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
