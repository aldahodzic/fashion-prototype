<template>
  <section class="unsubscribe__container">
    <h1 class="unsubscribe__header">
      Do you want to stop receiving our Newsletter?
    </h1>
    <p lass="unsubscribe__para">
      Enter the email address you used to subscribe and click on UNSUBSCRIBE.
    </p>
    <form class="unsubscribe__form">
      <fieldset>
        <div class="unsubscribe__form__email">
          <label
            class="unsubscribe__form__email__label"
            for="unSubemail"
            :class="{ moveTop: emailFocus || $v.email.required }"
            >E-mail address</label
          >
          <input
            class="unsubscribe__form__email__input"
            type="email"
            id="unSubemail"
            name="email"
            v-model="email"
            @input="$v.email.$touch()"
            @focus="(emailFocus = true), (emailWasFocus = true)"
            @blur="emailFocus = false"
            :class="{
              inputFocus: emailFocus,
              inputError:
                emailWasFocus && (!$v.email.required || !$v.email.email),
            }"
          />
          <p
            class="unsubscribe__form__email__input-warning"
            :class="{
              warningVisible:
                emailWasFocus && (!$v.email.email || !$v.email.required),
            }"
          >
            {{ inputWarning }}
          </p>
        </div>
        <div class="unsubscribe__form__submit">
          <button
            class="unsubscribe__form__submit-btn btn-main"
            @click.prevent="unsubscribe"
          >
            UNSUBSCRIBE
          </button>
        </div>
      </fieldset>
    </form>
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
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    unsubscribe() {
      if (!this.$v.email.required || !this.$v.email.email) {
        document.getElementById("unSubemail").scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
        this.emailWasFocus = true;
      } else {
        this.$store.commit("updateUnsubscribeEmail", this.email);
        this.$router.push("/confirm/unsubscribe");
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
      return "no Waring";
    },
  },
};
</script>

<style lang="scss" scoped>
.unsubscribe {
  &__container {
    margin-top: 59px;
    border-top: 1px solid #cccc;
    padding-top: 50px;
  }
  &__header {
    padding: 20px 0 10px;
  }

  &__form {
    &__submit {
      margin-top: 10px;
    }
  }
}
</style>
