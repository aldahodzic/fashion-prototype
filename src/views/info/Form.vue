<template>
  <section class="contactForm__container" id="contactForm__container">
    <h2 class="contactForm__header">Customer service</h2>
    <h3 class="contactForm__secondHeader">
      Contact form
    </h3>
    <form class="contactForm__form" autocomplete="off">
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
          @input="$v.name.input.$touch()"
          @focus="(name.inputFocus = true), (name.inputWasFocus = true)"
          @blur="name.inputFocus = false"
          :class="{
            inputFocus: name.inputFocus,
            inputError:
              name.inputWasFocus && !name.inputFocus && !$v.name.input.required,
          }"
        />
        <p
          class="contactForm__form__name__typing__input-warning"
          :class="{
            warningVisible:
              name.inputWasFocus && !name.inputFocus && !$v.name.input.required,
          }"
        >
          {{ inputRequired($v.name.input) }}
        </p>
      </div>

      <div class="contactForm__form__surname__typing__container">
        <label
          for="surname"
          class="contactForm__form__surname__typing__label"
          :class="{ moveTop: surname.inputFocus || $v.surname.input.required }"
          >Surname</label
        >
        <input
          type="text"
          class="contactForm__form__surname__typing__input"
          id="surname"
          name="surname"
          v-model="surname.input"
          @input="$v.surname.$touch()"
          @focus="(surname.inputFocus = true), (surname.inputWasFocus = true)"
          @blur="surname.inputFocus = false"
          :class="{
            inputFocus: surname.inputFocus,
            inputError:
              surname.inputWasFocus &&
              !surname.inputFocus &&
              !$v.surname.input.required,
          }"
        />
        <p
          class="contactForm__form__surname__typing__input-warning"
          :class="{
            warningVisible:
              surname.inputWasFocus &&
              !surname.inputFocus &&
              !$v.surname.input.required,
          }"
        >
          {{ inputRequired($v.surname.input) }}
        </p>
      </div>

      <div class="contactForm__form__phone__typing__container">
        <div class="contactForm__form__prefix__container">
          <label
            for="prefix"
            class="contactForm__form__prefix__typing__label"
            :class="{ moveTop: prefix.inputFocus || $v.prefix.input.required }"
            >Prefix</label
          >
          <input
            type="text"
            maxlength="4"
            class="contactForm__form__prefix__typing__input"
            id="prefix"
            name="prefix"
            v-model="prefix.input"
            @input="$v.prefix.$touch()"
            @focus="(prefix.inputFocus = true), (prefix.inputWasFocus = true)"
            @blur="prefix.inputFocus = false"
            :class="{
              inputFocus: prefix.inputFocus,
              inputError:
                prefix.inputWasFocus &&
                !prefix.inputFocus &&
                (!$v.prefix.input.required || !$v.prefix.input.prefixValidate),
            }"
          />
        </div>
        <div class="contactForm__form__phone__container">
          <label
            for="phone"
            class="contactForm__form__phone__typing__label"
            :class="{ moveTop: phone.inputFocus || $v.phone.input.required }"
            >Telephone</label
          >
          <input
            type="text"
            class="contactForm__form__phone__typing__input"
            id="phone"
            name="phone"
            v-model="phone.input"
            @input="$v.phone.$touch()"
            @focus="(phone.inputFocus = true), (phone.inputWasFocus = true)"
            @blur="phone.inputFocus = false"
            :class="{
              inputFocus: phone.inputFocus,
              inputError:
                phone.inputWasFocus &&
                !phone.inputFocus &&
                !$v.phone.input.required,
            }"
          />
        </div>
        <p
          class="contactForm__form__phone__typing__input-warning"
          :class="{
            warningVisible:
              (prefix.inputWasFocus && !prefix.inputFocus) ||
              (phone.inputWasFocus &&
                !phone.inputFocus &&
                (!$v.phone.input.required ||
                  !$v.prefix.input.required ||
                  !$v.prefix.input.prefixValidate)),
          }"
        >
          {{ phoneWarning() }}
        </p>
        <p
          class="contactForm__form__prefix__typing__input-tip"
          v-show="prefix.inputFocus || phone.inputFocus"
        >
          Enter a contact telephone number including the area code. Example: +66
          022134567
        </p>
      </div>

      <EmailInput
        idName="email"
        @typingEmail="email.input = $event"
      ></EmailInput>

      <div class="contactForm__form__category__select__container">
        <label
          for="category"
          class="contactForm__form__category__select__label moveTop"
          >Category</label
        >
        <select
          name="category"
          id="category"
          class="contactForm__form__category__select__input"
          v-model="category.input"
          @input="$v.category.$touch()"
          @focus="(category.inputFocus = true), (category.inputWasFocus = true)"
          @blur="category.inputFocus = false"
          :class="{
            inputFocus: category.inputFocus,
            inputError:
              category.inputWasFocus &&
              !category.inputFocus &&
              !$v.category.input.required,
          }"
        >
          <option value="" disabled selected>Select</option>
          <option value="status">Order status</option>
          <option value="product">Item enquiries</option>
          <option value="exchangeReturn">Exchange and return</option>
          <option value="general">General enquiries</option>
          <option value="help">Technical help</option>
        </select>
        <i
          class="contactForm__form__category__select__icon fas fa-caret-down"
        ></i>

        <p
          class="contactForm__form__category__select__input-warning"
          :class="{
            warningVisible:
              category.inputWasFocus &&
              !category.inputFocus &&
              !$v.category.input.required,
          }"
        >
          {{ inputRequired($v.category.input) }}
        </p>
      </div>

      <!-- <div class="contactForm__form__subject__typing__container">
        <label
          for="subject"
          class="contactForm__form__subject__typing__label"
          :class="{ moveTop: subject.inputFocus || $v.subject.input.required }"
          >Subject</label
        >
        <input
          type="subject"
          class="contactForm__form__subject__typing__input"
          id="subject"
          name="subject"
          v-model="subject.input"
          @input="$v.subject.$touch()"
          @focus="(subject.inputFocus = true), (subject.inputWasFocus = true)"
          @blur="subject.inputFocus = false"
          :class="{
            inputFocus: subject.inputFocus,
            inputError: subject.inputWasFocus && !$v.subject.input.required,
          }"
        />
        <p
          class="contactForm__form__subject__typing__input-warning"
          :class="{
            warningVisible: subject.inputWasFocus && !$v.subject.input.required,
          }"
        >
          {{ inputRequired($v.subject.input) }}
        </p>
      </div> -->

      <!-- <div class="contactForm__form__message__typing__container">
        <label
          for="message"
          class="contactForm__form__message__typing__label"
          :class="{ moveTop: message.inputFocus || $v.message.input.required }"
          >message</label
        >
        <input
          type="message"
          class="contactForm__form__message__typing__input"
          id="message"
          name="message"
          v-model="message.input"
          @input="$v.message.$touch()"
          @focus="(message.inputFocus = true), (message.inputWasFocus = true)"
          @blur="message.inputFocus = false"
          :class="{
            inputFocus: message.inputFocus,
            inputError: message.inputWasFocus && !$v.message.input.required,
          }"
        />
        <p
          class="contactForm__form__message__typing__input-warning"
          :class="{
            warningVisible: message.inputWasFocus && !$v.message.input.required,
          }"
        >
          {{ inputRequired($v.message.input) }}
        </p>
      </div> -->

      <div class="contactForm__form__privacy">
        <input
          class="contactForm__form__privacy__input"
          type="checkbox"
          name="privacy"
          value="privacy"
          id="privacy"
        />
        <label
          class="contactForm__form__privacy__checkbox__label"
          for="privacy"
        >
          <span class="contactForm__form__privacy__checkbox"
            ><i
              class="contactForm__form__privacy__checkbox-icon fas fa-check"
            ></i
          ></span>
          I have read and accepted the
          <a class="contactForm__form__privacy__link" href="#"
            >privacy policy</a
          >
        </label>
      </div>
      <div class="contactForm__form__submit">
        <button
          class="contactForm__form__submit-btn btn-main"
          @click.prevent="sendForm"
        >
          SEND
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import EmailInput from "@/components/EmailInput.vue";
import RequiredInput from "@/components/RequiredInput.vue";

const prefixValidate = prefixInput => {
  if (prefixInput.length < 2) {
    return false;
  }
  if (prefixInput[0] === "+") {
    return true;
  }
  return false;
};

export default {
  data() {
    return {
      name: {
        input: "",
        inputFocus: false,
        inputWasFocus: false,
      },
      surname: {
        input: "",
        inputFocus: false,
        inputWasFocus: false,
      },
      prefix: {
        input: "",
        inputFocus: false,
        inputWasFocus: false,
      },
      phone: {
        input: "",
        inputFocus: false,
        inputWasFocus: false,
      },
      email: {
        input: "",
        submitNull: false,
      },
      category: {
        input: "",
        inputFocus: false,
        inputWasFocus: false,
      },
      test: {
        input: "",
        submitNull: false,
      },
    };
  },
  components: {
    EmailInput,
    RequiredInput,
  },
  validations: {
    name: {
      input: { required },
    },
    surname: {
      input: { required },
    },
    prefix: {
      input: { required, prefixValidate },
    },
    phone: {
      input: { required },
    },
    category: {
      input: { required },
    },
  },
  methods: {
    inputRequired(inputName) {
      if (!inputName.required) {
        return "Required field.";
      }
      return "no Waring";
    },

    phoneWarning() {
      if (!this.$v.phone.input.required || !this.$v.prefix.input.required) {
        return "Required field.";
      }
      if (!this.$v.prefix.input.prefixValidate) {
        return "Please, enter a valid prefix";
      }
      return "no Waring";
    },
    sendForm() {
      document.getElementById("contactForm__container").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.contactForm {
  &__container {
    max-width: 900px;
  }
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
    margin-top: 36px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 80px;

    & > [class$="__container"] {
      margin-right: 80px;
      margin-bottom: 50px;
    }

    &__phone {
      &__typing {
        &__container {
          display: grid;
          grid-template-columns: 15% 80%;
          grid-column-gap: 5%;
        }

        &__input {
          &-warning {
            grid-column: 1/3;
          }
        }
      }
    }

    &__prefix {
      &__typing {
        &__input {
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            /* display: none; <- Crashes Chrome on hover */
            -webkit-appearance: none;
            margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
          }
          &[type="number"] {
            -moz-appearance: textfield; /* Firefox */
          }

          &-tip {
            grid-column: 1/3;
            color: #999;
            font-size: 12px;
          }
        }
      }
    }

    &__category {
      &__select {
        &__container {
          position: relative;
        }

        &__input {
          position: absolute;
          left: 0;
          top: 0;
          display: block;

          background: none;
          border: none;
          border-radius: 0;
          border-bottom: 2px solid #cccccc;
          font-size: 1.6rem;
          letter-spacing: 0.2px;
          line-height: 20px;
          padding: 0 0 10px;
          width: 100%;
          -moz-appearance: none;
          -webkit-appearance: none;

          &:focus {
            outline: none;
          }
        }

        &__icon {
          position: absolute;
          right: 10px;
          top: 5px;

          pointer-events: none;
        }
      }
    }

    &__message {
      &__typing__container {
        grid-column: 1/3;
      }
    }

    &__privacy {
      font-size: 16px;
      grid-column: 1/3;
      margin-bottom: 20px;

      &__link {
        text-decoration: underline;
      }
    }
  }
}
</style>
