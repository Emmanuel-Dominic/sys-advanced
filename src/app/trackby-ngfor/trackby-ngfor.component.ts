import { Component } from '@angular/core';

@Component({
  selector: 'app-trackby-ngfor',
  templateUrl: './trackby-ngfor.component.html',
  styleUrls: ['./trackby-ngfor.component.css']
})
export class TrackbyNgforComponent {

  users = [
    {id: 1, name: 'Emmanuel'},
    {id: 2, name: 'Hope'},
    {id: 3, name: 'Sharon'},
    {id: 4, name: 'Polyta'},
    {id: 5, name: 'Arthur'},
  ];

  refresh() {
    this.users = [
      {id: 1, name: 'Emmanuel'},
      {id: 2, name: 'Hope'},
      {id: 3, name: 'Chris'},
      {id: 4, name: 'Polyta'},
      {id: 5, name: 'Arthur'},
      {id: 6, name: 'Darren'},
    ];
  }

  trackByUser(index: number, item: any) {
    // return index;
    return item.id;
  }
}
