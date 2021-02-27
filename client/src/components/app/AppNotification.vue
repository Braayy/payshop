<template>
  <div class="app-notification" ref="notificationDiv" @click="hide">
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { text, notificationDiv, hide } from '../../util/notification';

export default defineComponent({
  name: 'AppNotification',

  setup() {
    return { text, notificationDiv, hide };
  }
});

export interface PublicAppNotification {
  show(string: string, type: 'info' | 'error' | 'warn'): void
}
</script>

<style lang="scss" scoped>
$delay: .5s;

.info {
  background: var(--info);
}

.warn {
  background: var(--warn);
}

.error {
  background: var(--error);
}

.show {
  margin-top: 10px !important;
  opacity: 1 !important;
}

.hide {
  margin-top: -30px !important;
  opacity: 0 !important;
}

.app-notification {
  padding: 20px;
  font-size: 20px;
  border-radius: 10px;
  opacity: 0;
  margin-top: -30px;
  cursor: pointer;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  transition: opacity $delay, margin-top $delay;
}
</style>
