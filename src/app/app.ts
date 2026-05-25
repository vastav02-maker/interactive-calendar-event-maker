import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  events: any[] = [];

  eventForm;

  editId: number | null = null;

  apiUrl = 'http://localhost:3000/events';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {

    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {

    this.http.get<any[]>(this.apiUrl)
      .subscribe(data => {
        this.events = data;
      });

  }

  addOrUpdateEvent() {

    if (this.eventForm.valid) {

      if (this.editId === null) {

        this.http.post(this.apiUrl, this.eventForm.value)
          .subscribe(() => {

            this.loadEvents();

            this.eventForm.reset();

          });

      } else {

        this.http.put(
          `${this.apiUrl}/${this.editId}`,
          this.eventForm.value
        ).subscribe(() => {

          this.loadEvents();

          this.eventForm.reset();

          this.editId = null;

        });

      }

    }

  }

  editEvent(event: any) {

    this.editId = event.id;

    this.eventForm.patchValue({
      title: event.title,
      date: event.date
    });

  }

  deleteEvent(id: number) {

    this.http.delete(`${this.apiUrl}/${id}`)
      .subscribe(() => {

        this.loadEvents();

      });

  }

}