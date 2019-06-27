import { ICourse, ICourses } from './courses'
import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'
import {Observable } from 'rxjs';
@Injectable()
export class CourseService {
    getcourse =  'http://localhost:3001/api/getcourse/'
    getcourses = 'http://localhost:3001/api/getcourses'
    getbackcourse = 'http://localhost:3001/api/getprevious/'
    getfrontcourse = 'http://localhost:3001/api/getnext/'
    colour = 'red'
    constructor(private _http: HttpClient){
        console.log('New Instance created')
    }

    getCourses(): Observable<ICourses[]> {
        return this._http.post<ICourses[]>(this.getcourses,{observe:'response'})
    }

    getCourse(course: String): Observable<ICourse[]> {
        return this._http.post<ICourse[]>(this.getcourse+course,{observe:'response'})
    }

    getBack(course: String): Observable<ICourse[]> {
        return this._http.post<ICourse[]>(this.getbackcourse+course,{observe:'response'})
    }

    getFront(course: String): Observable<ICourse[]> {
        return this._http.post<ICourse[]>(this.getfrontcourse+course,{observe:'response'})
    }
}