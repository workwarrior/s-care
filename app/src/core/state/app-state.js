/**
 * Global State S-Care
 */

const state = {

    // Application
    user: null,
    online: navigator.onLine,
    version: "0.1.0",

    // Dashboard
    inspectionToday: 0,
    syncQueue: 0,

    // UI State
    ui: {

        inspection: {

            showForm: false

        }

    }

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

export function updateUI(page, data) {

    Object.assign(state.ui[page], data);

    listeners.forEach(fn => fn(state));

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