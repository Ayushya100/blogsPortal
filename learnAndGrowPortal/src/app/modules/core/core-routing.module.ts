import { Routes } from "@angular/router";

// Component
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const coreRoutes: Routes = [
    {
        path: '', component: PageNotFoundComponent,
        pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/',
        pathMatch: 'full'
    }
];