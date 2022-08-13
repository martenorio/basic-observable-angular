import { Component } from '@angular/core';
import { SharingService } from './core/sharing/sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  constructor(sharingServices:SharingService) {
    sharingServices.SharingObservableData = {name: 'La informacion en el observable camnbio'}
  } 
}
