import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Consultant } from './../../models/consultant.model';
import { ConsultantsService } from '../consultants.service';

@Component({
  selector: 'app-consultant-info',
  templateUrl: './consultant-info.component.html',
  styleUrls: ['./consultant-info.component.css']
})
export class ConsultantInfoComponent implements OnInit {
  info: Consultant;

  constructor(private route: ActivatedRoute,
              private consultantsService: ConsultantsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.info = this.consultantsService.getConsultant(id);
  }

}
