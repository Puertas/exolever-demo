import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { Consultant } from '../models/consultant.model';

@Injectable()
export class ConsultantsService {
  consultants: Consultant[];
  consultantsChanged = new Subject<Consultant[]>();

  constructor(private http: HttpClient) { }

  storeConsultants(refresh = false): void {
    if (refresh || !this.consultants) {
      this.http.get<Consultant[]>('http://demopeople.exolever.com/api/consultants/').subscribe(
        data => {
          this.setConsultants(data);
        }
      );
    } else {
      this.setConsultants(this.consultants);
    }
  }

  setConsultants(consultants: Consultant[]): void {
    this.consultants = consultants;
    this.consultantsChanged.next(this.consultants.slice());
  }
  getConsultants(): Consultant[] {
    return this.consultants.slice();
  }

  getConsultant(id: number): Promise<Consultant> {
    return new Promise((resolve) => {
      if (this.consultants) {
        resolve(this.consultants[id - 1]);
      } else {
        this.http.get<Consultant>(`http://demopeople.exolever.com/api/consultants/${id}/`).subscribe(
          data => {
            resolve(data);
          }
        );
      }
    });
  }

 }
