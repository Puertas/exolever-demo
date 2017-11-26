import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ConsultantsService } from './consultants.service';
import { Subscription } from 'rxjs/Subscription';
import { MatTableDataSource } from '@angular/material';

import { Consultant } from '../models/consultant.model';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit, OnDestroy {
  loading: boolean;
  consultants: Consultant[];
  consultantSub: Subscription;
  tableColumns = ['id', 'name', 'shortName', 'email', 'details'];
  dataSource = new MatTableDataSource<Consultant>(this.consultants);

  constructor(private consultantsService: ConsultantsService) { }

  ngOnInit() {
    this.loading = true;
    this.consultantsService.storeConsultants();
    this.consultantSub = this.consultantsService.consultantsChanged.subscribe(
      (consultants: Consultant[]) => {
        this.consultants = consultants;
        this.dataSource = new MatTableDataSource<Consultant>(this.consultants);
        this.loading = false;
      }
    );
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  consultantDetails(id: number): void {
    console.log('Consultant click: ' + id );
  }

  ngOnDestroy() {
    this.consultantSub.unsubscribe();
  }

}
