import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-questions',
  templateUrl: './show-questions.component.html',
  styleUrls: ['./show-questions.component.css']
})
export class ShowQuestionsComponent implements OnInit {
@Input() questions:any;
  length: number;
  pageSize: any;
  pageSizeOptions: number[];
  currentItemsToShow: any;


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentItemsToShow=this.questions;
    this.length=Object.entries(this.questions).length;
    this.pageSize=10;
    this.pageSizeOptions=[5,10,25,100]
  }
  onPageChange($event) {
    this.currentItemsToShow =  this.questions.slice($event.pageIndex*$event.pageSize,
    $event.pageIndex*$event.pageSize + $event.pageSize);
  }
  navigateToStackoverFlow(link){
    window.location.href = link
  }

}
