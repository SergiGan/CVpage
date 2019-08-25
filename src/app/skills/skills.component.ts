import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
	link = false;
	backgound;
	//style: number;
	skills = [
	{
		direction: 'HTML/CSS',
		background: 'bg-success',
		ariaValuenow: '85',
		level: 'mastered by 85%',
		style: '85%',
	},
	{
		direction: 'Bootstrap',
		background: 'bg-success',
		ariaValuenow: '70',
		level: 'mastered by 70%',
		style: '70%'
	},
	{
		direction: 'JavaScript',
		background: 'bg-warning',
		ariaValuenow: '55',
		level: 'mastered by 55%',
		style: ' 55%'
	},
	{
		direction: 'JQuery',
		background: 'bg-tomato',
		ariaValuenow: '50',
		level: '50%',
		style: '50%'
	},
	{
		direction: 'Angular 7*)',
		background: 'bg-danger',
		ariaValuenow: '35',
		level: '40%',
		style: '40%',
		link: '<a id="L1" href="https://ng7test.herokuapp.com/" target="_blank" rel="nofollow noopener">ng7example</a>'
	},
	{
		direction: 'Python 3)',
		background: 'bg-danger',
		ariaValuenow: '35',
		level: '35%',
		style: '35%'
	},
	{
		direction: 'Fortran',
		background: '',
		ariaValuenow: '70',
		level: '70%',
		style: '70%'
	},
	{
		direction: 'Sublime Text',
		background:'bg-success',
		ariaValuenow: '85',
		level: 'mastered by 85%',
		style: '85%'
	},
	{
		direction: 'Quoda',
		background:'bg-info',
		ariaValuenow: '65',
		level: 'I use 65%',
		style: '65%'
	},
	{
		direction: 'Koala',
		background: 'bg-success',
		ariaValuenow: '85',
		level: 'mastered by 85%',
		style: '85%'
	},
	{
		direction: 'DreamViewer',
		background: 'bg-success',
		ariaValuenow: '85',
		level: 'got skills 80%',
		style: '85%'
	},
	{
		direction: 'Photoshop',
		background: '',
		ariaValuenow: '70',
		level: '70%',
		style: ' 70%'
	},
	{
		direction: 'AutoCad',
		background: '',
		ariaValuenow: '65',
		level: '65%',
		style: '65%'
	},
	{
		direction: '3DPipe',
		background: 'bg-success',
		ariaValuenow: '90',
		level: '90%',
		style: '90%'
	},
	{
		direction: 'PC Stadyo',
		background: 'bg-success',
		ariaValuenow: '90',
		level: '90%',
		style: '90%'
	},
	{
		direction: 'ANSYS/Mechanical/Structural',
		background: 'bg-danger',
		ariaValuenow: '35',
		level: '35%',
		style: '35%'
	},
]

  constructor() { }

  ngOnInit() {
  }

}
