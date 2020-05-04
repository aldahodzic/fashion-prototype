<template>
  <section class="subscribe__container">
    <form class="subscribe__form" autocomplete="on">
      <fieldset>
        <div class="subscribe__form__email">
          <label
            class="subscribe__form__email__label"
            for="email"
            :class="{ moveTop: emailFocus || $v.email.required }"
            >E-mail address</label
          >
          <input
            class="subscribe__form__email__input"
            type="email"
            id="email"
            name="email"
            v-model="email"
            @input="$v.email.$touch()"
            @focus="(emailFocus = true), (emailWasFocus = true)"
            @blur="emailFocus = false"
            :class="{
              inputFocus: emailFocus,
              inputError:
                emailWasFocus &&
                !emailFocus &&
                (!$v.email.required || !$v.email.email),
            }"
          />
          <p class="subscribe__form__email__input-waring">{{ inputWarning }}</p>
        </div>
        <div class="subscribe__form__interest">
          <legend class="subscribe__form__interest__legend">
            Sections of your interest
          </legend>
          <input
            class="subscribe__form__interest__input"
            type="checkbox"
            name="woman"
            value="woman"
            id="woman"
            v-model="woman"
          />
          <label class="subscribe__form__interest__label" for="woman">
            <span class="subscribe__form__interest__checkbox"
              ><i
                class="subscribe__form__interest__checkbox-icon fas fa-check"
              ></i
            ></span>
            Woman
          </label>
          <input
            class="subscribe__form__interest__input"
            type="checkbox"
            name="man"
            value="man"
            id="man"
            v-model="man"
          />
          <label class="subscribe__form__interest__label" for="man">
            <span class="subscribe__form__interest__checkbox"
              ><i
                class="subscribe__form__interest__checkbox-icon fas fa-check"
              ></i
            ></span>
            Man
          </label>
          <input
            class="subscribe__form__interest__input"
            type="checkbox"
            name="kids"
            value="kids"
            id="kids"
            v-model="kids"
          />
          <label class="subscribe__form__interest__label" for="kids">
            <span class="subscribe__form__interest__checkbox"
              ><i
                class="subscribe__form__interest__checkbox-icon fas fa-check"
              ></i
            ></span>
            Kids
          </label>
        </div>
        <div class="subscribe__form__privacy">
          <input
            class="subscribe__form__privacy__input"
            type="checkbox"
            name="privacy"
            value="privacy"
            id="privacy"
            v-model="privacy"
          />
          <label class="subscribe__form__privacy__label" for="privacy">
            <span class="subscribe__form__privacy__checkbox"
              ><i
                class="subscribe__form__privacy__checkbox-icon fas fa-check"
              ></i
            ></span>
            I accept the
            <a class="subscribe__form__privacy__link" href="#"
              >privacy statement</a
            >
          </label>
        </div>
        <div class="subscribe__form__submit">
          <button
            class="subscribe__form__submit-btn btn-main"
            @click.prevent="subscribe"
          >
            SUBSCRIBE
          </button>
        </div>
      </fieldset>
    </form>
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
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      emailFocus: false,
      emailWasFocus: false,
      email: "",
      woman: false,
      man: false,
      kids: false,
      privacy: false,
      modalShow: false,
      prompt: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    subscribe() {
      if (!this.$v.email.required) {
        document.getElementById("email").scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
        this.emailWasFocus = true;
      } else if (!this.woman && !this.man && !this.kids) {
        this.prompt = "You must choose at least one of the options.";
        this.modalShow = true;
      } else if (!this.privacy) {
        this.prompt = "You must accept the privacy policy.";
        this.modalShow = true;
      }
    },
  },
  computed: {
    inputWarning() {
      if (this.emailWasFocus && !this.$v.email.required) {
        return "Required field.";
      }
      if (!this.$v.email.email) {
        return "Enter a valid e-mail address.";
      }
      return " ";
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe {
  &__container {
    margin-top: 30px;
    padding-top: 10px;
  }
  &__form {
    width: 47.5%;
    font-size: 1.4rem;

    &__email {
      padding-top: 10px;
      padding-bottom: 5px;
      width: 100%;
      max-width: 350px;

      &__label {
        position: absolute;
        opacity: 0.6;
        font-size: 1.6rem;
        pointer-events: none;
        transition: all 0.2s;

        &.moveTop {
          transform: translateY(-25px) scale(0.8);
          margin-top: 0;
          overflow: visible;
          margin-left: -10px;
          opacity: 0.4;
        }
      }
      &__input {
        background: none;
        border: none;
        border-radius: 0;
        border-bottom: 2px solid #cccccc;
        font-size: 1.6rem;
        letter-spacing: 0.2px;
        line-height: 20px;
        padding: 0 0 8px;
        width: 100%;

        &:focus {
          outline: none;
        }

        &.inputFocus {
          border-color: black;
        }
        &.inputError {
          border-color: red;
        }

        &-waring {
          color: red;
          margin-top: 10px;
          font-size: 1.2rem;
          white-space: pre;
        }
      }
    }
    &__interest {
      padding-bottom: 5px;
      padding-top: 10px;
      position: relative;
      &__legend {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 20px;
      }

      &__label {
        margin-bottom: 20px;
      }
    }
    &__privacy {
      margin-top: 10px;
      &__link {
        text-decoration: underline;
      }
    }
    &__submit {
      margin-top: 50px;
      &-btn {
        height: 40px;
        min-width: 201px;
        font-size: 14px;
        letter-spacing: 0.2px;
        font-weight: 400;
      }
    }
  }
}
</style>
