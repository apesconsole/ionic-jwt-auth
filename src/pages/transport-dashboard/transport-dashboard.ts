import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {AuthService} from '../home/authservice';
import {HomePage} from '../home/home';

import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-transport-dashboard',
  templateUrl: 'transport-dashboard.html',
})
export class TransportDashboardPage {
  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;
  userData: any;
  message: string ;
  type = '';
  transportDataset: any;

  constructor(public navCtrl: NavController, public authservice: AuthService, public navParams: NavParams, private menu: MenuController) {
  	 this.userData = authservice.getDisplayinfo();
     this.type = this.userData.data.type;
     this.transportDataset = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportDashboardPage');
    this.menu.swipeEnable(true, 'menu');
    this.loadChartData();
  }

getChart(context, chartType, data, options?) {
   return new Chart(context, {
     type: chartType,
     data: data,
     options: options
   });
 }

 loadChartData(){
    this.authservice.transportdata().then(
    data => {
        var lineData = [];
        this.transportDataset = data;
        var i:number = 0;
        while(i < 12) { 
          var total: number = this.transportDataset.data[i].totalPerMonth;
          lineData.push(total);
          i++
        }
        this.getLineChart(lineData)
    }, error => {
       this.navCtrl.setRoot(HomePage);
       this.message = error.message;
    });
 }

 getLineChart(dataSet) {
   var data = {
     labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
     datasets: [
       {
         label: "Total Violations",
         fill: false,
         lineTension: 0.1,
         backgroundColor: "rgba(75,192,192,0.4)",
         borderColor: "rgba(75,192,192,1)",
         borderCapStyle: 'butt',
         borderDash: [],
         borderDashOffset: 0.0,
         borderJoinStyle: 'miter',
         pointBorderColor: "rgba(75,192,192,1)",
         pointBackgroundColor: "#fff",
         pointBorderWidth: 1,
         pointHoverRadius: 5,
         pointHoverBackgroundColor: "rgba(75,192,192,1)",
         pointHoverBorderColor: "rgba(220,220,220,1)",
         pointHoverBorderWidth: 2,
         pointRadius: 1,
         pointHitRadius: 10,
         data: dataSet,
         spanGaps: false,
       }
     ]
   };

   return this.getChart(this.lineCanvas.nativeElement, "line", data);
 }

}
