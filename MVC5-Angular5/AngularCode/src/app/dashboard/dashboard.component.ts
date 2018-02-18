import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  //$(document).ready(function(){
  ngAfterViewInit() {
    //Copy in all the js code from the script.js. Typescript will complain but it works just fine
    console.log("jQuery here in dashboard");
    $('[data-toggle="tooltip"]').tooltip();
    //$('#example').DataTable();
  }

  ngOnInit() {
  }


  toggleTitle() {
    var strValue = 'some value 123';
    $('#divTest').slideToggle(); //
    $('#divTest').html(strValue);
  }

}
