import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  title = 'directive';
  number = 60;
  isClicked = false;

  onClick() {
    this.isClicked = true;
  }
}
