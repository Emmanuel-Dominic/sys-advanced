import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {
  showToast = false;
  toastMsg = "";
  toastrType = "";
  toastrPosistion = "";

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.toastr.status.subscribe((msg: string) => {
      if (msg === null) {
        this.showToast = false;
      } else {
        this.showToast = true;
        this.toastMsg = msg;
        this.toastrType = 'success';
        this.toastrPosistion = 'top-right';
      }
    })
  }

  closeToast() {
    this.showToast = false;
  }

  btnClicked() {
    this.toastr.showToast("Advanced Angular Concepts (Toastr)", this.toastrPosistion, true);
  }
}
