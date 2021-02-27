<template>
  <div class="recovery center">
    <form @submit.prevent="handleSubmit">
      <p>Preencha seu e-mail e enviaremos um link para recuperar sua senha.</p>

      <input type="email" name="email" placeholder="E-mail" autocomplete="email" class="form-control" required />
      <input type="submit" value="Enviar" class="form-submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getInputValue } from '../util';
import { notify } from '../util/notification';

export default defineComponent({
  name: 'Recovery',

  setup() {
    function handleSubmit(event: { target: HTMLFormElement }) {
      const elements = event.target.elements;
      const email = getInputValue(elements, 'email');

      if (!email) {
        notification?.show('Empty email!', 'error');

        return;
      }

      if (!email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*/)) {
        notify('Invalid e-mail format!', 'error');

        return;
      }

      // TODO: Check if there is a account registered with this email

      // TODO: Request recovery

      notify('Check your email and follow the instructions!', 'info');
    }

    return { handleSubmit };
  }
});
</script>

<style lang="scss" scoped>
.recovery {
  width: 100%;
  height: 100%;

  form {
    width: 50%;
    height: 300px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    p {
      text-align: center;
      font-size: 30px;
    }
  }
}
</style>
