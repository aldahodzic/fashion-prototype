<template>
  <section class="contactForm__container" id="contactForm__container">
    <h2 class="contactForm__header">Customer service</h2>
    <h3 class="contactForm__secondHeader">
      Contact form
    </h3>
    <form class="contactForm__form" autocomplete="off">
      <RequiredInput
        :placeHolder="form.name.placeHolder"
        :idName="form.name.idName"
        :submitNull="form.name.submitNull"
        @emitInput="form.name.input = $event"
      ></RequiredInput>

      <RequiredInput
        :placeHolder="form.surname.placeHolder"
        :idName="form.surname.idName"
        :submitNull="form.surname.submitNull"
        @emitInput="form.surname.input = $event"
      ></RequiredInput>

      <div class="contactForm__form__phone__typing__container">
        <div class="contactForm__form__prefix__container">
          <label
            for="prefix"
            class="contactForm__form__prefix__typing__label"
            :class="{
              moveTop: form.prefix.inputFocus || $v.form.prefix.input.required,
            }"
            >Prefix</label
          >
          <input
            type="text"
            maxlength="4"
            class="contactForm__form__prefix__typing__input"
            id="prefix"
            name="prefix"
            v-model="form.prefix.input"
            @input="$v.form.prefix.$touch()"
            @focus="
              (form.prefix.inputFocus = true),
                (form.prefix.inputWasFocus = true)
            "
            @blur="form.prefix.inputFocus = false"
            :class="{
              inputFocus: form.prefix.inputFocus,
              inputError:
                form.prefix.inputWasFocus &&
                !form.prefix.inputFocus &&
                (!$v.form.prefix.input.required ||
                  !$v.form.prefix.input.prefixValidate),
            }"
          />
        </div>

        <div class="contactForm__form__phone__container">
          <label
            for="phone"
            class="contactForm__form__phone__typing__label"
            :class="{
              moveTop: form.phone.inputFocus || $v.form.phone.input.required,
            }"
            >Telephone</label
          >
          <input
            type="text"
            class="contactForm__form__phone__typing__input"
            id="phone"
            name="phone"
            v-model="form.phone.input"
            @input="$v.form.phone.$touch()"
            @focus="
              (form.phone.inputFocus = true), (form.phone.inputWasFocus = true)
            "
            @blur="form.phone.inputFocus = false"
            :class="{
              inputFocus: form.phone.inputFocus,
              inputError:
                form.phone.inputWasFocus &&
                !form.phone.inputFocus &&
                !$v.form.phone.input.required,
            }"
          />
        </div>
        <p
          class="contactForm__form__phone__typing__input-warning"
          :class="{
            warningVisible:
              (form.prefix.inputWasFocus &&
                !form.prefix.inputFocus &&
                (!$v.form.prefix.input.required ||
                  !$v.form.prefix.input.prefixValidate)) ||
              (form.phone.inputWasFocus &&
                !form.phone.inputFocus &&
                (!$v.form.phone.input.required ||
                  !$v.form.phone.input.numeric)),
          }"
        >
          {{ phoneWarning() }}
        </p>
        <p
          class="contactForm__form__prefix__typing__input-tip"
          v-show="form.prefix.inputFocus || form.phone.inputFocus"
        >
          Enter a contact telephone number including the area code. Example: +66
          022134567
        </p>
      </div>

      <EmailInput
        idName="email"
        @emitEmail="form.email.input = $event"
        :submitNull="form.email.submitNull"
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
          v-model="form.category.input"
          @input="$v.form.category.$touch()"
          @focus="
            (form.category.inputFocus = true),
              (form.category.inputWasFocus = true)
          "
          @blur="form.category.inputFocus = false"
          :class="{
            inputFocus: form.category.inputFocus,
            inputError:
              form.category.inputWasFocus &&
              !form.category.inputFocus &&
              !$v.form.category.input.required,
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
              form.category.inputWasFocus &&
              !form.category.inputFocus &&
              !$v.form.category.input.required,
          }"
        >
          {{ inputRequired($v.form.category.input) }}
        </p>
      </div>

      <RequiredInput
        :placeHolder="form.subject.placeHolder"
        :idName="form.subject.idName"
        :submitNull="form.subject.submitNull"
        @emitInput="form.subject.input = $event"
      ></RequiredInput>

      <RequiredInput
        class="contactForm__form__message__typing__container"
        :placeHolder="form.message.placeHolder"
        :idName="form.message.idName"
        :submitNull="form.message.submitNull"
        :isTextarea="true"
        @emitInput="form.message.input = $event"
      ></RequiredInput>

      <RequiredInput
        v-if="
          form.category.input == 'status' ||
            form.category.input == 'exchangeReturn'
        "
        :placeHolder="form.orderNumber.placeHolder"
        :idName="form.orderNumber.idName"
        :submitNull="form.orderNumber.submitNull"
        @emitInput="form.orderNumber.input = $event"
      ></RequiredInput>
    </form>
    <div class="contactForm__form__privacy">
      <input
        class="contactForm__form__privacy__input"
        type="checkbox"
        name="privacy"
        value="privacy"
        id="privacy"
        v-model="privacy"
      />
      <label class="contactForm__form__privacy__checkbox__label" for="privacy">
        <span class="contactForm__form__privacy__checkbox"
          ><i class="contactForm__form__privacy__checkbox-icon fas fa-check"></i
        ></span>
        I have read and accepted the
        <a class="contactForm__form__privacy__link" href="#">privacy policy</a>
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
import { required, numeric } from "vuelidate/lib/validators";
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
      form: {
        name: {
          input: "",
          submitNull: false,
          idName: "name",
          placeHolder: "Name",
        },
        surname: {
          input: "",
          submitNull: false,
          idName: "surname",
          placeHolder: "Surname",
        },
        prefix: {
          input: "",
          idName: "prefix",
          inputFocus: false,
          inputWasFocus: false,
        },
        phone: {
          input: "",
          idName: "phone",
          inputFocus: false,
          inputWasFocus: false,
        },
        email: {
          input: "",
          idName: "email",
          submitNull: false,
        },
        category: {
          input: "",
          idName: "category",
          inputFocus: false,
          inputWasFocus: false,
        },
        subject: {
          input: "",
          submitNull: false,
          idName: "subject",
          placeHolder: "Subject",
        },
        message: {
          input: "",
          submitNull: false,
          idName: "message",
          placeHolder: "Message",
        },
        orderNumber: {
          input: "",
          submitNull: false,
          idName: "orderNumber",
          placeHolder: "Order no.",
        },
      },

      privacy: false,
      modalShow: false,
      prompt: "You must accept the privacy policy in order to submit form.",
    };
  },
  components: {
    EmailInput,
    RequiredInput,
  },
  validations: {
    form: {
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
        input: { required, numeric },
      },
      category: {
        input: { required },
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

    phoneWarning() {
      if (
        !this.$v.form.phone.input.required ||
        !this.$v.form.prefix.input.required
      ) {
        return "Required field.";
      }
      if (!this.$v.form.phone.input.numeric) {
        return "Enter a valid phone number.";
      }
      if (!this.$v.form.prefix.input.prefixValidate) {
        return "Please, enter a valid prefix";
      }
      return "no Waring";
    },
    sendForm() {
      let data = {};

      for (let [key, value] of Object.entries(this.$data.form)) {
        if (!value.input) {
          if (key == "orderNumber" && !this.$data.form.category.input) {
            continue;
          } else if (key == "prefix" || key == "phone" || key == "category") {
            value.inputWasFocus = true;
          } else {
            value.submitNull = true;
          }
          document.getElementById("contactForm__container").scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
        } else {
          data[key] = value.input;
        }
      }
      let size = Object.keys(data).length;
      if (size >= 8) {
        if (!this.privacy) {
          this.modalShow = true;
        } else {
          console.log("form submit: ");
          for (let [key, value] of Object.entries(data)) {
            console.log(`${key}:${value}`);
            this.$router.push("/contact/respond");
          }
        }
      }
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
    grid-row-gap: 50px;

    & > [class$="__container"] {
      margin-right: 80px;
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
      margin-bottom: 40px;

      &__link {
        text-decoration: underline;
      }
    }
  }
}
</style>
