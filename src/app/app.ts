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

  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {

    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });

  }

  addOrUpdateEvent() {

    if (this.eventForm.valid) {

      if (this.editIndex === null) {

        this.events.push(this.eventForm.value);

      } else {

        this.events[this.editIndex] = this.eventForm.value;

        this.editIndex = null;

      }

      this.eventForm.reset();

    }

  }

  editEvent(index: number) {

    this.editIndex = index;

    this.eventForm.patchValue(this.events[index]);

  }

  deleteEvent(index: number) {

    this.events.splice(index, 1);

  }

}