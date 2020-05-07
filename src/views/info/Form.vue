<template>
  <section class="contactForm__container">
    <h2 class="contactForm__header">Customer service</h2>
    <h3 class="contactForm__secondHeader">
      In-store purchases and company contact form
    </h3>
    <form class="contactForm__form">
      <div class="contactForm__form__name__typing__container">
        <label
          for="name"
          class="contactForm__form__name__typing__label"
          :class="{ moveTop: name.inputFocus || $v.name.input.required }"
          >Name</label
        >
        <input
          type="text"
          class="contactForm__form__name__typing__input"
          id="name"
          name="name"
          v-model="name.input"
          @input="$v.name.$touch()"
          @focus="(name.inputFocus = true), (name.inputWasFocus = true)"
          @blur="name.inputFocus = false"
          :class="{
            inputFocus: name.inputFocus,
            inputError: name.inputWasFocus && !$v.name.input.required,
          }"
        />
        <p
          class="contactForm__form__name__typing__input-warning"
          :class="{
            warningVisible: name.inputWasFocus && !$v.name.input.required,
          }"
        >
          {{ inputRequired($v.name.input) }}
        </p>
      </div>
    </form>
  </section>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: {
        input: "",
        inputFocus: false,
        inputWasFocus: false,
      },
    };
  },
  validations: {
    name: {
      input: {
        required,
      },
    },
  },
  methods: {
    inputRequired(inputName) {
      if (!inputName.required) {
        return "Required field.";
      }
      return "no Waring";
    },
  },
};
</script>

<style lang="scss" scoped>
.contactForm {
  &__header {
    background: none;
    text-transform: none;
    font-size: 22px;
    letter-spacing: 0.3px;
    margin-bottom: 35px;
    padding: 20px 0;
    line-height: 22px;
    font-weight: 700;
  }
  &__secondHeader {
    font-size: 22px;
    letter-spacing: 0.3px;
    text-transform: none;
  }

  &__form {
    &__name {
      &__typing {
        &__container {
        }
      }
    }
  }
}
</style>
