import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }
  show = false;

  // implement OnInit's `ngOnInit` method
  ngOnInit() {

    $(function(){
      // $('.panel').lobiPanel({});
  });
   }

   click(){
     this.show = true;
     setTimeout(() => {
      $('.panel').lobiPanel({});
    }, 1000);
   }
}
