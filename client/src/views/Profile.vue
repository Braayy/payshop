<template>
  <div class='profile center'>
    <form @submit.prevent='handleSubmit'>
      <img :src='state.user?.avatar_url'>
      <input type='text' name='name' :value='state.user?.name' autocomplete='name' class='simpleform__input' required />
      <input type='email' name='email' :value='state.user?.email' autocomplete='email' class='simpleform__input' required />
      <input type='password' name='password' placeholder='Alterar senha' autocomplete='new-password' class='simpleform__input' />
      <input type='password' id='confirm-password' placeholder='Confirmar senha' autocomplete='new-password' class='simpleform__input' />
      <input type='submit' value='Salvar' class='simpleform__submit' />
    </form>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

import { state } from '../store';
import { notify } from '../util/notification';
import { useSimpleForm } from '../util/simpleform';

export default defineComponent({
  name: 'Profile',

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

      notify('Perfil salvo!', 'info');
    }, {
      'name': (value) => value.match(/^([a-zA-Z]+ ?)+$/),
      'email': (value) => value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/)
    });

    return { state, handleSubmit };
  }
});
</script>

<style lang='scss' scoped>
.profile {
  width: 100%;
  height: 100%;

  form {
    width: 50%;
    height: 100%;
    max-height: 500px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      margin: 0 auto;
    }
  }
}
</style>
