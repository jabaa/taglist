import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tags$ = this.http
    .get<{ tags: string[] }>('/api/tags')
    .pipe(map(({ tags }) => tags));
  constructor(private http: HttpClient) {}
}