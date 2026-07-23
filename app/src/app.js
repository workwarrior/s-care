import { AppShell } from "./core/ui/app-shell";
import { Router } from "./core/router/router";
import { subscribe } from "./core/state/app-state";

const app=document.querySelector("#app");

function render(){

    app.innerHTML=AppShell(

        Router()

    );

}

subscribe(render);

window.addEventListener("hashchange",render);

render();