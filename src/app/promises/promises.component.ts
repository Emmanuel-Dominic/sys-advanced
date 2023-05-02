import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  isOnline = false;
  status = 'offline';
  myPromise: any;
  
  constructor() {}

  ngOnInit(): void {
    this.getStatus();
    // this.checkLogic();
    this.myPromise.then(
      (res: any) => {
        console.log(res);
        this.checkLogic();
      },
      (err: any) => {
        console.log(err);
        
      }
    )
  }

  getStatus() {
    this.myPromise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        this.isOnline = true;
        resolve(this.isOnline);
      }, 3000)
    })
    // // this.isOnline = true;
    // setTimeout(()=>{
    //   this.isOnline = true;
    // }, 3000)
  }

  checkLogic() {
    if (this.isOnline) {
      this.status = 'online';
    } else {
      this.status = 'offline';
    }
  }
}
