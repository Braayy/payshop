import { reactive } from 'vue';
import User from "./types/User";

const LOCAL_KEY = 'payshopState';

function loadFromLocal(): State | undefined {
  const string = localStorage.getItem(LOCAL_KEY);

  if (!string) return;

  return JSON.parse(string);
}

function saveToLocal() {
  const string = JSON.stringify(state);

  localStorage.setItem(LOCAL_KEY, string);
}

export interface State {
  theme: string,
  user: User | null
}

export interface StateSetter {
  setTheme(theme: string): void
}

const localState = loadFromLocal();

export const state = reactive<State & StateSetter>({
  theme: 'dark',
  user: {
    name: 'Brayan Gomes',
    email: 'braayy@payshop.com',
    token: 'sdsudidgs',
    avatar_url: 'https://cdn.discordapp.com/avatars/228978419000541184/79ba12e39427cca99367c52cdd604456.png?size=128'
  },
  ...localState,

  setTheme(theme: string) {
    this.theme = theme;

    saveToLocal();
  }
});
