<template>
  <app-notification ref="notification" />
  <app-header />
  <div class="app-view">
    <router-view></router-view>
  </div>
  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from "./components/app/AppHeader.vue";
import AppFooter from "./components/app/AppFooter.vue";
import AppNotification from "./components/app/AppNotification.vue";
import './app.scss';

export default defineComponent({
  name: 'App',
  components: { AppNotification, AppFooter, AppHeader }
});
</script>
