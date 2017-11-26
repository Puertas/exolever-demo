import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { Consultant } from '../models/consultant.model';

@Injectable()
export class ConsultantsService {
  consultants: Consultant[];
  consultantsChanged = new Subject<Consultant[]>();

  constructor(private http: HttpClient) { }

  storeConsultants(): void {
    this.http.get<Consultant[]>('http://demopeople.exolever.com/api/consultants/').subscribe(
      data => {
        this.setConsultants(data);
      }
    );
  }

  setConsultants(consultants: Consultant[]): void {
    this.consultants = consultants;
    this.consultantsChanged.next(this.consultants.slice());
  }
  getConsultants(): Consultant[] {
    return this.consultants.slice();
  }

  getConsultant(id: number): Consultant {
    return this.consultants[id - 1];
  }

 }
