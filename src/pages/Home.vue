<template>
  <div class="main-app">
    <div class="main-clock">
      <h1 class="clock text-with-shadow">{{ clock }}</h1>
    </div>
    <div class="main-navigation-menu">
      <MainNavigation/>
    </div>
    <div class="main-title">
      <h1 class="text-design text-with-font text-with-shadow" style="font-size: 5rem">
        UTOPAC
      </h1>
    </div>
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";

export default {
  name: "Home-Page",
  components: {
    MainNavigation
  }, data() {
    return {
      clock: new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit", minute: "2-digit"
      })
    }
  },
  mounted() {
    setInterval(() => {
      this.clock = new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit", minute: "2-digit"
      })
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.main-app {
  height: 100vh;
  width: 100%;

  .main-clock {
    position: absolute;
    top: 5%;
    left: 5%;

    .clock {
      color: #1C2026;
      display: flex;
      justify-content: center;
      align-content: center;
      width: 100%;
      height: 100%;
      margin: 0;
      font-weight: bold;
      font-size: 5em;
      font-family: Roboto, sans-serif;
    }
  }

  .main-navigation-menu {
    position: absolute;
    left: 30%;
    right: 30%;
    bottom: 20%;
  }

  .main-title {
    position: absolute;
    top: 30%;
    right: 30%;
    left: 30%;
    width: 40%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
</style>
