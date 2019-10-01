import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

myItems=[{name:"link"},{name:"link1"},{name:"link2"},{name:"link3"}]
 clicked;
 selectedLink;
 clickeMe(input) : void{
    console.log('event element',input);
    this.selectedLink=JSON.stringify(input);
  }

}
