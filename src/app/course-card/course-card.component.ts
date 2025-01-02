import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  // Passing courses values from app component to the course-card component
  @Input()
  course: any;

  @Output()
  eventEmmitter = new EventEmitter<Course>();

  constructor() {
    this.course = {};
  }

  ngOnInit() {}

  onViewDetails() {
    console.log('into course card component');
    this.eventEmmitter.emit(this.course);
  }
}
