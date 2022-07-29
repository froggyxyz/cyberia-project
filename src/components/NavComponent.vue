<template>
  <div>
    <nav class="nav">
      <router-link to="/about">О нас</router-link>
      <router-link to="/services">Услуги</router-link>
      <router-link to="/projects">Проекты</router-link>
      <router-link to="/blog">Блог</router-link>
      <router-link to="/contacts">Контакты</router-link>
    </nav>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: var(--main-text-font);
  font-style: normal;
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 1.166666667;
}

.nav > a {
  color: var(--main-text-color);
  margin-right: 95px;
  position: relative;
}

.nav > a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  transition: all 0.3s linear;
}

.nav > a:hover::after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: var(--main-text-color);
  transition: all 0.3s linear;
}
</style>
