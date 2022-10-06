<template>
  <CustomBar/>
  <router-view/>
</template>

<script>

import CustomBar from "../components/CustomBar.vue";

export default {
  components: {CustomBar}
}
</script>

<style lang="scss">
body {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: black;
}


@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../../assets/font/Roboto-Medium.ttf') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@keyframes gradiant {
  0% {
    background-position: 50% 0
  }
  100% {
    background-position: 50% 100%
  }
}

.box-with-shadow {
  box-shadow: 0 0 2px rgb(255, 204, 0),
  0 1px 0 rgb(236, 190, 3),
  0 2px 0 rgb(217, 175, 6),
  0 3px 0 rgb(198, 161, 10),
  0 4px 0 rgb(179, 147, 13),
  0 5px 0 rgb(160, 132, 16),
  0 6px 0 rgb(142, 118, 19),
  0 7px 0 rgb(123, 104, 22),
  0 8px 0 rgb(104, 89, 25),
  0 9px 0 rgb(85, 75, 29),
  0 10px 0 rgb(66, 61, 32),
  0 11px 10px rgb(47, 46, 35),
  0 0 10px rgba(28, 32, 38, .2);
}

.text-with-shadow {
  text-shadow: 0 0 2px rgb(255, 204, 0),
  0 1px 0 rgb(236, 190, 3),
  0 2px 0 rgb(217, 175, 6),
  0 3px 0 rgb(198, 161, 10),
  0 4px 0 rgb(179, 147, 13),
  0 5px 0 rgb(160, 132, 16),
  0 6px 0 rgb(142, 118, 19),
  0 7px 0 rgb(123, 104, 22),
  0 8px 0 rgb(104, 89, 25),
  0 9px 0 rgb(85, 75, 29),
  0 10px 0 rgb(66, 61, 32),
  0 11px 10px rgb(47, 46, 35),
  0 0 10px rgba(28, 32, 38, .2);
}

.text-design {
  color: #1C2026;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0;
  transform-style: preserve-3d;
}

.text-with-font {
  font-weight: bold;
  font-family: Roboto, sans-serif;
}

</style>
