import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 5 with MVC 5 JQuery & Bootstrarp 3';
  result = 10 / 4;

  //$(document).ready(function(){
  ngAfterViewInit() {
    //Copy in all the js code from the script.js. Typescript will complain but it works just fine
    console.log("jQuery here");
    $('[data-toggle="tooltip"]').tooltip();
    //$('#example').DataTable();
  }

  //toggleTitle() {
  //  var strValue = 'some value 123';
  //  $('#divTest').slideToggle(); //
  //  $('#divTest').html(strValue);
  //}

}
