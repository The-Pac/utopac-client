<template>
  <div data-tauri-drag-region class="titlebar">
    <div class="titlebar-button" id="titlebar-minimize">
      <v-icon name="fa-regular-window-minimize" scale="1"/>
    </div>
    <div class="titlebar-button" id="titlebar-maximize">
      <v-icon name="fa-regular-window-maximize" scale="1"/>
    </div>
    <div class="titlebar-button" id="titlebar-close">
      <v-icon name="co-exit-to-app" scale="1"/>
    </div>
  </div>
</template>

<script>
import {appWindow} from "@tauri-apps/api/window";

export default {
  name: "CustomBar",
  mounted() {
    document.getElementById('titlebar-minimize').addEventListener('click', () => appWindow.minimize())
    document.getElementById('titlebar-maximize').addEventListener('click', () => appWindow.toggleMaximize())
    document.getElementById('titlebar-close').addEventListener('click', () => appWindow.close())
  }
}
</script>

<style scoped lang="scss">
.titlebar {
  height: 30px;
  background: #FFCC01;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  .titlebar-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }
}


.titlebar-button:hover {
  transform: scale(1.1);
}
</style>
