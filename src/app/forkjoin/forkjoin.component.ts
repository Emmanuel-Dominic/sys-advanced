import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {
  schoolCount = 0;
  hospitalCount = 0;
  bankCount = 0;
  isWidgetOneSpinner = false;
  isWidgetTwoSpinner = false;
  isWidgetThreeSpinner = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.isWidgetOneSpinner = true;
    this.isWidgetTwoSpinner = true;
    this.isWidgetThreeSpinner = true;
    this.getData();
  }

  getData() {
    this.dataService.getAllData().subscribe((data) => {
      this.schoolCount = data[0];
      this.hospitalCount = data[1];
      this.bankCount = data[2];
      this.isWidgetOneSpinner = false;
      this.isWidgetTwoSpinner = false;
      this.isWidgetThreeSpinner = false;
    });
    
    // this.dataService.getWidgetOneData().subscribe((data) => {
    //   this.schoolCount = data;
    //   this.isWidgetOneSpinner = false;
    // });

    // this.dataService.getWidgetTwoData().subscribe((data) => {
    //   this.hospitalCount = data;
    //   this.isWidgetTwoSpinner = false;
    // });

    // this.dataService.getWidgetThreeData().subscribe((data) => {
    //   this.bankCount = data;
    //   this.isWidgetThreeSpinner = false;
    // });
  }
}
