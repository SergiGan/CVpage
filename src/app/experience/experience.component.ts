import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
	//year: number;
	experience = [
	{
		work: 'PrAT "TehEnergo"',
		speciality: "Leading Engineer in the diagnostics department of the equipment",
		year: '2016-present'
	},
	{
		work: 'PrAT "LvivOrgres"',
		speciality: 'Engineer for Safe Maintenance of Power Equipment',
		year: '2008-2016'
	},
	{
		work: 'Publishing House "World of Physics"',
		speciality: 'Text layout and editing',
		year: '2006-2008'
	}
	];

  constructor() { }

  ngOnInit() {
  }

}
