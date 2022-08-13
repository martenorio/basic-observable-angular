import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface persona{
  name: string;
}

@Injectable()
export class SharingService {
  private sharingObservablePrivate: BehaviorSubject<persona> = new BehaviorSubject<persona>({name:'miguel'});

  get SharingObservable(){
    return this.sharingObservablePrivate.asObservable();
  }
  set SharingObservableData(data:persona){
    this.sharingObservablePrivate.next(data);
  }
}
