<template>
  <div class="breadcrumbs container" v-if="crumbs.length">
    <div v-for="(crumb, i) in crumbs" :key="i">
      <router-link
        class="breadcrumbs__link"
        v-if="i < crumbs.length - 1"
        :to="crumb.path"
        >{{ crumb.name }}</router-link
      ><span class="breadcrumbs__last" v-else>{{ crumb.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    crumbs() {
      let path = "";
      let title = "Главная";

      let cs = [{ name: title, path: "/" }];
      if (!this.$route) return [];

      let route = this.$route.path.split("/");
      let matched = (this.$route.matched[0].meta.crumbs || "").split("/");

      for (let i = 1; i < route.length; i++) {
        let name = matched[i] || route[i];
        if (route[i] == "") continue;

        title += " : " + name;
        path += "/" + name;

        cs.push({ name: name, path: path });
      }

      window.document.title = title;

      return cs;
    },
  },
};
</script>

<style scoped>
.breadcrumbs {
  margin-top: 108.49px;
  display: flex;
}

.breadcrumbs__link,
.breadcrumbs__last {
  font-family: var(--main-text-font);
  font-style: normal;
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 1.166666667;
  color: #c4d2e3;
}

.breadcrumbs__last {
  color: #616580;
  cursor: default;
}

.breadcrumbs__link:after {
  padding: 0 7px;
  color: #c4d2e3;
  content: "/";
}
@media (max-width: 375px) {
  .breadcrumbs {
    margin-top: 39px;
  }
  .breadcrumbs__link,
  .breadcrumbs__last {
    font-size: 0.75rem;
    line-height: 1.166666667;
  }
}
</style>
