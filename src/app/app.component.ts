import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   count:number;
   oddNumberArray = [];
   evenNumberArray = [];

  onEvent(eventData:number){
    //console.log(eventData);
    if(eventData%2===0){
      this.evenNumberArray.push(eventData);
      //console.log(this.evenNumberArray);
    }
    else{
      this.oddNumberArray.push(eventData);
      console.log(eventData);
    }
  }
}
