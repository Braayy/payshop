<template>
  <p>{{ route.params.id }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Transaction',

  setup() {
    const route = useRoute();

    return { route };
  }
});
</script>

<style lang="scss" scoped>

</style>
