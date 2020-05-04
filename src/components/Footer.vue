<template>
  <footer class="footer">
    <div class="footer__subscribe">
      <h2 class="footer__subscribe-title">
        JOIN OUR NEWSLETTER
      </h2>

      <form class="footer__subscribe-form">
        <fieldset>
          <div class="footer__subscribe-form-entry">
            <label
              for="newsletter-email"
              class="footer__subscribe-form__label"
              :class="{ emailHide: emailBoxFocus || subBox }"
              >Enter your email address here</label
            >
            <input
              type="email"
              name="newsletter-email"
              id="newsletter-email"
              class="footer__subscribe-form__input"
              autocomplete="off"
              maxlength="100"
              required
              @focus="emailBoxFocus = true"
              @blur="emailBoxFocus = false"
              @keydown="subKeyDown"
              v-model="emailInput"
            />
          </div>
        </fieldset>
        <div class="footer__subscribe__additional" :class="{ expand: subBox }">
          <fieldset>
            <div class="footer__subscribe__additional__box">
              <input
                class="footer__subscribe__additional__box__input"
                type="checkbox"
                name="woman"
                value="woman"
                id="footer__subscribe__additional__box__input-woman"
                v-model="subscribeList"
              />
              <label
                class="footer__subscribe__additional__box__label"
                for="footer__subscribe__additional__box__input-woman"
                ><span class="footer__subscribe__additional__box__checkbox"
                  ><i
                    class="footer__subscribe__additional__box__checkbox-icon fas fa-check"
                  ></i
                ></span>
                Woman</label
              >
              <input
                class="footer__subscribe__additional__box__input"
                type="checkbox"
                name="man"
                value="man"
                id="footer__subscribe__additional__box__input-man"
                v-model="subscribeList"
              />
              <label
                class="footer__subscribe__additional__box__label"
                for="footer__subscribe__additional__box__input-man"
                ><span class="footer__subscribe__additional__box__checkbox"
                  ><i
                    class="footer__subscribe__additional__box__checkbox-icon fas fa-check"
                  ></i
                ></span>
                Man</label
              >
              <input
                class="footer__subscribe__additional__box__input"
                type="checkbox"
                name="kid"
                value="kid"
                id="footer__subscribe__additional__box__input-kid"
                v-model="subscribeList"
              />
              <label
                class="footer__subscribe__additional__box__label"
                for="footer__subscribe__additional__box__input-kid"
                ><span class="footer__subscribe__additional__box__checkbox"
                  ><i
                    class="footer__subscribe__additional__box__checkbox-icon fas fa-check"
                  ></i
                ></span>
                Kid</label
              >
            </div>

            <div class="footer__subscribe__policy__box">
              <input
                class="footer__subscribe__policy__box__input"
                type="checkbox"
                name="policy"
                value="policy"
                id="footer__subscribe__policy__box__input"
                v-model="privacyAgree"
              />
              <label
                class="footer__subscribe__policy__box__label"
                for="footer__subscribe__policy__box__input"
                ><span class="footer__subscribe__policy__box__checkbox"
                  ><i
                    class="footer__subscribe__policy__box__checkbox-icon fas fa-check"
                  ></i
                ></span>
                I ACCEPT THE
                <a class="footer__subscribe__policy-link"
                  >PRIVACY STATEMENT</a
                ></label
              >
            </div>
          </fieldset>
        </div>
      </form>

      <div class="footer__subscribe__submit">
        <button
          class="footer__subscribe__submit-btn btn"
          v-show="subBox"
          @click="subscribe"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
    <div
      class="modal__container"
      v-show="!validSubInput"
      @click="validSubInput = true"
    >
      <div class="modal__box">
        <i class="fas fa-exclamation modal__icon"></i>
        <h3 class="modal__warning">WARNING</h3>
        <p class="modal__prompt">
          {{ prompt }}
        </p>
        <button
          type="button"
          class="modal__btn btn-main"
          @click="validSubInput = true"
        >
          ACCEPT
        </button>
      </div>
    </div>
    <ul class="footer__socialmedia">
      <li class="footer__socialmedia__list">
        <a href="">INSTAGRAM</a>
      </li>
      <li class="footer__socialmedia__list">
        <a href="">FACEBOOK</a>
      </li>
      <li class="footer__socialmedia__list">
        <a href="">TWITTER</a>
      </li>
      <li class="footer__socialmedia__list">
        <a href="">PINTEREST</a>
      </li>
      <li class="footer__socialmedia__list">
        <a href="">YOUTUBE</a>
      </li>
    </ul>
    <ul class="footer__term">
      <li class="footer__term__list"><a href="">PRIVACY POLICY</a></li>
      |
      <li class="footer__term__list"><a href=""></a>TERMS OF USE</li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      subBox: false,
      emailBoxFocus: false,
      emailInput: "",
      subscribeList: [],
      privacyAgree: false,
      validSubInput: true,
      prompt: "",
    };
  },
  methods: {
    subKeyDown() {
      this.subBox = true;
    },
    subscribe() {
      if (!this.emailInput) {
        this.validSubInput = false;
        this.prompt = "Enter a valid e-mail address.";
      } else if (!this.subscribeList.length) {
        this.validSubInput = false;
        this.prompt = "You must choose at least one of the options.";
      } else if (!this.privacyAgree) {
        this.validSubInput = false;
        this.prompt = "You must accept the privacy policy.";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100vh;
  padding-top: 15rem;

  &__subscribe {
    text-align: center;

    &-title {
      font-size: 3.5rem;
      letter-spacing: 0.3px;
      margin-bottom: 3rem;
    }

    &-form {
      padding-top: 2.7rem;

      fieldset {
        border: none;
      }

      &-entry {
        margin: 0 auto;
        width: 50rem;
        position: relative;
      }

      &__label {
        font-size: 1.5rem;
        position: absolute;
        margin-top: 8px;
        letter-spacing: 0.2px;
        line-height: 20px;
        text-align: center;
        width: 100%;
        opacity: 0.8;
        left: 0;
        transform-origin: left top;
        cursor: text;
        pointer-events: none;
      }

      &__input {
        letter-spacing: 0.05em;
        font-weight: 400;
        background-color: transparent;
        background-image: none;
        border: none;
        border-bottom: 1px solid black;
        font-size: 2rem;
        padding-bottom: 8px;
        height: 44px;
        z-index: 1;
        padding-bottom: 8px;
        max-width: 35rem;
        width: 100%;
        text-align: center;

        &:focus {
          outline: none;
        }
      }
    }

    &__additional {
      padding-top: 5rem;
      display: none;
      &__box {
        position: relative;
        margin-bottom: 4.4rem;

        &__label {
          font-size: 1.6rem;
          margin: 0 auto;
          width: 11rem;
          text-align: left;
        }
  
      }
    }
    &__policy {
      padding-top: 5rem;
      &__box {
        margin-bottom: 4.4rem;

        &__label {
          font-size: 1.6rem;
          color: #7a7a7a;
        }

      }

      &-link {
        text-decoration: underline;
      }
    }

    &__submit {
      &-btn {
        font-size: 1.6rem;
        font-weight: 700;
        background-color: #fff;
        border: 1px solid #000;
        margin-top: 30px;
        color: #000;
        height: 35px;
        padding: 0 17px;
        letter-spacing: 0.05em;
      }
    }
  }

  &__socialmedia {
    margin-top: 100px;
    text-align: center;
    display: flex;
    justify-content: center;

    &__list {
      margin: 1rem 2rem;
      font-size: 1.25rem;
    }
  }

  &__term {
    margin: 100px 10px;
    display: flex;
    justify-content: flex-end;

    &__list {
      font-size: 1.25rem;
      padding-right: 5px;
      padding-left: 5px;
    }
  }
}

.expand {
  display: block;
}

.emailHide {
  opacity: 0;
}

</style>
