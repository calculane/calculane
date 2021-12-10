import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _baseUrl: string = 'https://www.udemy.com/api-2.0/';
  private _path: string = 'courses/?page=2&page_size=12';
  private _clientId: string = 'KhTFxdY0GyTnVheaSRZU4uZVqMzGw4t24g1f70DQ';
  private _clientSecret: string = 'g43h7loLXCBDdfo1ke81285nnR6s5iP3QCB8quP1v2Z3Pkp4GZKfWI6CAgauYMWNEU7wImNc95AU86fMztthYtnjrsuJUaCe5HYBKU1XIY2NUFmH4KUhCIe5hMWuIzhM';

  constructor( private _http: HttpClient ) { }



  getCoursesWithHeaders(): Observable<Course[]> {
    let headers = new HttpHeaders({
    'Access-Control-Allow-Origin': 'null',
    'Accept': 'application/json, text/plain, */*',
    'Authorization': 'Basic ' + btoa(this._clientId + ':' + this._clientSecret),
    'Content-Type': 'application/json;charset=utf-8'
  })

    console.log(headers);
    return this._http.get<Course[]>(this._baseUrl + this._path,{'headers':headers}).pipe(tap(data => console.log('All', JSON.stringify(data))))

}


}
