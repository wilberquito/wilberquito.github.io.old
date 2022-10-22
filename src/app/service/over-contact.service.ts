import { Injectable } from '@angular/core';
import {Subject} from 'rxjs' 

@Injectable({
  providedIn: 'root',
})
export class OverContactService {

   subject  = new Subject<boolean>()

  constructor() { }

  public stream() {
      return this.subject.asObservable()
    }

    public next(value: boolean) {
        this.subject.next(value)
    }
}
