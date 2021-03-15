import { Component } from '@angular/core';

@Component({
  selector: 'web-servieces',
  templateUrl: './servieces.component.html',
  styleUrls: ['./servieces.component.css'],
})
export class ServiecesComponent {
  public webs = [
    {
      link:
        'https://www.google.com/search?q=open+link+i+target+black&oq=open+link+i+target+black&aqs=chrome..69i57j69i64l3.9819j0j7&sourceid=chrome&ie=UTF-8',
      title: 'text',
      descrition: 'Example content.',
    },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
    { link: 'test', title: 'text', descrition: 'Example content.' },
  ];

  public getLink(link: string): void {
    window.open(link, '_blank');
  }
}
