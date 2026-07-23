import { getState } from "../../core/state/app-state";

export function DashboardPage() {

    const { online, version } = getState();

    return `
        <div class="container py-3">

            <div class="d-flex justify-content-between align-items-center mb-3">

                <h2 class="m-0">Dashboard</h2>

                <span class="badge ${online ? "bg-success" : "bg-danger"}">
                    ${online ? "Online" : "Offline"}
                </span>

            </div>

            <div class="card p-3 mb-3">
                <h5>Versi Aplikasi</h5>
                <p class="mb-0">${version}</p>
            </div>

            <!-- Card lainnya tetap -->

        </div>
    `;
}