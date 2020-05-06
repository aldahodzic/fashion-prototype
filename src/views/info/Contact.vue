<template>
  <section class="contact__container">
    <h1 class="contact__header">customer service</h1>
    <h3 class="contact__header">Store and company</h3>
    <p class="contact__para">
      Enquiries about our stores (organisation and services)
    </p>
    <ul class="contact__wrapper">
      <li class="contact__list">
        <div class="contact__name__box" @click="emailUnfold = !emailUnfold">
          <i class="contact__name__icon far fa-envelope"></i>
          <h2 class="contact__name__name">EMAIL</h2>
          <div class="contact__name__fold__wrapper">
            <span v-show="emailUnfold">
              <i class="contact__name__fold__icon fas fa-minus"></i
            ></span>
            <span v-show="!emailUnfold">
              <i class="contact__name__fold__icon fas fa-plus"></i
            ></span>
          </div>
        </div>
        <div class="contact__send__box" v-show="emailUnfold">
          <router-link
            to="/contact/form"
            tag="button"
            class="contact__send__btn btn-second"
            >Send</router-link
          >
        </div>
      </li>

      <li class="contact__list">
        <div class="contact__name__box" @click="socialUnfold = !socialUnfold">
          <i class="contact__name__icon fas fa-at"></i>
          <h2 class="contact__name__name">SOCIAL MEDIA</h2>
          <div class="contact__name__fold__wrapper">
            <span v-show="socialUnfold">
              <i class="contact__name__fold__icon fas fa-minus"></i
            ></span>
            <span v-show="!socialUnfold">
              <i class="contact__name__fold__icon fas fa-plus"></i
            ></span>
          </div>
        </div>
        <div class="contact__social__box" v-show="socialUnfold">
          <ul class="contact__social__wrapper">
            <li class="contact__social__list">
              <span>
                <i class="contact__social__icon fab fa-facebook-f"></i
              ></span>
              <a class="contact__social__link" href=""
                >No Problem The Best T Shirt</a
              >
            </li>
            <li class="contact__social__list">
              <span> <i class="contact__social__icon fab fa-line"></i> </span>
              <a class="contact__social__link" href="">Line</a>
            </li>
          </ul>
        </div>
      </li>

      <li class="contact__list">
        <div class="contact__name__box" @click="storeUnfold = !storeUnfold">
          <i class="contact__name__icon fas fa-map-marked-alt"></i>
          <h2 class="contact__name__name">STORE LOCATION</h2>
          <div class="contact__name__fold__wrapper">
            <span v-show="storeUnfold">
              <i class="contact__name__fold__icon fas fa-minus"></i
            ></span>
            <span v-show="!storeUnfold">
              <i class="contact__name__fold__icon fas fa-plus"></i
            ></span>
          </div>
        </div>
        <div class="contact__store" v-show="storeUnfold">
          <div class="contact__store__location">
            <div class="contact__store-prev">
              <i class="contact__store-prev-icon fas fa-chevron-up"></i>
            </div>
            <div class="contact__store__container swiper-container">
              <ul class="contact__store__wrapper swiper-wrapper">
                <li
                  class="contact__store__list swiper-slide"
                  v-for="store in storeList"
                  :key="store.id"
                  @click="switchMap(store.src)"
                >
                  <p class="contact__store__list__name">{{ store.name }}</p>
                  <p class="contact__store__list__address">
                    {{ store.address }}
                  </p>
                  <div class="contact__store__list__phone">
                    <i
                      class="contact__store__list__phone__icon fas fa-phone-alt"
                    ></i>
                    <p class="contact__store__list__number">
                      {{ store.phone }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="contact__store-next">
              <i class=" contact__store-next-icon fas fa-chevron-down"></i>
            </div>
          </div>
          <div class="contact__store__map googleMap">
            <iframe
              id="iframe_map"
              :src="currentMap"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import Swiper from "swiper/js/swiper.esm.bundle";

export default {
  data() {
    return {
      emailUnfold: false,
      socialUnfold: false,
      storeUnfold: true,
      currentMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31002.29466278197!2d100.49073988487703!3d13.761568446802388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ec8865f64cf%3A0x309debde3afb68aa!2sNO%20PROBLEM%20SHOP!5e0!3m2!1sen!2sus!4v1588779282442!5m2!1sen!2sus",
      storeList: [
        {
          name: "Somboon Garment Co., Ltd.",
          address:
            "Bobae Tower ชั้น G 498/197-198 ซอย ดำรงรักษ์ แขวง คลองมหานาค เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100",
          phone: "0000000",
          src:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31002.29466278197!2d100.49073988487703!3d13.761568446802388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3eae829c77c24e6!2sNo%20Problem!5e0!3m2!1sen!2sus!4v1588779373914!5m2!1sen!2sus",
        },
        {
          name: "No Problem",
          address:
            "ซอย ราชปรารภ 3 แขวง ถนนพญาไท เขตราชเทวี กรุงเทพมหานคร 10400",
          phone: "000000",
          src:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31002.29466278197!2d100.49073988487703!3d13.761568446802388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ec8865f64cf%3A0x309debde3afb68aa!2sNO%20PROBLEM%20SHOP!5e0!3m2!1sen!2sus!4v1588779282442!5m2!1sen!2sus",
        },
        {
          name: "No Problem",
          address:
            "3C - 29 444 ถนน พญาไท แขวง วังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330",
          phone: "000000",
          src:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31002.29466278197!2d100.49073988487703!3d13.761568446802388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36a021d58db472d1!2sNo%20Problem%20Teen!5e0!3m2!1sen!2sus!4v1588779465736!5m2!1sen!2sus",
        },
        {
          name: "Somboon Garment Co., Ltd.",
          address:
            "Bobae Tower ชั้น G 498/197-198 ซอย ดำรงรักษ์ แขวง คลองมหานาค เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100",
          phone: "0000000",
          src:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31002.29466278197!2d100.49073988487703!3d13.761568446802388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3eae829c77c24e6!2sNo%20Problem!5e0!3m2!1sen!2sus!4v1588779373914!5m2!1sen!2sus",
        },
        {
          name: "No Problem",
          address:
            "ซอย ราชปรารภ 3 แขวง ถนนพญาไท เขตราชเทวี กรุงเทพมหานคร 10400",
          phone: "000000",
          src:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31002.29466278197!2d100.49073988487703!3d13.761568446802388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ec8865f64cf%3A0x309debde3afb68aa!2sNO%20PROBLEM%20SHOP!5e0!3m2!1sen!2sus!4v1588779282442!5m2!1sen!2sus",
        },
        {
          name: "No Problem",
          address:
            "3C - 29 444 ถนน พญาไท แขวง วังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330",
          phone: "000000",
          src:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31002.29466278197!2d100.49073988487703!3d13.761568446802388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36a021d58db472d1!2sNo%20Problem%20Teen!5e0!3m2!1sen!2sus!4v1588779465736!5m2!1sen!2sus",
        },
      ],
    };
  },
  methods: {
    switchMap(map) {
      this.currentMap = map;
    },
    hideMap() {
      this.storeUnfold = false;
    },
  },
  mounted() {
    const swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      slidesPerView: 4,
      navigation: {
        nextEl: ".contact__store-next",
        prevEl: ".contact__store-prev",
      },
    });
    this.hideMap();
    return swiper;
  },
};
</script>

<style lang="scss" scoped>
.contact {
  &__container {
    [class$="__icon"] {
      font-size: 25px;
      &:first-child {
        justify-self: center;
      }
    }
    [class$="__fold__wrapper"] {
      justify-self: center;
    }
    [class$="__fold__icon"] {
      font-size: 20px;
    }
    h1 {
      font-size: 32px;
      letter-spacing: 0.3px;
      font-stretch: condensed;
      font-weight: 700;
      text-transform: uppercase;
      padding-top: 20px;
      margin-bottom: 50px;
    }
    h3 {
      text-transform: none;
      border: none;
      font-size: 22px;
      letter-spacing: 0.3px;
      font-weight: 700;
      margin-bottom: 9px;
    }
  }
  &__wrapper {
    border-top: 1px solid #ccc;
    width: 95%;
  }
  &__list {
    border-bottom: 1px solid #ccc;
  }
  &__name {
    &__box {
      display: grid;
      grid-template-columns: 5% 90% 5%;
      justify-items: start;
      align-items: center;
      height: 70px;
      cursor: pointer;
    }

    &__name {
      font-size: 16px;
      margin: 0;
    }
  }

  &__send {
    &__box {
      grid-column: 1/3;
      padding-right: 16px;
      padding-left: 40px;
      display: flex;
      justify-content: flex-end;
    }
    &__btn {
      text-transform: none;
      font-size: 14px;
      min-width: 180px;
      margin-bottom: 25px;
    }
  }
  &__social {
    &__box {
      grid-column: 1/3;
      padding-right: 16px;
      padding-left: 40px;
      width: 100%;
    }
    &__list {
      margin-bottom: 18px;
      display: grid;
      grid-template-columns: 10% 1fr;

      span {
        display: flex;
        justify-content: center;
      }
    }
    &__link {
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__store {
    display: grid;
    grid-template-columns: 40% 1fr;
    column-gap: 15px;
    &__location {
      display: grid;
      grid-template-rows: 25px 1fr 25px;
      justify-items: center;
    }
    &-prev,
    &-next {
      background-color: #ff5e00;
      width: 100%;
      height: 25px;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;

      &-icon {
        font-size: 15px;
        color: white;
      }
      &.swiper-button-disabled {
        background-color: #e5e5e5;
      }
      &:focus {
        outline: 0;
      }
    }

    &__container {
      height: 500px;
    }
    &__nav {
      position: relative;
      transform: rotate(-90deg);
      background-color: red;
      width: 100%;
    }
    &__list {
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      &__name,
      &__address,
      &__phone {
        font-size: 14px;
      }
      &__address {
        margin: 0;
      }
      &__phone {
        display: flex;
        align-items: center;
        &__icon {
          font-size: 14px !important;
        }
      }

      &__number {
        font-weight: 700;
        margin: 0 0 0 10px;
      }
    }
    &__map {
      #iframe_map {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
