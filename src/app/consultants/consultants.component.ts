import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsultantsService } from './consultants.service';
import { Subscription } from 'rxjs/Subscription';

import { Consultant } from '../models/consultant.model';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit, OnDestroy {
  consultants: Consultant[];
  consultantSub: Subscription;

  constructor(private consultantsService: ConsultantsService) { }

  ngOnInit() {
    this.consultantsService.storeConsultants();
    this.consultantSub = this.consultantsService.consultantsChanged.subscribe(
      (consultants: Consultant[]) => {
        this.consultants = consultants;
      }
    );
  }

  ngOnDestroy() {
    this.consultantSub.unsubscribe();
  }

}
