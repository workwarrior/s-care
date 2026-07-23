import { routes } from "./routes";

export async function Router() {

    const hash = location.hash.replace("#", "") || "/";

    const pageFactory = routes[hash];

    if (!pageFactory) {

        return {
            html: `
                <div class="container py-4">
                    <h2>404</h2>
                    <p>Page Not Found</p>
                </div>
            `,
            bind() {},
            destroy() {}
        };

    }

    return await pageFactory();

}