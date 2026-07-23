/**
 * Bottom Navigation
 * @returns {string}
 */
export function BottomNav(){

    return `

    <nav
        class="navbar bg-white border-top fixed-bottom">

        <div class="container-fluid d-flex justify-content-around">

            <a href="#/" class="btn">
                <i class="bi bi-house fs-4"></i>
            </a>

            <a href="#/inspection" class="btn">
                <i class="bi bi-clipboard-check fs-4"></i>
            </a>

            <a href="#/sync" class="btn">
                <i class="bi bi-arrow-repeat fs-4"></i>
            </a>

            <a href="#/settings" class="btn">
                <i class="bi bi-gear fs-4"></i>
            </a>

        </div>

    </nav>

    `;

}