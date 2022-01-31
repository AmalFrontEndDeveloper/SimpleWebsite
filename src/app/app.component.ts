import { Component } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuDetails:any= [];
  serviceinformation: any;
  subscriptionPlan: any;
  recentNews: any;
  constructor(private webService: WebServiceService){
    this.getMenuList();
    this.getservice();
    this.getsubscription();
    this.getrecentNews();
  }
  getMenuList() {
    this.webService.getMenu(result => {
    console.log(result);
    this.menuDetails = result.data.menulist;
    });
  }
  getservice() {
    this.webService.getservice(result => {
    console.log(result);
    this.serviceinformation = result.data.serviceinfo;
    });
  }
  getsubscription() {
    this.webService.getsubscription(result => {
    console.log(result);
    this.subscriptionPlan = result.data.subscriptioninfo;
    });
  }
  getrecentNews() {
    this.webService.getrecentNews(result => {
    console.log(result);
    this.recentNews = result.data.recentNewsInfo;
    });
  }
  
}
