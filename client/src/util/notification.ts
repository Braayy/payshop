import { ref } from 'vue';

export const text = ref<string | null>(null);
export const notificationDiv = ref<HTMLDivElement | null>(null);

let hideTimeout: number = 0;

export function notify(message: string, type: 'info' | 'error' | 'warn') {
  if (notificationDiv.value) {
    text.value = message;

    notificationDiv.value.classList.remove('hide', 'info', 'error', 'warn');
    notificationDiv.value.classList.add('show', type);

    hideTimeout && clearInterval(hideTimeout);

    hideTimeout = setInterval(() => {
      hide();
    }, 5000);
  }
}

export function hide() {
  if (notificationDiv.value) {
    notificationDiv.value.classList.remove('show');
    notificationDiv.value.classList.add('hide');

    hideTimeout && clearInterval(hideTimeout);
  }
}
