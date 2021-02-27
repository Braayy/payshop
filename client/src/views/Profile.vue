<template>
  <div class='profile center'>
    <form @submit.prevent='handleSubmit'>
      <img :src='state.user?.avatar_url'>
      <input type='text' name='name' :value='state.user?.name' autocomplete='name' class='form-control' required />
      <input type='email' name='email' :value='state.user?.email' autocomplete='email' class='form-control' required />
      <input type='password' name='password' placeholder='Alterar senha' autocomplete='new-password'
             class='form-control' />
      <input type='password' id='confirm-password' placeholder='Confirmar senha' autocomplete='new-password'
             class='form-control' />
      <input type='submit' value='Salvar' class='form-submit' />
    </form>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

import { state } from '../store';
import { notify } from '../util/notification';
import { getInputValue } from '../util';

export default defineComponent({
  name: 'Profile',

  setup() {
    function handleSubmit(event: { target: HTMLFormElement }) {
      const elements = event.target.elements;
      const name = getInputValue(elements, 'name');
      const email = getInputValue(elements, 'email');
      const password = getInputValue(elements, 'password');
      const confirmPassword = getInputValue(elements, 'confirm-password');

      if (!name || !email) {
        notify('Empty name or email!', 'error');

        return;
      }

      if (!name.match(/^[a-zA-Z0-9 ]+$/)) {
        notify('Invalid name!', 'error');

        return;
      }

      if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/)) {
        notify('Invalid e-mail format!', 'error');

        return;
      }

      if (password !== '' && password !== confirmPassword) {
        notify('Different passwords!', 'error');

        return;
      }

      notify('Perfil salvo', 'info');

      // TODO: Make request request
    }

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
