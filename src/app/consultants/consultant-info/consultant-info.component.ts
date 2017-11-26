import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Consultant } from './../../models/consultant.model';
import { ConsultantsService } from '../consultants.service';

@Component({
  selector: 'app-consultant-info',
  templateUrl: './consultant-info.component.html',
  styleUrls: ['./consultant-info.component.css']
})
export class ConsultantInfoComponent implements OnInit {
  info: Consultant;
  loading: boolean;

  constructor(private route: ActivatedRoute,
              private consultantsService: ConsultantsService) { }

  ngOnInit() {
    this.loading = true;
    const id = this.route.snapshot.params['id'];
    const getConsultant = this.consultantsService.getConsultant(id);
    getConsultant.then((consultant: Consultant) => {
      this.loading = false;
      this.info = consultant;
    });
  }

}
