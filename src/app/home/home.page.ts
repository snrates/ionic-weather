import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/models/response';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  array = []
  constructor(private store: Storage, private http: HttpClient) {
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getData()
  }

  async callApi(sehir: String) {

    this.http.get("http://api.openweathermap.org/data/2.5/weather?APPID=d74f844731953a664c009360a0e68b79&units=metric&lang=tr&q=" + sehir)
      .subscribe((response: ApiResponse.RootObject) => {
        this.array.push(response)

        //console.log(this.array)
      });

  }
  getData() {
    this.array = []
    this.store.ready().then(() => {
      this.store.get('sehir').then((val) => {
        for (const key in val) {
          //console.log("soner" + val[key])
          this.callApi(val[key])
        }
      });
    }
    )
  }

}
