import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes
import { coreRoutes } from './modules/core/core-routing.module';
import { blogsRoutes } from './modules/blogs/blogs.routing.module';

const routes: Routes = [
  ...coreRoutes,
  ...blogsRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
