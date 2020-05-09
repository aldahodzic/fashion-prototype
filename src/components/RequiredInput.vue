<template>
  <div class="required__typing__container">
    <label
      class="required__typing__label"
      :for="idName"
      :class="{ moveTop: inputFocus || $v.input.required }"
      >{{ placeHolder }}</label
    >

    <textarea
      v-if="isTextarea"
      class="required__textarea__input"
      type="text"
      :id="idName"
      :name="idName"
      v-model="input"
      @input="$v.input.$touch(), autoHeight()"
      @focus="(inputFocus = true), (inputWasFocus = true)"
      @blur="(inputFocus = false), emitInput()"
      :class="{
        inputFocus: inputFocus,
        inputError: inputWasFocus && !inputFocus && !$v.input.required,
      }"
    />
    <input
      v-else
      class="required__typing__input"
      type="text"
      :id="idName"
      :name="idName"
      v-model="input"
      @input="$v.input.$touch()"
      @focus="(inputFocus = true), (inputWasFocus = true)"
      @blur="(inputFocus = false), emitInput()"
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
  props: ["idName", "autocomplete", "submitNull", "placeHolder", "isTextarea"],
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
    emitInput() {
      if (this.$v.input.required) {
        this.$emit("emitInput", this.input);
      } else {
        this.$emit("emitInput", false);
      }
    },
    autoHeight() {
      let textArea = document.getElementById(this.idName);
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
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
