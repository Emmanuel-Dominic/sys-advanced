import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // userRole = 'user';

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToAbout() {
    this.router.navigate(['about']);
  }

  goToProducts() {
    this.router.navigate(['products']);
  }

  goToDirective() {
    this.router.navigate(['directive']);
  }

  goToContact() {
    this.router.navigate(['contact']);
  }

  goToPromises() {
    this.router.navigate(['promises']);
  }

  goToObservables() {
    this.router.navigate(['observables']);
  }

  goToForkJoins() {
    this.router.navigate(['forkjoin']);
  }

  goToOffers() {
    this.router.navigate(['offers']);
  }

  goToAdmin() {
    // if(this.userRole === 'admin') {
    this.router.navigate(['admin']);
    // }else {
      // this.router.navigate(['access-denied']);
    // }
  }
}
