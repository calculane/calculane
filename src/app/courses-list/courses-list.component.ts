import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  errorMessage: string ='';
  courses: Course[]=[];
  sub!: Subscription;

  constructor(private _courseService: CourseService) { }

  ngOnInit(): void {
    this.sub = this._courseService.getCoursesWithHeaders().subscribe(
      courses => {
        this.courses = courses;
      })

 /* this.sub =  this.courseService.getCoursesWithHeaders.subscribe({
      next: courses => this.courses = courses,
      error: err => this.errorMessage = err
    });*/
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
