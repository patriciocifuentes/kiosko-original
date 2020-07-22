import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  public curveChart: GoogleChartInterface;
  constructor() { }

  ionViewDidEnter() {
    this.loadDataChart();
    document.getElementById('swipe_box').style.display='none';
  }

  ngOnInit() {
  }

  loadDataChart() {
    this.curveChart = {
      chartType: 'LineChart',
      dataTable: [
        ['Día', 'Ventas por Día'],
        ['Día 1', 11],
        ['Día 2', 2],
        ['Día 3', 3],
        ['Día 4', 2],
        ['Día 5', 7]
      ],
      options: {
        'title': '',
        curveType:'function',
        height: 272,
        width: '100%'
      },
    };
  }


  @HostListener('document:click', ['$event'])
   documentClick(event: MouseEvent) {
      if(event.target==document.getElementById('btn_action_table_down')){
        document.getElementById('btn_action_table_down').style.display='none';
        document.getElementById('swipe_box').style.display='block';
      }
      if(event.target==document.getElementById('btn_action_table_up')){
        document.getElementById('swipe_box').style.display='none';
        document.getElementById('btn_action_table_down').style.display='block';
      }
   }

}

