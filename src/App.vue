<template>
  <div id="app">
    <header-component />
    <bread-crumbs />
    <main>
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { mapActions } from "vuex";

export default {
  components: {
    HeaderComponent,
    BreadCrumbs,
    FooterComponent,
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&family=Open+Sans&family=Rubik:wght@300;500&display=swap");

:root {
  --main-text-color: #eef3ff;
  --main-text-font: "Rubik", sans-serif;
  --secondary-text-font: "Open Sans", sans-serif;
  /* --dop-text-font: "Fira Sans Condensed", sans-serif; */
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  min-height: 100vh;
  background: linear-gradient(180deg, #24252f 0%, #31313f 36.46%, #242530 100%);
}

.container {
  max-width: 1288px;
  padding: 0 24px;
  margin: 0 auto;
}

.title {
  margin-bottom: 78px;
  font-family: var(--main-text-font);
  font-style: normal;
  font-weight: 500;
  font-size: 2.375rem;
  line-height: 1.184210526;
  color: var(--main-text-color);
}

@media (max-width: 960px) {
  .container {
    max-width: 832px;
  }
}

@media (max-width: 375px) {
  .title {
    margin-bottom: 47px;
    font-size: 1.3125rem;
    line-height: 1.19047619;
  }
}
</style>
