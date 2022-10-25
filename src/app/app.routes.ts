import { Routes } from "@angular/router";
import { UserProfileComponent} from "./user-profile/user-profile.component";

const routes: Routes = [
    { path: 'user-profile', component: UserProfileComponent },
    { path: '', redirectTo: '/user-profile', pathMatch: 'full' }
];

export default routes;