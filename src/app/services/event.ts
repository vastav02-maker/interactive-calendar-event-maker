import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents() {
    return [
      {
        title: 'Team Meeting',
        date: '2026-05-25'
      },
      {
        title: 'Project Submission',
        date: '2026-05-27'
      },
      {
        title: 'Client Call',
        date: '2026-05-29'
      }
    ];
  }
}