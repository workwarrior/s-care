import { Header } from "./header";
import { BottomNav } from "./bottom-nav";

/**
 * App Shell
 * @param {string} content
 * @returns {string}
 */
export function AppShell(content){

    return `

        ${Header()}

        <main style="padding-bottom:80px;">

            ${content}

        </main>

        ${BottomNav()}

    `;

}