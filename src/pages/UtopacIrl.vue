<template>
  <div class="game-irl">
    <div class="keys">
      <ul class="keys-move">
        <li id="key-z" :class="['key-container']">
          <span>Z</span>
        </li>
        <li id="key-q" :class="['key-container']">
          <span>Q</span>
        </li>
        <li id="key-s" :class="['key-container']">
          <span>S</span>
        </li>
        <li id="key-d" :class="['key-container']">
          <span>D</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {emit} from "@tauri-apps/api/event"

export default {
  name: "Utopac-Irl-Page",
  mounted() {
    window.addEventListener('keydown', async (event) => {
      switch (event.key.toLowerCase()) {
        case "z":
          document.getElementById("key-z").className = "key-container selected";
          break
        case "q":
          document.getElementById("key-q").className = "key-container selected";
          break
        case "s":
          document.getElementById("key-s").className = "key-container selected";
          break
        case "d":
          document.getElementById("key-d").className = "key-container selected";
          break
        default:
          break
      }
      await emit('on_key_down', {key: event.key.toLowerCase(), is_repeat: event.repeat}).then()
    })
    window.addEventListener('keyup', async (event) => {
      switch (event.key.toLowerCase()) {
        case "z":
          document.getElementById("key-z").className = "key-container";
          break
        case "q":
          document.getElementById("key-q").className = "key-container";
          break
        case "s":
          document.getElementById("key-s").className = "key-container";
          break
        case "d":
          document.getElementById("key-d").className = "key-container";
          break
        default:
          break
      }
    })
  }
}
</script>

<style scoped lang="scss">
.game-irl {
  width: 100%;
  height: 100%;

  .keys {
    position: absolute;
    left: 5%;
    bottom: 5%;

    .keys-move {
      display: grid;
      margin: 0;
      padding: 0;

      .key-container {
        margin: 5px;
        width: 50px;
        height: 50px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFCC01;
        border: #FFCC01 3px solid;
        border-radius: 5px;
        transition: transform .1s;
      }

      .selected {
        transform: scale(1.1);
      }
    }

    .keys-move > .key-container:nth-child(1) {
      grid-column: 2;
      grid-row: 1;
    }

    .keys-move > .key-container:nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    }

    .keys-move > .key-container:nth-child(3) {
      grid-column: 2;
      grid-row: 2;
    }

    .keys-move > .key-container:nth-child(4) {
      grid-column: 3;
      grid-row: 2;
    }
  }
}
</style>
