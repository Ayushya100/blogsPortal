import { Routes } from "@angular/router";

// Components
import { IndexComponent } from "./components/index/index.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const coreRoutes: Routes = [
    {
        path: '', component: IndexComponent,
        pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFoundComponent,
        pathMatch: 'full'
    }
]