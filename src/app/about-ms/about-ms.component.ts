import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-ms',
  templateUrl: './about-ms.component.html',
  styleUrls: ['./about-ms.component.css']
})
export class AboutMSComponent implements OnInit {
	phone: number;
	ms: any = {
		mail: 'sj.shaynyuk@gmail.com',
		phone: '+3 8(063) 443-83-18',
		person: 'Serhiy Shainyuk',
		skype: 'Sh.Sergiy',
		adress: 'Lviv, Ukraine',
		link: 'https://github.com/SergiGan/CVpage.git',
		about: 'First of all, "experience is, a collection of everything that happens to a person in her life and that she is conscious; people can have experience about themselves, their abilities, their virtues and vices, and people can also have experience and ideas, ideas and knowledge." So I am open to people if they are ready for it, to knowledge, experience and everything new that makes the world a better one. I strive for excellence, critical thinking, versatility in their interests. I am interested in the latest technologies, in particular in the field of information technology, as well as software optimization and participation in its development. Мotivation by the challenge and non-standard tasks. Why in IT, is because modern life can not be imagined without the latest technology and self-improvement.',
		count: 8
	};

  constructor() {
  	setTimeout(() => this.ms.count = 9, 3000);
  	console.log(this.ms.count+1);
  	 }

  ngOnInit() {
  }

}
