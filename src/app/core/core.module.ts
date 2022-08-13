import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharingService } from './sharing/sharing.service';


@NgModule({
  imports: [ CommonModule ],
  providers: [SharingService]
})
export class CoreModule { }
