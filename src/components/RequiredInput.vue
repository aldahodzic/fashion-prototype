<template>
  <div class="required__typing__container">
    <label
      class="required__typing__label"
      :for="idName"
      :class="{ moveTop: inputFocus || $v.input.required }"
      >{{ placeholder }}</label
    >
    <input
      class="required__typing__input"
      type="text"
      :id="idName"
      :name="idName"
      v-model="input"
      @input="$v.input.$touch()"
      @focus="(inputFocus = true), (inputWasFocus = true)"
      @blur="(inputFocus = false), emitinput()"
      :class="{
        inputFocus: inputFocus,
        inputError: inputWasFocus && !inputFocus && !$v.input.required,
      }"
      :autocomplete="autocomplete"
    />
    <p
      class="required__typing__input-warning"
      :class="{
        warningVisible: inputWasFocus && !inputFocus && !$v.input.required,
      }"
    >
      {{ inputWarning }}
    </p>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  props: ["idName", "autocomplete", "submitNull"],
  data() {
    return {
      input: "",
      inputFocus: false,
      inputWasFocus: false,
    };
  },
  validations: {
    input: {
      required,
    },
  },
  methods: {
    emitinput() {
      if (this.$v.input.required) {
        this.$emit("typinginput", this.input);
      } else {
        this.$emit("typinginput", false);
      }
    },
  },
  computed: {
    inputWarning() {
      if (this.inputWasFocus && !this.$v.input.required) {
        return "Required field.";
      }
      return "no Waring";
    },
  },
  watch: {
    submitNull() {
      this.inputWasFocus = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
