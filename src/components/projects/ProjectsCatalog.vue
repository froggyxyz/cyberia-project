<template>
  <div class="projects__catalog">
    <article
      class="projects__item"
      v-for="project in filteredProjects"
      :style="{
        background: `linear-gradient(360deg, #090b21 0%, rgba(49, 51, 65, 0) 70.08%), url(${project.image}) center`,
      }"
      :key="project.id"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="24"
          height="5.24892"
          rx="0.886243"
          transform="matrix(1 0 0 -1 0 24)"
          fill="white"
        />
        <rect
          width="13.5"
          height="5.24892"
          rx="0.886243"
          transform="matrix(1 0 0 -1 10.4945 13.5055)"
          fill="white"
        />
        <rect
          width="23.9951"
          height="5.24996"
          rx="0.886243"
          transform="matrix(0 1 1 0 0 0.00137329)"
          fill="white"
        />
        <rect
          width="13.4972"
          height="5.25"
          rx="0.886243"
          transform="matrix(0 1 1 0 10.4945 0)"
          fill="white"
        />
      </svg>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </article>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      projectsData: "GET_PROJECTS_DATA",
      projectsCategory: "GET_SELECTED_CATEGORY_OF_PROJECTS",
    }),
    filteredProjects() {
      let filteredArray = [];
      this.projectsData.forEach((project) => {
        project.categories.forEach((category) => {
          if (category.id === this.projectsCategory)
            filteredArray.push(project);
        });
      });
      return filteredArray;
    },
  },
};
</script>

<style scoped>
.projects__catalog {
  padding-bottom: 332px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  justify-items: center;
  gap: 2.5rem;
}

.projects__item {
  padding: 29px;
  min-height: 378px;
  max-width: 387px;
  border-radius: 6.2px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
}

.projects__item > h3 {
  margin: 8px 0 7px;
  font-family: var(--main-text-font);
  font-style: normal;
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 1.178571429;
  color: #ffffff;
}

.projects__item > p {
  font-family: var(--secondary-text-font);
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.571428571;
  color: #ffffff;
}

@media (max-width: 960px) {
  .projects__catalog {
    padding-bottom: 228px;
    gap: 1.5rem;
  }
}

@media (max-width: 428px) {
  .projects__catalog {
    padding-bottom: 113px;
    grid-template-columns: repeat(auto-fit, minmax(327px, 1fr));
    gap: 1.25rem;
  }
  .projects__item {
    min-height: 320px;
  }
  .projects__item > svg {
    width: 17px;
    height: 17px;
  }
  .projects__item > h3 {
    margin: 7px 0 6px;
    font-size: 1.125rem;
    line-height: 1.166666667;
  }
  .projects__item > p {
    font-size: 0.8125rem;
    line-height: 1.384615385;
  }
}
</style>
