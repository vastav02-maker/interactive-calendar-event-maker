import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from './services/event';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  events: any[] = [];

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }
}