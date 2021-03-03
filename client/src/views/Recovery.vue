<template>
  <div class="recovery center">
    <form @submit="handleSubmit" class='simpleform'>
      <p>Preencha seu e-mail e enviaremos um link para recuperar sua senha.</p>

      <input type="email" name="email" placeholder="E-mail" autocomplete="email" class="simpleform__input" required />
      <input type="submit" value="Enviar" class="simpleform__submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { notify } from '../util/notification';
import { useSimpleForm } from '../util/simpleform';

export default defineComponent({
  name: 'Recovery',

  setup() {
    const handleSubmit = useSimpleForm((values) => {
      const email = values['email'];

      if (!email.valid) {
        notify('E-mail invalid!', 'error');

        return;
      }

      notify('E-mail enviado! Verifique seu email e clique no link', 'info');
    }, {
      'email': (value) => value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/)
    });

    return { handleSubmit };
  }
});
</script>

<style lang="scss" scoped>
.recovery {
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
