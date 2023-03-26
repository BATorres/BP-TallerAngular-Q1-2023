import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RidesComponent } from './rides/rides.component';

const routes: Routes = [
  {
    path: 'rides',
    component: RidesComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
