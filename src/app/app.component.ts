import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  absent: boolean = true;
  names: string[] = ['foad', 'ali', 'abbas', 'asghar'];
  
  score = 70;

  makeDisappear(){
    this.absent = !this.absent;
  }
}
