import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Displays lands with search function';
  result: any;
  searchresult: any;
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // REST API
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((result) => {
      console.log(result);
      this.result = result;
    });

    this.loadAll();
  }

  loadAll() {
    this.data = this.http
      .get('https://restcountries.eu/rest/v2/all')
      .subscribe((result) => {
        this.result = result;
        this.searchresult = result;
        console.log(this.result);
      });
  }


  //  List Filtering
  filterList(ev: any) {
    const val = ev.target.value;
    console.log('event!');

    if (val && val.trim() != '') {
      this.searchresult = this.result.filter((item: any) => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    } else {
      this.searchresult = this.result;
    }
  }
}
