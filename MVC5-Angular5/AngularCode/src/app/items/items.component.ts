import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }


  //$(document).ready(function(){
  ngAfterViewInit() {
    //Copy in all the js code from the script.js. Typescript will complain but it works just fine
    console.log("jQuery here in items");
    //$('[data-toggle="tooltip"]').tooltip();
    $('#example').DataTable();
  }

  ngOnInit() {
  }

}
