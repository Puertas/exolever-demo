import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantCommentsComponent } from './consultant-comments.component';

describe('ConsultantCommentsComponent', () => {
  let component: ConsultantCommentsComponent;
  let fixture: ComponentFixture<ConsultantCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
