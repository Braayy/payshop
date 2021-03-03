<template>
  <div class="register center">
    <form @submit="handleSubmit">
      <input type="text" name="name" placeholder="Nome" autocomplete="name" class="simpleform__input" required />
      <input type="text" name="email" placeholder="E-mail" autocomplete="email" class="simpleform__input" required />
      <input type="password" name="password" placeholder="Senha" autocomplete="new-password" class="simpleform__input" required />
      <input type="password" id="confirm-password" placeholder="Confirmar Senha" autocomplete="new-password" class="simpleform__input" required />
      <router-link to="/login" class='simpleform__router-link'>Já tenho uma conta</router-link>
      <input type="submit" value="Registrar" class="simpleform__submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { notify } from '../util/notification';
import { useSimpleForm } from '../util/simpleform';

export default defineComponent({
  name: 'Register',

  setup() {
    const handleSubmit = useSimpleForm((values) => {
      const name = values['name'];
      const email = values['email'];
      const password = values['password'];
      const confirmPassword = values['confirm-password'];

      if (!name.valid) {
        notify('Nome invalido!', 'error');

        return;
      }

      if (!email.valid) {
        notify('E-mail invalido!', 'error');

        return;
      }

      if (!password.valid) {
        notify('Senha invalida!', 'error');

        return;
      }

      if (!confirmPassword.valid) {
        notify('Senha invalida!', 'error');

        return;
      }

      if (password.value !== confirmPassword.value) {
        notify('Senhas diferentes!', 'error');

        return;
      }

      notify('Registrado com sucesso!', 'info');
    }, {
      'name': (value) => value.match(/^([a-zA-Z]+ ?)+$/),
      'email': (value) => value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/)
    });

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
