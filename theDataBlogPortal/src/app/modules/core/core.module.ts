import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    PageNotFoundComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  exports: [
    MainComponent
  ]
})
export class CoreModule { }
