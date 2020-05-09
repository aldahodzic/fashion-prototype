<template>
  <section class="unsubscribe__container">
    <h1 class="unsubscribe__header">
      Do you want to stop receiving our Newsletter?
    </h1>
    <p lass="unsubscribe__para">
      Enter the email address you used to subscribe and click on UNSUBSCRIBE.
    </p>
    <form class="unsubscribe__form" autocomplete="on">
      <fieldset>
        <EmailInput
          idName="unsubEmail"
          :submitNull="email.submitNull"
          autocomplete="on"
          @emitEmail="email.input = $event"
        ></EmailInput>

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
import EmailInput from "@/components/EmailInput.vue";

export default {
  data() {
    return {
      email: {
        input: "",
        submitNull: false,
      },
    };
  },
  components: {
    EmailInput,
  },
  methods: {
    unsubscribe() {
      if (!this.email.input) {
        document.getElementById("unsubEmail").scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
        this.email.submitNull = true;
      } else {
        console.log(`${this.email.input} unsubscribe`);
        this.$router.push("/confirm/unsubscribe");
      }
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
    width: 47.5%;
    &__email {
      &__typing {
        &__container {
          width: 100%;
          max-width: 350px;
        }
      }
    }
    &__submit {
      margin-top: 10px;
    }
  }
}
</style>
