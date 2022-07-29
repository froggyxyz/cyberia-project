<template>
  <form class="form" @submit.prevent="onSubmit">
    <input
      type="text"
      :placeholder="placeHolderName"
      v-model="name"
      :class="placeHolderName === 'Введите корректное Имя' ? 'form-error' : ''"
    />
    <input
      type="email"
      :placeholder="placeHolderEmail"
      v-model="email"
      :class="
        placeHolderEmail === 'Введите корректный E-mail' ? 'form-error' : ''
      "
    />
    <input
      type="text"
      :placeholder="placeHolderPhone"
      v-model="phone"
      :class="
        placeHolderPhone === 'Введите корректный Номер телефона'
          ? 'form-error'
          : ''
      "
    />
    <textarea
      name="message"
      id="message"
      :placeholder="placeHolderMessage"
      v-model="message"
      :class="placeHolderMessage === 'Введите сообщение' ? 'form-error' : ''"
    ></textarea>
    <div class="form__bottom">
      <button type="submit">Отправить</button>
      <p>
        Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
      </p>
    </div>
    <p class="form-error" v-if="isError">
      Не удалось отрпавить заявку, повторите отправку позднее
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      placeHolderName: "Имя",
      placeHolderEmail: "E-mail",
      placeHolderPhone: "Телефон",
      placeHolderMessage: "Сообщение",
      isError: false,
    };
  },
  methods: {
    validateData() {
      let errors = 0;

      // Validate name
      if (this.name === null || this.name === undefined || this.name === "") {
        this.name = "";
        this.placeHolderName = "Введите корректное Имя";
        errors++;
      }
      // Validate email
      const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
      if (!this.email.match(emailReg)) {
        this.email = "";
        this.placeHolderEmail = "Введите корректный E-mail";
        errors++;
      }

      // Validate phone
      const phoneReg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      if (!this.phone.match(phoneReg)) {
        this.phone = "";
        this.placeHolderPhone = "Введите корректный Номер телефона";
      }

      // Validate message
      if (
        this.message === null ||
        this.message === undefined ||
        this.message === ""
      ) {
        this.message = "";
        this.placeHolderMessage = "Введите сообщение";
      }

      return errors;
    },
    onSubmit() {
      if (this.validateData() > 0) {
        return;
      }

      let formData = new FormData();
      formData.set("name", this.name.trim());
      formData.set("email", this.email);
      formData.set("phone", this.phone);
      formData.set("message", this.message.trim());

      fetch("https://backend.cyberia.studio/api/v1/feedbacks", {
        method: "POST",
        body: formData,
      }).catch(() => (this.isError = true));
    },
  },
};
</script>

<style scoped>
.form {
  display: grid;
  row-gap: 32px;
  max-width: 596px;
}

.form-error {
  font-family: var(--secondary-text-font);
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.222222222;
  color: #e83b3b;
}

.form-error::placeholder {
  color: #e83b3b;
}

.form > input,
.form > textarea {
  font-family: var(--secondary-text-font);
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.571428571;
  color: var(--main-text-color);

  padding: 17px;
  border: 1px solid #9aa8ba;
  border-radius: 8px;
  background: none;
  resize: none;
}

.form > textarea {
  height: 92px;
}

.form__bottom {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(209px, 1fr));
  gap: 40px;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
}

.form__bottom > button {
  min-width: 247px;
  padding: 20px 85px;
  background: #2d76f9;
  border-radius: 35px;
  border: none;

  font-family: var(--secondary-text-font);
  font-style: normal;
  font-weight: 300;
  font-size: 0.8125rem;
  line-height: 1.384615385;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s linear;
}

.form__bottom > button:active {
  background: #0041b8;
  transition: all 0.1s linear;
}

.form__bottom > p {
  font-family: var(--secondary-text-font);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--main-text-color);
}

@media (max-width: 505px) {
  .form__bottom > p {
    text-align: center;
  }
}

@media (max-width: 375px) {
  .form {
    row-gap: 22px;
  }
  .form > textarea {
    height: 139px;
  }
  .form__bottom {
    gap: 26px;
  }
  .form > input,
  .form > textarea,
  .form__bottom > button,
  .form__bottom > p,
  .form-error {
    font-size: 0.8125rem;
    line-height: 1.384615385;
  }
}
</style>
