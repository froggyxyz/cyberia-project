<template>
  <div>
    <section class="projects container">
      <h2 class="title">Проекты</h2>
      <projects-categories />
      <projects-catalog />
    </section>
    <about-section />
  </div>
</template>

<script>
import ProjectsCategories from "@/components/projects/ProjectsCategories.vue";
import ProjectsCatalog from "@/components/projects/ProjectsCatalog.vue";
import AboutSection from "@/components/projects/AboutSection.vue";

export default {
  components: {
    ProjectsCategories,
    ProjectsCatalog,
    AboutSection,
  },
};
</script>

<style scoped>
.projects {
  padding-top: 76px;
}
@media (max-width: 375px) {
  .projects {
    padding-top: 37px;
  }
}
</style>
