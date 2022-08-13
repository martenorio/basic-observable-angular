import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { persona, SharingService } from 'src/app/core/sharing/sharing.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent{
  data$:Observable<persona>;
  constructor(sharingServices:SharingService) { 
    this.data$ = sharingServices.SharingObservable;
  }
}
