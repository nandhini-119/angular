import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input()
  name:String|undefined;

  @Output()
  valToParent=new EventEmitter<String>();

  ngOnChanges()
  {
    console.log("On Change")
  }

  ngOnDestroy() : void{
    console.log("destroyed")
  }

  goTo(){
    this.valToParent.emit("Hello Parent from child") 
  }
}
