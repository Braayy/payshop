<!--suppress HtmlUnknownTarget -->
<template>
  <div class="login center">
    <form @submit.prevent="handleSubmit">
      <input type="email" name="email" placeholder="E-mail" autocomplete="email" class="form-control" required />
      <input type="password" name="password" placeholder="Senha" autocomplete="current-password" class="form-control" required />
      <router-link to="/recovery">Esqueci minha senha</router-link>
      <router-link to="/register">Criar uma conta</router-link>
      <input type="submit" value="Entrar" class="form-submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { notify } from '../util/notification';
import { getInputValue } from '../util';

export default defineComponent({
  name: 'Login',

  setup() {
    function handleSubmit(event: { target: HTMLFormElement }) {
      const elements = event.target.elements;
      const email = getInputValue(elements, 'email');
      const password = getInputValue(elements, 'password');

      if (!email || !password) {
        notify('Empty email or password!', 'error');

        return;
      }

      if (!email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*/)) {
        notify('Invalid e-mail format!', 'error');

        return;
      }

      // TODO: Make login request
    }

    return { handleSubmit };
  }
});
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;

  form {
    width: 50%;
    height: 300px;

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
