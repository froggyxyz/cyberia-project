<template>
  <div class="burger">
    <button class="burger__button" @click="changeShowMenu">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 17H28"
          stroke="#EEF3FF"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M4 7L28 7"
          stroke="#EEF3FF"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M4 27L28 27"
          stroke="#EEF3FF"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </button>
    <div
      :class="isOpenMenu ? 'burger__menu burger__menu-opened' : 'burger__menu'"
    >
      <button class="burger__button" @click="changeShowMenu">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.9465 32.9465L1.99996 1.99996"
            stroke="#A5B5CA"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M2.00293 33L32.9495 2.05342"
            stroke="#A5B5CA"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <div class="burger__content">
        <div class="burger__links">
          <router-link to="/">Главная</router-link>
          <router-link to="/about">О нас</router-link>
          <router-link to="/services">Услуги</router-link>
          <router-link to="/projects">Проекты</router-link>
          <router-link to="/blog">Блог</router-link>
        </div>
        <div class="burger__contacts">
          <p class="burger__heading">Контакты:</p>
          <a href="tel:+74996794579">+7 499 679 45 79</a>
          <a href="mailto:hello@cyberia.ru">hello@cyberia.ru</a>
          <p>Аносова 3Б, оф. 1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenMenu: false,
    };
  },
  methods: {
    changeShowMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
  watch: {
    "$route.path"() {
      this.isOpenMenu = false;
    },
  },
};
</script>

<style scoped>
.burger__button {
  background: none;
  border: none;
  cursor: pointer;
  text-align: end;
}

.burger__button > svg {
  width: 31px;
  height: 31px;
}

.burger__menu {
  padding: 97px 92px 235px 64px;
  display: none;
  flex-direction: column;
  background: #24252f;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  right: -1000px;
  transition: all 0.5s ease-in-out;
  overflow: scroll;
}

.burger__menu-opened {
  display: flex;
  transform: translateX(-1000px);
  transition: all 0.5s ease-in-out;
}

.burger__content {
  margin-top: 44px;
}

.burger__links,
.burger__contacts {
  display: flex;
  flex-direction: column;
  max-width: 725px;
  border-bottom: 3px solid #2b2d3a;
}

.burger__links > a {
  font-family: var(--secondary-text-font);
  font-style: normal;
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.366666667;
  color: var(--main-text-color);
  margin-bottom: 83px;
}

.burger__contacts,
.burger__contacts > a {
  font-family: var(--secondary-text-font);
  font-style: normal;
  font-weight: 400;
  font-size: 1.6875rem;
  line-height: 1.37037037;
  color: #9aa8ba;
}

.burger__contacts {
  padding: 48px 0 68px;
}

.burger__contacts > a {
  margin-bottom: 38px;
}

.burger__heading {
  font-size: 1.875rem;
  line-height: 1.366666667;
  margin-bottom: 44px;
}

@media (max-width: 475px) {
  .burger__menu {
    padding: 42px 33px 181px 24px;
  }
  .burger__links > a {
    font-size: 1.125rem;
    line-height: 1.388888889;
    margin-bottom: 30px;
  }
  .burger__contacts,
  .burger__contacts > a {
    font-size: 1rem;
    line-height: 1.375;
  }
  .burger__contacts {
    padding: 38px 0 44px;
  }
  .burger__contacts > a {
    margin-bottom: 19px;
  }
  .burger__heading {
    font-size: 1.125rem;
    line-height: 1.388888889;
    margin-bottom: 42px;
  }
}
</style>
