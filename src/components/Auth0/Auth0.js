import {auth0} from "../../main.js";

export function onLogout() {
    auth0.logout({returnTo: window.location.origin}).then();
}

export function onLogin() {
    auth0.loginWithRedirect({returnTo: window.location.origin}).then(response => {
        console.log(response)
    });
}



