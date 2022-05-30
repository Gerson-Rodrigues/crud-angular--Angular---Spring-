import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../model/game';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  lista(){
    return this.httpClient.get<Game[]>(this.API)
    .pipe(
      first(),
      delay(2000),
      tap(courses => console.log(courses))
    );
  }
}
