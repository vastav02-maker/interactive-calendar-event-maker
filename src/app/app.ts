import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  events: any[] = [
    {
      title: 'Team Meeting',
      date: '2026-05-25'
    },
    {
      title: 'Project Submission',
      date: '2026-05-27'
    }
  ];

  eventForm;

  constructor(private fb: FormBuilder) {

    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });

  }

  addEvent() {

    if (this.eventForm.valid) {

      this.events.push(this.eventForm.value);

      this.eventForm.reset();

    }

  }
}