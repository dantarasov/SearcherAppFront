import { Component, OnInit } from '@angular/core';
import { Searcher } from '../searcher';
import { SearcherService } from '../searcher.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],

})
export class MainPageComponent implements OnInit {

  public searchers: Searcher[];
  public editSearcher: Searcher;
  public deleteSearcher: Searcher;
  public filter : Searcher;


  constructor (private searcherService: SearcherService){}

  title = 'searcherapp';

  ngOnInit() {
   // this.getSearchers();
  } 

}
