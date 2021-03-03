<template>
  <div class='contact center'>
    <form @submit="handleSubmit">
      <input type="email" name="email" placeholder="E-mail" autocomplete="email" class="simpleform__input" required />
      <input type="text" name="subject" placeholder="Assunto" autocomplete='off' class="simpleform__input" required />
      <textarea name='message' placeholder='Mensagem' class='simpleform__textarea' autocomplete='off' required></textarea>
      <input type="submit" value="Enviar" class="simpleform__submit" />
    </form>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { notify } from '../util/notification';
import { useSimpleForm } from '../util/simpleform';

export default defineComponent({
  name: 'Contact',

  setup() {
    const handleSubmit = useSimpleForm((values) => {
      const email = values['email'];
      const subject = values['subject'];
      const message = values['message'];

      if (!email.valid) {
        notify('E-mail invalido!', 'error');

        return;
      }

      if (!subject.valid) {
        notify('Assunto invalido!', 'error');

        return;
      }

      if (!message.valid) {
        notify('Mensagem invalida!', 'error');

        return;
      }

      // TODO: Make contact request

      notify('Mensagem enviada!', 'info');
    }, {
      'email': (value) => value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/),
      'subject': (value) => value.match(/^([a-zA-Z0-9]+ ?)+$/)
    });

    return { handleSubmit };
  }
});
</script>

<style lang='scss' scoped>
.contact {
  height: 100%;

  form {
    width: 50%;
    height: 500px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
