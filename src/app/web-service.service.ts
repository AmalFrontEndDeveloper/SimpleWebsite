import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor(private http:HttpClient) {
   // this.getMenu();
   }

  getMenu(callback: (data:any) => void) {
    const menuUrl = `assets/json/menu.json`;
    this.http.get(menuUrl).subscribe(
      data => {
        callback(data);
      }, error => {
        callback([]);
      });
  }
  getservice(callback: (data:any) => void) {
    const serviceUrl = `assets/json/services.json`;
    this.http.get(serviceUrl).subscribe(
      data => {
        callback(data);
      }, error => {
        callback([]);
      });
  }
  getsubscription(callback: (data:any) => void) {
    const subscriptionUrl = `assets/json/subscription.json`;
    this.http.get(subscriptionUrl).subscribe(
      data => {
        callback(data);
      }, error => {
        callback([]);
      });
  }
  getrecentNews(callback: (data:any) => void) {
    const recentNewsUrl = `assets/json/recentNews.json`;
    this.http.get(recentNewsUrl).subscribe(
      data => {
        callback(data);
      }, error => {
        callback([]);
      });
  }
  
}
