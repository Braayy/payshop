import { ref } from 'vue';

export const text = ref<string | null>(null);
export const notificationDiv = ref<HTMLDivElement | null>(null);

let hideTimeout: number = 0;

export function notify(message: string, type: 'info' | 'error' | 'warn') {
  if (notificationDiv.value) {
    text.value = message;

    notificationDiv.value.style.opacity = '1';
    notificationDiv.value.style.marginTop = '20px';

    notificationDiv.value.classList.remove('info', 'error', 'warn');
    notificationDiv.value.classList.add(type);

    hideTimeout && clearInterval(hideTimeout);

    hideTimeout = setInterval(() => {
      hide();
    }, 5000);
  }
}

export function hide() {
  if (notificationDiv.value) {
    notificationDiv.value.style.opacity = '0';
    notificationDiv.value.style.marginTop = '-30px';

    hideTimeout && clearInterval(hideTimeout);
  }
}
