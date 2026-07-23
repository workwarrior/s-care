import { DashboardPage } from "../../features/dashboard/dashboard.page";
import { InspectionPage } from "../../features/inspection/inspection.page";
import { SettingsPage } from "../../features/settings/settings.page";
import { SyncPage } from "../../features/sync/sync.page";

export const routes = {

    "/": DashboardPage,

    "/inspection": InspectionPage,

    "/sync": SyncPage,

    "/settings": SettingsPage

};