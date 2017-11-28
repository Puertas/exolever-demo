import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ConsultantsService } from '../../../consultants.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  @ViewChild('f') newCommentForm: NgForm;
  id: number;
  submitted = false;
  loading = false;
  error = false;
  requiredText = 'You must enter a value';
  submitResponse: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private consultantsService: ConsultantsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    const formData = {
        'subject': this.newCommentForm.value.subject,
        'body': this.newCommentForm.value.body,
        'status': this.newCommentForm.value.status,
        'rating': this.newCommentForm.value.rating,
        'user': this.newCommentForm.value.user,
        'consultant': this.id
    };
    const submitPromise = this.consultantsService.postNewComment(formData);
    this.submitted = true;
    this.loading = true;
    submitPromise.then((msg: string) => {
      this.loading = false;
      this.submitResponse = msg;
    }).catch((msg: string) => {
      this.error = true;
      this.loading = false;
      this.submitResponse = msg;
    });
    // TODO: post handling and navigate
  }

  goToConsultant() {
    this.router.navigate([`/consultants`]);
  }

}
