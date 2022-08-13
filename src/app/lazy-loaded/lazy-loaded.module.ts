import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';



@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyLoadedRoutingModule]
})
export class LazyLoadedModule { }
