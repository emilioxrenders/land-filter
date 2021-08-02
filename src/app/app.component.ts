import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Displays countries with search function';
  result: any;
  searchresult: any;
  data: any;
  toplimit: number = 32;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // REST API
    this.loadAll();
  }

  loadData(event: any) {
    setTimeout(() => {
      this.toplimit += 32;
      this.searchresult = this.result.slice(0, this.toplimit);
      event.target.complete();
      console.log(this.searchresult);

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.searchresult.length === this.result.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

  loadAll() {
    this.data = this.http
      .get('https://restcountries.eu/rest/v2/all')
      .subscribe((result) => {
        this.result = result;
        this.searchresult = this.result.slice(0, this.toplimit);
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
