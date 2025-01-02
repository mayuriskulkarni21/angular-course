import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from './db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  imports: [CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = {
    title: 'angular-course',
  };
  angularCourse = COURSES[0];
  RxJsCourse = COURSES[1];
  NgRxCourse = COURSES[2];

  onClick() {
    alert('Hello!!');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  onCardView(course: Course) {
    console.log('into app component', course);
  }
}
