import { Component, OnInit, Input } from '@angular/core';

import { Comment } from './../../../models/comment.model';

@Component({
  selector: 'app-consultant-comments',
  templateUrl: './consultant-comments.component.html',
  styleUrls: ['./consultant-comments.component.css']
})
export class ConsultantCommentsComponent implements OnInit {
  @Input() comments: Comment[];

  constructor() { }

  ngOnInit() { }

}
