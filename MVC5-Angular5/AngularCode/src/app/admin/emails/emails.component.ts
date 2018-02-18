import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //toggleTitle() {
  //  var strValue = 'some value 123';
  //  $('#divTest').slideToggle(); //
  //  $('#divTest').html(strValue);
  //}
}
