<template>
  <div class="not-found">
    <h1>Pagina não encontrada!</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound'
});
</script>

<style lang="scss" scoped>
.not-found h1 {
  text-align: center;
  margin-top: 20px;
}
</style>
