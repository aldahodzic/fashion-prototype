<template>
  <div class="newsletter__container">
    <form class="newsletter__form" autocomplete="on">
      <fieldset>
        <div class="newsletter__form__email">
          <p>{{ $v.email }}</p>
          <p>{{ $v.email.required }}</p>
          <hr />
          <label
            class="newsletter__form__email__label"
            for="email"
            :class="{ moveTop: emailFocus || $v.email.required }"
            >E-mail address</label
          >
          <input
            class="newsletter__form__email__input"
            type="email"
            id="email"
            name="email"
            v-model="email"
            @input="$v.email.$touch()"
            @focus="emailFocus = true"
            @blur="emailFocus = false"
          />
        </div>
        <div class="newsletter__form__interest">
          <legend class="newsletter__form__interest__legend">
            Sections of your interest
          </legend>
          <input
            class="newsletter__form__interest__input"
            type="checkbox"
            name="woman"
            value="woman"
            id="woman"
            v-model="woman"
          />
          <label class="newsletter__form__interest__label" for="woman">
            <span class="newsletter__form__interest__checkbox"
              ><i
                class="newsletter__form__interest__checkbox-icon fas fa-check"
              ></i
            ></span>
            Woman
          </label>
          <input
            class="newsletter__form__interest__input"
            type="checkbox"
            name="man"
            value="man"
            id="man"
            v-model="man"
          />
          <label class="newsletter__form__interest__label" for="man">
            <span class="newsletter__form__interest__checkbox"
              ><i
                class="newsletter__form__interest__checkbox-icon fas fa-check"
              ></i
            ></span>
            Man
          </label>
          <input
            class="newsletter__form__interest__input"
            type="checkbox"
            name="kids"
            value="kids"
            id="kids"
            v-model="kids"
          />
          <label class="newsletter__form__interest__label" for="kids">
            <span class="newsletter__form__interest__checkbox"
              ><i
                class="newsletter__form__interest__checkbox-icon fas fa-check"
              ></i
            ></span>
            Kids
          </label>
        </div>
        <div class="newsletter__form__privacy">
          <input
            class="newsletter__form__privacy__input"
            type="checkbox"
            name="privacy"
            value="privacy"
            id="privacy"
            v-model="privacy"
          />
          <label class="newsletter__form__privacy__label" for="privacy">
            <span class="newsletter__form__privacy__checkbox"
              ><i
                class="newsletter__form__privacy__checkbox-icon fas fa-check"
              ></i
            ></span>
            I accept the
            <a class="newsletter__form__privacy__link" href="#"
              >privacy statement</a
            >
          </label>
        </div>
        <div class="newsletter__form__submit">
          <button class="newsletter__form__submit-btn btn">
            SUBSCRIBE
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      emailFocus: false,
      email: "",
      woman: false,
      man: false,
      kids: false,
      privacy: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
};
</script>

<style lang="scss" scoped>
.newsletter {
  &__container {
    padding-top: 30px;
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
  }
}
</style>
