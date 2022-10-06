<template>
  <nav class="nav-menu">
    <div class="nav-item">
      <div class="link-container">
        <router-link class="link-redirect box-with-shadow" to="/utopac">
          <v-icon name="co-media-play" scale="3"/>
        </router-link>
      </div>
    </div>
    <div class="nav-item">
      <div class="link-container">
        <router-link class="link-redirect box-with-shadow" to="/friends">
          <v-icon name="bi-people-fill" scale="3"/>
        </router-link>
      </div>
    </div>
    <div class="nav-item">
      <div class="link-container">
        <router-link class="link-redirect box-with-shadow" @click="onLogout" to="/">
          <v-icon name="co-exit-to-app" scale="3"/>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>

import {onLogout} from "./Auth0/Auth0";

export default {
  methods: {
    onLogout
  }
}
</script>

<style scoped lang="scss">

.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;

    .link-container {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .link-redirect {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin: 20px;
        width: 70px;
        height: 70px;
        padding: 0;
        border-radius: 50%;
        border: 5px solid rgb(255, 204, 0);
        background: linear-gradient(180deg, #1c2026, rgb(255, 204, 0));
        background-size: 800% 800%;

      }

      .link-redirect:hover {
        cursor: pointer;
        animation: gradiant 2s ease;
        transform: scale(1.1);
        transition-duration: 500ms;
        background-position: 50% 100%
      }

    }
  }
}
</style>
