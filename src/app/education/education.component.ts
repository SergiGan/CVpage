import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
//@Input() item;
//@Output() item: EventEmitter<any> = new EventEmitter();
	educate = [
	{
		school: 'SkillUp IT Specialist Training Center',
		knowledge: 'Angular 7',
		yearOfStudy: '*2019'
	},
	{
		school: 'SkillUp IT Specialist Training Center',
		knowledge: 'Front-End',
		yearOfStudy: '2019'
	},
	{
		school: 'Prometheus',
		knowledge: 'This is a Ukrainian public project for mass open online courses. The course of "Fundamentals of Information Security"',
		yearOfStudy: '2015'

	},
	{
		school: 'Ivan Franko National University of Lviv',
		knowledge: "Faculty of Physics and Electronics, physics specialist",
 		yearOfStudy: '2001-2006'
	}
	
	];

  constructor() { }

  ngOnInit() {
  }

}
