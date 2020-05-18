import { Component, Inject, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HackerNews } from '../models/hackerNews';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit, AfterContentInit, AfterViewInit {
  public news: HackerNews[];
  public currentNews: HackerNews[];
  public top = 10;
  public BASE_URL: string;
  public searchInput: string;

  constructor(public http: HttpClient) {
    this.BASE_URL = 'https://localhost:5001/';
  }

  ngOnInit(): void {
    this.getTop();
  }

  ngAfterContentInit() {
  }

  ngAfterViewInit()  {

  }

  getTop = () => {
    this.news = null;
    this.http.get<HackerNews[]>(this.BASE_URL + `hackernews?top=${this.top}`).subscribe(result => {
      this.news = result;
      this.currentNews = this.news;
    }, error => console.error(error));
  }

  searchNews = () => {
    if (this.searchInput) {
      const valueToSearch = this.searchInput.toLowerCase();
      this.news = this.currentNews.filter(item => {
        return (item.title ? item.title.toLowerCase().indexOf(valueToSearch) >= 0 : false);
      });
    } else {
      this.news = this.currentNews;
    }
  }

}


