import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensRoutingModule } from './screens-routing.module';
import { RidesComponent } from './rides/rides.component';



@NgModule({
  declarations: [
    RidesComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
  ]
})
export class ScreensModule { }
