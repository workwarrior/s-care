import { routes } from "./routes";

/**
 * Render current page
 * @returns {string}
 */
export function Router(){

    const hash = location.hash.replace("#", "") || "/";

    const page = routes[hash];

    if(page){

        return page();

    }

    return `
        <div class="container py-4">

            <h2>404</h2>

            <p>Page Not Found</p>

        </div>
    `;

}