<template>
  <div class="register center">
    <form @submit.prevent="handleSubmit">
      <input type="text" name="name" placeholder="Nome" autocomplete="name" class="form-control" required />
      <input type="text" name="email" placeholder="E-mail" autocomplete="email" class="form-control" required />
      <input type="password" name="password" placeholder="Senha" autocomplete="new-password" class="form-control" required />
      <input type="password" id="confirm-password" placeholder="Confirmar Senha" autocomplete="new-password" class="form-control" required />
      <router-link to="/login">Já tenho uma conta</router-link>
      <input type="submit" value="Registrar" class="form-submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { notify } from '../util/notification';
import { getInputValue } from '../util';

export default defineComponent({
  name: 'Register',

  setup() {
    function handleSubmit(event: { target: HTMLFormElement }) {
      const elements = event.target.elements;
      const name = getInputValue(elements, 'name');
      const email = getInputValue(elements, 'email');
      const password = getInputValue(elements, 'password');
      const confirmPassword = getInputValue(elements, 'confirm-password');

      if (!name || !email || !password || !confirmPassword) {
        notify('Empty name, email or password!', 'error');

        return;
      }

      if (!name.match(/[a-zA-Z0-9]+/)) {
        notify('Invalid name!', 'error');

        return;
      }

      if (!email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*/)) {
        notify('Invalid e-mail format!', 'error');

        return;
      }

      if (password !== confirmPassword) {
        notify('Different passwords!', 'error');

        return;
      }

      // TODO: Make request request
    }

    return { handleSubmit };
  }
});
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;

  form {
    width: 50%;
    height: 400px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    a {
      color: var(--action);
      text-decoration: none;
      text-align: right;
    }
  }
}
</style>
