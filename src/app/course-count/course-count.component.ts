import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-course-count',
  templateUrl: './course-count.component.html',
  styleUrls: ['./course-count.component.css']
})
export class CourseCountComponent implements OnInit,OnChanges {

  selectedRadio = 'All'

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    for(let propertyName in changes){
      let change = changes[propertyName]
      let curr = change.currentValue
      let prev = change.previousValue
    }
  } 
  
  @Output()
  radioclicked = new EventEmitter<string>()

  @Input()
  all : number

  @Input()
  thirty : number

  @Input()
  fifty : number

  radioButtonClicked(){
    this.radioclicked.emit(this.selectedRadio)
    console.log(this.selectedRadio)
  }
}
