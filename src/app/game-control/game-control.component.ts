import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterEvent=new EventEmitter<number>();
   counter:number = 0;
   ref;
  constructor() { }

  ngOnInit(): void {
  }
  onGameStart(){
    console.log('game started');
    this.ref = setInterval(()=>{
      this.counterEvent.emit(this.counter+1);
      this.counter++;

    },1000)
    
  }
  onGameStop(){
    console.log('game stopped');
    clearInterval(this.ref);
  }

}
