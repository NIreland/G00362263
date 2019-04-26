import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  constructor(public http: HttpClient) {

  }
// I tried to implement a json file but couldnt
  getData(){
    let url = '';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      console.log(result)
    })
  }
}
