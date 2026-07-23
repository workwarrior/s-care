import { DashboardPage } from "../../modules/dashboard/dashboard.page";
import { InspectionPage } from "../../modules/inspection/pages/inspection.page";
import { SettingsPage } from "../../modules/settings/settings.page";
import { SyncPage } from "../../modules/sync/sync.page";

export const routes = {

    "/": DashboardPage,

    "/inspection": InspectionPage,

    "/sync": SyncPage,

    "/settings": SettingsPage

};