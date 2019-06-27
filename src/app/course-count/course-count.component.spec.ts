import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCountComponent } from './course-count.component';

describe('CourseCountComponent', () => {
  let component: CourseCountComponent;
  let fixture: ComponentFixture<CourseCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
