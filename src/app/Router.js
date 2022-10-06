import Authentication from "../pages/Authentication.vue";
import {createRouter, createWebHistory} from "vue-router";
import UtopacHome from "../pages/UtopacHome.vue";
import UtopacIrl from "../pages/UtopacIrl.vue";
import UtopacIgl from "../pages/UtopacIgl.vue";
import Error from "../pages/Error.vue";
import {auth0} from "../main.js";
import {isPermissionGranted, requestPermission, sendNotification} from "@tauri-apps/api/notification";
import Home from "../pages/Home.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/authentication', name: 'Authentication', component: Authentication},
    {path: '/utopac', name: 'Utopac', component: UtopacHome},
    {path: '/utopacIrl', name: 'UtopacIrl', component: UtopacIrl},
    {path: '/utopacIgl', name: 'UtopacIgl', component: UtopacIgl},
    {path: "/:catchAll(.*)", name: 'Error', component: Error}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach(async (to, from, next) => {
    /*if (!auth0.isAuthenticated.value && to.name !== 'Authentication') {
        next({name: 'Authentication'})
    } else {

    }*/
    next()

    /*if (auth0.isAuthenticated.value && from.name === 'Authentication') {
        let permissionGranted = await isPermissionGranted();
        if (!permissionGranted) {
            const permission = await requestPermission();
            permissionGranted = permission === 'granted';
        }
        if (permissionGranted) {
            sendNotification({title: "Statut de connexion", body: 'Tu es connecté'});
        }
    }*/
})

export default router;
