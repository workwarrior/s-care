export function InspectionForm() {

    return `

        <div class="card mb-3">

            <div class="card-body">

                <div class="mb-3">

                    <label class="form-label">

                        Judul

                    </label>

                    <input
                        id="title"
                        class="form-control">

                </div>

                <div class="mb-3">

                    <label class="form-label">

                        Lokasi

                    </label>

                    <input
                        id="location"
                        class="form-control">

                </div>

                <button
                    id="btn-save-inspection"
                    class="btn btn-primary w-100">

                    Simpan

                </button>

            </div>

        </div>

    `;

}