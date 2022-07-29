<template>
  <section class="about">
    <div class="about__inner container">
      <div class="about__content">
        <img src="../../assets/about/about-image.png" alt="About image" />
        <h2>Расскажите о вашем проекте</h2>
        <p>
          Поделитесь с нами информацией, чем мы можем быть полезны: реализовать
          идею или выделить разработчиков для ИТ-команды. Чем больше вы нам
          расскажете — тем продуктивнее будет дальнейшее обсуждение.
        </p>
      </div>
      <form-component />
    </div>
  </section>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";

export default {
  components: {
    FormComponent,
  },
};
</script>

<style scoped>
.about {
  padding: 95px 0;
  background: #252631;
}

.about__inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(418px, 1fr));
  justify-content: space-between;
  row-gap: 24px;
}

.about__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 455px;
}

.about__content > h2 {
  margin: 14px 0 30px;
  font-family: var(--main-text-font);
  font-style: normal;
  font-weight: 500;
  font-size: 2.375rem;
  line-height: 1.184210526;

  color: var(--main-text-color);
}

.about__content > p {
  font-family: var(--secondary-text-font);
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.571428571;
  color: #eff3ff;
}

@media (max-width: 960px) {
  .about__inner {
    justify-items: center;
  }

  .about__content {
    max-width: 595px;
  }
}

@media (max-width: 465px) {
  .about__inner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(326px, 1fr));
    justify-content: space-between;
    row-gap: 24px;
  }
}
@media (max-width: 375px) {
  .about {
    padding: 60px 0 39px;
  }
  .about__content {
    flex-direction: row;
    align-items: center;
  }
  .about__content > img {
    width: 76px;
    margin-right: 28px;
  }
  .about__content > h2 {
    margin: 0;
    font-size: 1.3125rem;
    line-height: 1.19047619;
  }
  .about__content > p {
    display: none;
  }
}
</style>
