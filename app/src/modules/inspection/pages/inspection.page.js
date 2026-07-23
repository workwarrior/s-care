import { InspectionService } from "../services/inspection.service.js";
import { InspectionForm } from "../components/inspection-form.js";
import { getState, updateUI } from "../../../core/state/app-state.js";

const { ui } = getState();
const service = new InspectionService();

export async function InspectionPage() {

    const result = await service.getAll();

    const inspections = result.success
        ? result.data
        : [];

    return {

        html: `

            <div class="container py-3">

                <div class="d-flex justify-content-between align-items-center mb-3">

                    <h3>Inspection</h3>

                    <button
                        class="btn btn-primary"
                        id="btn-add-inspection">

                        <i class="bi bi-plus-lg"></i>

                    </button>

                </div>

                ${
                    ui.inspection.showForm
                        ? InspectionForm()
                        : ""
                }

                <div id="inspection-list">

                    ${
                        inspections.length === 0
                        ? `
                            <div class="text-center text-muted mt-5">
                                Belum ada data
                            </div>
                        `
                        : inspections.map(item => `
                            <div class="card mb-2">
                                <div class="card-body">
                                    <h5>${item.title}</h5>
                                    <small>${item.location}</small>
                                </div>
                            </div>
                        `).join("")
                    }

                </div>

            </div>

        `,

        bind() {

            const button = document.querySelector("#btn-add-inspection");

            if (!button) return;

            button.onclick = () => {

                updateUI("inspection", {

                    showForm: true

                });

            };

        },

        destroy() {

            // Belum ada resource yang dibersihkan

        }

    };

}