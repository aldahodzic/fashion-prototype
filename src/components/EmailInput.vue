<template>
  <div class="email__typing__container">
    <label
      class="email__typing__label"
      :for="idName ? idName : 'email'"
      :class="{ moveTop: emailFocus || $v.email.required }"
      >E-mail address</label
    >
    <input
      class="email__typing__input"
      type="email"
      :id="idName ? idName : 'email'"
      name="email"
      v-model="email"
      @input="$v.email.$touch()"
      @focus="(emailFocus = true), (emailWasFocus = true)"
      @blur="(emailFocus = false), emitEmail()"
      :class="{
        inputFocus: emailFocus,
        inputError:
          emailWasFocus &&
          !emailFocus &&
          (!$v.email.required || !$v.email.email),
      }"
      :autocomplete="autocomplete"
    />
    <p
      class="email__typing__input-warning"
      :class="{
        warningVisible:
          emailWasFocus &&
          !emailFocus &&
          (!$v.email.email || !$v.email.required),
      }"
    >
      {{ inputWarning }}
    </p>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  props: ["idName", "autocomplete", "submitNull"],
  data() {
    return {
      email: "",
      emailFocus: false,
      emailWasFocus: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    emitEmail() {
      if (this.$v.email.required && this.$v.email.email) {
        this.$emit("emitEmail", this.email);
      } else {
        this.$emit("emitEmail", false);
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
  watch: {
    submitNull() {
      this.emailWasFocus = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
