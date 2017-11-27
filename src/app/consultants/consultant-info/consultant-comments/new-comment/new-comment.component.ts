import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute,
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
    this.consultantsService.postNewComment(formData);
    // TODO: post handling and navigate
  }

}
