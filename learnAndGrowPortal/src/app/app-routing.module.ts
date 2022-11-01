import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { blogRoutes } from './modules/blogs/blogs-routing.module';
import { coreRoutes } from './modules/core/core-routing.module';

const routes: Routes = [
  ...blogRoutes,
  ...coreRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
