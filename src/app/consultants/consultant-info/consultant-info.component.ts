import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Consultant } from './../../models/consultant.model';
import { ConsultantsService } from '../consultants.service';

@Component({
  selector: 'app-consultant-info',
  templateUrl: './consultant-info.component.html',
  styleUrls: ['./consultant-info.component.css']
})
export class ConsultantInfoComponent implements OnInit {
  id: number;
  info: Consultant;
  loading: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private consultantsService: ConsultantsService) { }

  ngOnInit() {
    this.loading = true;
    this.id = this.route.snapshot.params['id'];
    const getConsultant = this.consultantsService.getConsultant(this.id);
    getConsultant.then((consultant: Consultant) => {
      this.loading = false;
      this.info = consultant;
    });
  }

  newComment(): void {
    this.router.navigate([`/consultants/${this.id}/new`]);
  }

}
