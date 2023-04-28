import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  productsData = '';
  constructor(private dataService: DataService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    // this.dataService.getData().subscribe(res => {
    //   this.channelName = res;
    // })
    this.route.data.subscribe(res => {
      this.productsData = res['data'];
    })
  }
}
