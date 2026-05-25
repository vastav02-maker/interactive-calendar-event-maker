import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private eventsSource = new BehaviorSubject<any[]>([]);

  currentEvents = this.eventsSource.asObservable();

  constructor() { }

  updateEvents(events: any[]) {

    this.eventsSource.next(events);

  }

}