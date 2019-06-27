import { Component, OnInit } from '@angular/core';
import { CourseService } from '../courses/courses.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course
  code: String
  courselength: Number = 0

  constructor(private courseservice: CourseService, private activatedrouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.code = this.activatedrouter.snapshot.params['code']
    this.courseservice.getCourse(this.code).subscribe(response => { this.course = response; console.log(response); this.courselength = Object.keys(this.course).length ; console.log(this.courselength)}, error => console.log(error))
    console.log(this.courseservice.colour)
  }

  back() {
    this.router.navigate(['/home/', this.course.prev]).then(()=>{
      this.code = this.activatedrouter.snapshot.params['code']
      this.courseservice.getCourse(this.code).subscribe(response => { this.course = response; console.log(this.course); this.courselength = Object.keys(this.course).length }, error => console.log(error))
    })    
  }
  
  front() {
    this.router.navigate(['/home/', this.course.next]).then(()=>{
      this.code = this.activatedrouter.snapshot.params['code']
      this.courseservice.getCourse(this.code).subscribe(response => { this.course = response; console.log(this.course); this.courselength = Object.keys(this.course).length }, error => console.log(error))
    })    
  }

}
