<template>
  <div class="authenticate-container">
    <button @click="login(); this.isLoading = true;" v-if="!this.isLoading"
            class="login-button box-with-shadow">
      <span class="text-with-font ">Se connecter</span>
    </button>
    <LoadingComponent v-if="this.isLoading"/>
  </div>
</template>

<script>
import {useAuth0} from "@auth0/auth0-vue";
import LoadingComponent from "../components/Loading.vue";

export default {
  name: "Authentication-Page",
  components: {
    LoadingComponent
  },
  data() {
    return {
      isLoading: false
    }
  },
  setup() {
    const {loginWithRedirect} = useAuth0();

    return {
      login: async () => {
        loginWithRedirect().then();
      }
    };
  }
}
</script>

<style scoped lang="scss">

.authenticate-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 0;
    width: 20%;
    height: 10%;
    padding: 0;
    border-radius: 5px;
    border: 5px solid rgb(255, 204, 0);
    background: linear-gradient(180deg, #1c2026, rgb(255, 204, 0));
    background-size: 800% 800%;
  }

  .login-button:hover {
    cursor: pointer;
    animation: gradiant 2s ease;
    transform: scale(1.1);
    transition-duration: 500ms;
    background-position: 50% 100%
  }
}

</style>
