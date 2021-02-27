<template>
  <div class="app-header">
    <div class="logo center">
      <h1>PayShop</h1>
    </div>
    <div class="navbar">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/about">Sobre</router-link></li>
        <li><router-link to="/account">Contato</router-link></li>
      </ul>
    </div>
    <div class="info center">
      <div class="info-content center">
        <div class="info-user center">
          <img v-if="state.user" :src="state.user?.avatar_url" @click="goto('/profile')">
          <user-icon v-else @click="goto('/login')" />
        </div>
        <sun-icon v-if="state.theme === 'dark'" class="info-theme" @click="toggleTheme" />
        <moon-icon v-else class="info-theme" @click="toggleTheme" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import UserIcon from '../../assets/user.svg';
import SunIcon from '../../assets/sun.svg';
import MoonIcon from '../../assets/moon.svg';

import { state } from '../../store'

export default defineComponent({
  name: 'AppHeader',
  components: { UserIcon, SunIcon, MoonIcon },

  setup() {
    const router = useRouter();

    function toggleTheme() {
      if (state.theme === 'dark') {
        state.setTheme('light');

        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      } else {
        state.setTheme('dark');

        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      }

      applyTheme();
    }

    function applyTheme() {
      if (state.theme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
    }

    function goto(path: string) {
      router.push(path);
    }

    applyTheme();

    return { toggleTheme, goto, state };
  }
});
</script>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 25%;
    height: 100%;

    h1 {
      font-size: 40px;
    }
  }

  .navbar {
    flex-grow: 2;

    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;

      li a {
        color: var(--action);
        text-decoration: none;
        font-size: 25px;
      }
    }
  }

  .info {
    width: 25%;
    height: 100%;

    .info-content {
      .info-user {
        width: 45px;
        height: 45px;

        background: var(--secondary);
        border-radius: 50%;

        cursor: pointer;

        svg {
          width: 70%;
          height: 70%;
          color: var(--light);
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .info-theme {
        width: 25px;
        height: 25px;
        margin-left: 10px;

        fill: var(--text);
        cursor: pointer;
      }
    }
  }
}
</style>
