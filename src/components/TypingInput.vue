<template>
  <div class="typing__container">
    <label
      class="typing__label"
      for="unSubemail"
      :class="{ moveTop: emailFocus || $v.email.required }"
      >E-mail address</label
    >
    <input
      class="typing__input"
      type="email"
      id="unSubemail"
      name="email"
      v-model="email"
      @input="$v.email.$touch()"
      @focus="(emailFocus = true), (emailWasFocus = true)"
      @blur="emailFocus = false"
      :class="{
        inputFocus: emailFocus,
        inputError: emailWasFocus && (!$v.email.required || !$v.email.email),
      }"
    />
    <p
      class="typing__input-warning"
      :class="{
        warningVisible:
          emailWasFocus && (!$v.email.email || !$v.email.required),
      }"
    >
      {{ inputWarning }}
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
