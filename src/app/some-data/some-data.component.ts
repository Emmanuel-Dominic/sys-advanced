import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-some-data',
  templateUrl: './some-data.component.html',
  styleUrls: ['./some-data.component.css']
})
export class SomeDataComponent {
  // auth_token = "52wy72uqd7wg68gGGfftyq67gw778w";
  constructor(private http: HttpClient) {}

  getUser() {
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${this.auth_token}`
    // });
    // this.http.get('http://something.com/api/users', {headers: headers}).subscribe((res) => {
    this.http.get('http://something.com/api/user').subscribe((res) => {
      console.log(res);      
    });
  }

  getProduct() {
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${this.auth_token}`
    // });
    // this.http.get('http://something.com/api/products', {headers: headers}).subscribe((res) => {
    this.http.get('http://something.com/api/product').subscribe((res) => {
      console.log(res);      
    });
  }

  getContact() {
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${this.auth_token}`
    // });
    // this.http.get('http://something.com/api/contacts', {headers: headers}).subscribe((res) => {
    this.http.get('http://something.com/api/contact').subscribe((res) => {
      console.log(res);      
    });
  }
}