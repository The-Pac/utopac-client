<template>
  <ul id="pacman-ghosts">
    <li class="pacman">
      <img src="../../assets/img/pacman-open-mouth.svg" class="pacman-img" alt="pacman"/>
    </li>
    <li class="ghost">
      <img src="../../assets/img/ghost-red.svg" class="ghost-img" alt="ghost-red"/>
    </li>
    <li class="ghost">
      <img src="../../assets/img/ghost-blue.svg" class="ghost-img" alt="ghost-blue"/>
    </li>
    <li class="ghost">
      <img src="../../assets/img/ghost-purple.svg" class="ghost-img" alt="ghost-purple"/>
    </li>
    <li class="ghost">
      <img src="../../assets/img/ghost-orange.svg" class="ghost-img" alt="ghost-orange"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Loading-Component"
}
</script>

<style scoped lang="scss">
.pacman {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  list-style: none;
  min-width: 120px;
  transform: rotate(0deg);


  .pacman-img {
    transform: rotate(72deg);
    width: 30px;
    height: 30px;
    animation: pacman-eating .3s infinite;
  }
}

#pacman-ghosts {
  position: relative;
  padding: 0;
  margin: 0;
  min-height: 120px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pacman-chasing 4s infinite linear;
}

.ghost {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  list-style: none;
  min-width: 120px;


  .ghost-img {
    width: 30px;
    height: 30px;
  }
}

.ghost:nth-child(2) {
  transform: rotate(72deg);

  .ghost-img {
    transform: rotate(72deg);
  }
}

.ghost:nth-child(3) {
  transform: rotate(144deg);

  .ghost-img {
    transform: rotate(72deg);
  }
}

.ghost:nth-child(4) {
  transform: rotate(216deg);

  .ghost-img {
    transform: rotate(72deg);
  }
}

.ghost:nth-child(5) {
  transform: rotate(288deg);

  .ghost-img {
    transform: rotate(72deg);
  }
}

@keyframes pacman-chasing {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes pacman-eating {
  0% {
    content: url("../../assets/img/pacman-close-mouth.svg");
  }
  100% {
    content: url("../../assets/img/pacman-open-mouth.svg");
  }
}
</style>
