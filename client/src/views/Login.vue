<!--suppress HtmlUnknownTarget -->
<template>
  <div class="login center">
    <form @submit="handleSubmit">
      <input type="email" name="email" placeholder="E-mail" autocomplete="email" class="simpleform__input" required />
      <input type="password" name="password" placeholder="Senha" autocomplete="current-password" class="simpleform__input" required />
      <router-link to="/recovery" class='simpleform__router-link'>Esqueci minha senha</router-link>
      <router-link to="/register" class='simpleform__router-link'>Criar uma conta</router-link>
      <input type="submit" value="Entrar" class="simpleform__submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { notify } from '../util/notification';
import { useSimpleForm } from '../util/simpleform';

export default defineComponent({
  name: 'Login',

  setup() {
    const handleSubmit = useSimpleForm((values) => {
      const email = values['email'];
      const password = values['password'];

      if (!email.valid) {
        notify('E-mail invalido!', 'error');

        return;
      }

      if (!password.valid) {
        notify('Senha invalida!', 'error');

        return;
      }

      // TODO: Make login request

      notify('Logado com sucesso', 'info');
    }, {
      'email': (value) => value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/)
    });

    return { handleSubmit };
  }
});
</script>

<style lang="scss" scoped>
.login {
  height: 100%;

  form {
    width: 50%;
    height: 300px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
