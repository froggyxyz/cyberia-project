<template>
  <div class="projects__categories">
    <button
      v-for="category in categories"
      :key="category.id"
      :class="
        category.id === selectedCategory
          ? 'projects__category projects__category-active'
          : 'projects__category'
      "
      @click="selectCategory(category.id)"
    >
      {{ category.name }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      categories: "GET_PROJECTS_CATEGORIES",
      selectedCategory: "GET_SELECTED_CATEGORY_OF_PROJECTS",
    }),
  },
  methods: {
    ...mapMutations({
      selectCategory: "SET_SELECTED_CATEGORY_OF_PROJECTS",
    }),
  },
};
</script>

<style scoped>
.projects__categories {
  margin-bottom: 122px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 20px;
  justify-content: space-between;
}

.projects__category {
  font-family: var(--main-text-font);
  font-style: normal;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.2;
  color: var(--main-text-color);

  padding: 10px 29px;
  background: #2b2d3a;
  box-shadow: 0px 14px 61px rgba(23, 27, 44, 0.75);
  border-radius: 7px;
  border: none;
  cursor: pointer;
  transition: all 0.2s linear;
}

.projects__category-active,
.projects__category:hover {
  background: #2d76f9;
  transition: all 0.2s linear;
}

.projects__category:active {
  background: #0041b8;
  transition: all 0.1s linear;
}

@media (max-width: 960px) {
  .projects__category {
    font-size: 1rem;
    line-height: 1.375;
  }
}

@media (max-width: 517px) {
  .projects__categories {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 375px) {
  .projects__categories {
    margin-bottom: 70px;
  }
  .projects__category {
    font-size: 0.75rem;
    line-height: 1.333333333;
  }
}
</style>
