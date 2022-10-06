import {createApp} from 'vue'
import App from './app/App.vue'
import {createAuth0} from '@auth0/auth0-vue';
import {addIcons, OhVueIcon} from "oh-vue-icons";
import {CoMediaPlay, CoExitToApp} from "oh-vue-icons/icons/co";
import {BiPeopleFill} from "oh-vue-icons/icons/bi";
import { FaRegularWindowMaximize } from "oh-vue-icons/icons";
import { FaRegularWindowMinimize } from "oh-vue-icons/icons";



import {invoke} from "@tauri-apps/api";
import router from "./app/Router.js";

const app = createApp(App)


//ICONS
addIcons(CoMediaPlay, BiPeopleFill, CoExitToApp,FaRegularWindowMaximize,FaRegularWindowMinimize)
app.component("v-icon", OhVueIcon);

//ROUTES
app.use(router)

//AUTH0
export const auth0 = createAuth0({
    domain: "dev-7rcbqe-p.us.auth0.com",
    client_id: "H6b8H2DCr8RIbfV1bMqhQNoy5Xw1pQOr",
    redirect_uri: window.location.origin,
})


document.addEventListener('DOMContentLoaded', async () => {
    //enleve le splascreen
    setTimeout(() => {
        invoke('close_splashscreen').then()
    }, 3000)
})

app.use(auth0);

//MOUNT
app.mount('#app');
