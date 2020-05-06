<template>
  <section class="comfirm__container">
    <div
      class="subscribeConfirm__container"
      v-if="confirmMethod == 'subscribe'"
    >
      <h2 class="subscribeConfirm__header">Newsletter</h2>
      <p class="subscribeConfirm__para">
        We have sent you an e-mail confirming your subscription to the
        newsletter service.
      </p>
      <p class="subscribeConfirm__para">
        Check your e-mail and follow the steps. Thank you.
      </p>
      <button
        class="subscribeConfirm__submit-btn btn-main"
        @click="confirmSubscribe"
      >
        Accept
      </button>
    </div>
    <div class="unsubscribe__container" v-else>
      <h2 class="unsubscribe__header">Cancelation email sent</h2>
      <p class="unsubscribe__para">
        We have sent you an email for you to cancel your subscription to our
        newsletter. <br />Please review the email and then press ‘Confirm’ in
        order to complete the process.
      </p>
      <a @click="goHome" class="unsubscribe__goHome"
        ><i class="unsubscribe__goHome__icon fas fa-chevron-left"></i
        ><span class="unsubscribe__goHome__text"
          >Go to the Noproblemfasion home page</span
        ></a
      >
    </div>
  </section>
</template>

<script>
import { goHome } from "../../helper/index";

export default {
  data() {
    return {
      confirmMethod: this.$route.params.method,
    };
  },
  methods: {
    confirmSubscribe() {
      this.$router.push("/newsletter");
    },
    goHome,
  },
  computed: {
    subscribeDetail() {
      return this.$store.getters.getSubscribeDetail;
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribeConfirm {
  &__submit-btn {
    margin-top: 27px;
    line-height: 40px;
    font-size: 1.4rem;
    letter-spacing: 0.2px;
    font-weight: 700;
    width: 194px;
    height: 42px;
  }
}
h2[class$="__header"] {
  padding: 0;
  margin-top: 5px;
  margin-bottom: 22px;
  font-size: 2.2rem;
  letter-spacing: 0.3px;
  text-transform: none;
}
p[class$="__para"] {
  font-size: 1.4rem;
  letter-spacing: 0.2px;
  line-height: 1.5;
  margin-bottom: 24px;
}

.unsubscribe__goHome {
  font-size: 14px;
  letter-spacing: 0.2px;
  text-decoration: underline;
  margin-top: 28px;
  display: block;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
  &__icon {
    font-size: 12px;
  }
  &__text {
    margin-left: 7px;
  }
}
</style>
