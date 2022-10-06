<template>
  <div class="choose-mode">
    <div class="title-container">
      <h1 class="text-design text-with-font text-with-shadow" style="font-size: 3rem">Choisi ton mode de jeu</h1>
    </div>
    <div class="mode-container">
      <div class="mode-card box-with-shadow" @click.prevent="mode.isAvailable ? this.$router.push(mode.url) : null"
           v-for="(mode,modeIndex) in modes" :key="modeIndex">
        <div v-if="mode.isAvailable" class="image-card">
          <img :src="mode.imageSrc.src" :alt="mode.imageSrc.alt"
               loading="lazy"/>
        </div>
        <div v-else class="image-card">
          <h2 class="text-design text-with-font" style="color: grey;text-align: center;">Coming Soon...</h2>
        </div>
        <div class="title-description-container">
          <h2 class="text-with-font text-with-shadow" style="color: #1C2026;">
            {{ mode.title }}
          </h2>
          <div class="description-container">
            <p class="text-with-font description">
              {{ mode.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Utopac-Home-Page",
  data() {
    return {
      modes: [
        {
          title: 'IRL',
          imageSrc: {
            src: '/',
            alt: 'in real life mode image'
          },
          url: '/utopacIrl',
          isAvailable: true,
          description: 'Mode de jeu dans la réalité'
        },
        {
          title: 'IGL',
          imageSrc: {
            src: '/',
            alt: 'in game mode image'
          },
          url: '/utopacIgl',
          isAvailable: false,
          description: 'Mode de jeu virtuel'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.choose-mode {
  position: absolute;
  right: 20%;
  left: 20%;
  top: 20%;
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .title-container {
    width: 100%;
    height: 20%;
  }

  .mode-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;

    .mode-card {
      border: 5px solid rgb(255, 204, 0);
      width: 15vw;
      height: 80%;
      margin: 20px;
      padding: 10px;
      border-radius: 10px;
      background: linear-gradient(180deg, #1c2026, rgb(255, 204, 0));
      background-size: 800% 800%;

      .image-card {
        box-shadow: inset 0 0 10px 1px #000000;
        width: 100%;
        min-height: 50%;
        background-color: #1c2026;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .title-description-container {
        height: 45%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .description-container {
          box-shadow: inset 0 0 10px 1px #000000;
          background-color: #1c2026;
          border-radius: 10px;
          padding: 10px;
          width: 90%;
          height: 100%;

          .description {
            margin: 0;
            color: white;
          }
        }
      }
    }

    .mode-card:hover {
      cursor: pointer;
      animation: gradiant 2s ease;
      transform: scale(1.05);
      transition-duration: 500ms;
      background-position: 50% 100%
    }
  }
}
</style>
