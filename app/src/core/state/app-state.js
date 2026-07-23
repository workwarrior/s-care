/**
 * Global State S-Care
 */

const state = {

    user: null,

    online: navigator.onLine,

    syncQueue: 0,

    version: "0.1.0",

    inspectionToday: 0

};

const listeners = [];

/**
 * Mengambil state saat ini
 */
export function getState(){

    return state;

}

/**
 * Mengubah state
 */
export function setState(data){

    Object.assign(state,data);

    listeners.forEach(fn=>fn(state));

}

/**
 * Subscribe perubahan state
 */
export function subscribe(fn){

    listeners.push(fn);

}

window.addEventListener("online", () => {
    setState({ online: true });
});

window.addEventListener("offline", () => {
    setState({ online: false });
});