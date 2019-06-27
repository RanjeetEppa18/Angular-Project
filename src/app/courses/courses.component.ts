import { Component,Input, OnInit, OnChanges, SimpleChanges } from  '@angular/core'
import { CourseService } from  './courses.service'
import 'bootstrap/dist/css/bootstrap.css'
@Component({
    selector: 'course',
    templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit,OnChanges {
    title = 'Hello World'
    courses
    isDisable = false
    selectedRadio = 'All'
    statusMessage: string = 'Loading...'

    constructor(private service: CourseService){
    }

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes){
            let change = changes[propertyName]
            console.log(`${change.currentValue} from ${change.previousValue}`)
        }
    }

    ngOnInit(){
        this.service.getCourses().subscribe(response => {this.courses = response; console.log(response)},error => {this.statusMessage = error.status +' error:  '+ error.statusText})
        console.log(this.service.colour)
        this.service.colour = 'blue'
    }

    incrementStudents(course: any){
        var courseIndex = this.courses.indexOf(course)
        if(this.courses[courseIndex].student >=30) {this.courses[courseIndex].isDisable = true;return false}
        this.courses.find((c: any)=>c === course).student++
    }  

    decrementStudents(course){
        var courseIndex = this.courses.indexOf(course)
        if(this.courses[courseIndex].student == 0) {this.courses[courseIndex].isDisable = true;return false}
        this.courses.find(c=>c === course).student--
    }

    getCourses(){
        this.courses = [{ course: 'Course1', student: 20}, { course: 'Course2', student: 30}, { course: 'Course3', student: 40}, { course: 'Course4', student: 50}, { course: 'Course5', student: 60}]
    }

    trackById(index:number){
        return index
    }

    getAllStudents(){
        return this.courses.length
    }
    getAboveThirtyStudents(){
        return this.courses.filter(c=>c.student>29).length
    }
    getAboveFiftyStudents(){
        return this.courses.filter(c=>c.student>49).length
    }
    changeValue(selectedButton){
        this.selectedRadio = selectedButton
    }
    
}