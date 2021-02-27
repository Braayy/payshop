<template>
  <div class="app-footer">
    <h1>&copy; 2020 | Braayy Inc.</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter'
});
</script>

<style lang="scss" scoped>
.app-footer {
  height: 70px;
  display: flex;
  align-items: center;

  background: var(--secondary);
  color: var(--light);

  font-size: 15px;
}

.app-footer h1 {
  margin-left: 10px;
}
</style>
