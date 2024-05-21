import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';

  word: String | undefined ;

  ngOnInit() : void{
    console.log("Hello oninit")
  }

  ngDoCheck() : void{
    console.log("Hello do check")
  }

  style="new1";
  flag=true;

  arr=[1,2,3]

  changeFlag()
  {
    this.flag= !this.flag;
    this.style="new2";
  }
  
  getData(e:any){
    this.title=e  
  }
}
