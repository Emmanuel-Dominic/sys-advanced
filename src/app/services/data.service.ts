import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getData() {
    return of('Products, Angular Advanced Concepts').pipe(delay(3000));
  }
}
