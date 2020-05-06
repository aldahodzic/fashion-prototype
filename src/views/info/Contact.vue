<template>
  <section class="contact__container">
    <h1 class="contact__header">customer service</h1>
    <h3 class="contact__header">Store and company</h3>
    <p class="contact__para">
      Enquiries about our stores (organisation and services)
    </p>
    <ul class="contact__wrapper">
      <li class="contact__list">
        <div class="contact__name__box" @click="emailUnfold = !emailUnfold">
          <i class="contact__name__icon far fa-envelope"></i>
          <h2 class="contact__name__name">EMAIL</h2>
          <div class="contact__name__fold__wrapper">
            <i
              class="contact__name__fold__icon fas fa-minus"
              v-show="emailUnfold"
            ></i>
            <i
              class="contact__name__fold__icon fas fa-plus"
              v-show="!emailUnfold"
            ></i>
          </div>
        </div>
        <div class="contact__send__box" v-show="emailUnfold">
          <button class="contact__send__btn btn-second">Send</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      emailUnfold: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  &__container {
    h1 {
      font-size: 32px;
      letter-spacing: 0.3px;
      font-stretch: condensed;
      font-weight: 700;
      text-transform: uppercase;
      padding-top: 20px;
      margin-bottom: 50px;
    }
    h3 {
      text-transform: none;
      border: none;
      font-size: 22px;
      letter-spacing: 0.3px;
      font-weight: 700;
      margin-bottom: 9px;
    }
  }
  &__wrapper {
    border-top: 1px solid #ccc;
    width: 50%;
  }
  &__list {
    border-bottom: 1px solid #ccc;
  }
  &__name {
    &__box {
      display: grid;
      grid-template-columns: 10% 80% 10%;
      justify-items: start;
      align-items: center;
      height: 70px;
      cursor: pointer;
    }
    &__icon {
      font-size: 30px;
    }

    &__name {
      font-size: 16px;
      margin: 0;
    }
    &__fold {
      &__wrapper {
        justify-self: end;
      }
      &__icon {
        font-size: 20px;
        display: block;
      }
    }
  }

  &__send {
    &__box {
      grid-column: 1/3;
      padding-right: 16px;
      padding-left: 40px;
      display: flex;
      justify-content: flex-end;
    }
    &__btn {
      text-transform: none;
      font-size: 14px;
      min-width: 180px;
      margin-bottom: 25px;
    }
  }
}
</style>
