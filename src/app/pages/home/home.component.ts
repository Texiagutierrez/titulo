import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
} from 'ng-apexcharts';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

interface month {
  value: string;
  viewValue: string;
}

export interface salesOverviewChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  marker: ApexMarkers;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public salesOverviewChart!: Partial<salesOverviewChart> | any;
  locStoUid: string = '';
  months: month[] = [
    { value: 'mar', viewValue: 'Marzo 2023' },
    { value: 'abr', viewValue: 'Abril 2023' },
    { value: 'jun', viewValue: 'Junio 2023' },
  ];
  constructor(private pS: ProfilesService, private auth: AuthService, private router: Router){
    this.salesOverviewChart = {
      series: [
        {
          name: 'Eanings this month',
          data: [355, 390, 300, 350, 390, 180, 355, 390],
          color: '#5D87FF',
        },
        {
          name: 'Expense this month',
          data: [280, 250, 325, 215, 250, 310, 280, 250],
          color: '#49BEFF',
        },
      ],

      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      plotOptions: {
        bar: { horizontal: false, columnWidth: '35%', borderRadius: [4] },
      },
      chart: {
        type: 'bar',
        height: 390,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: '#adb0bb',
        fontFamily: 'inherit',
        sparkline: { enabled: false },
      },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      legend: { show: false },
      xaxis: {
        type: 'category',
        categories: [
          '16/08',
          '17/08',
          '18/08',
          '19/08',
          '20/08',
          '21/08',
          '22/08',
          '23/08',
        ],
        labels: {
          style: { cssClass: 'grey--text lighten-2--text fill-color' },
        },
      },
      yaxis: {
        show: true,
        min: 0,
        max: 400,
        tickAmount: 4,
        labels: {
          style: {
            cssClass: 'grey--text lighten-2--text fill-color',
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
        lineCap: 'butt',
        colors: ['transparent'],
      },
      tooltip: { theme: 'light' },

      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 3,
              },
            },
          },
        },
      ],
    };




  }
  perfil = {
    uid: '',
    imagePath: 'assets/images/profile/user-1.jpg',
    name: '',
    lastname: ' ',
    curso: ' ',
    rut: '',
    telefono: '',
    direccion: '',
    email: '',
    rol: ''
  }

  tmpItems: any = [];

  ngOnInit() {

    let logged: any = this.auth.checkLogin();
    if(logged.admin == false && logged.logged == false){
      this.router.navigate(['authentication/login']);
    }
    let tmp = this.getPerfil();
    console.log('items', tmp);

    this.pS.getPersonas().subscribe((res: any) => {
      this.tmpItems = res;
      console.log('data', this.tmpItems);
    });
    
    /*this.perfil = {
      id: tmp[0].id,
      imagePath: tmp[0].imagePath,
      name: tmp[0].name,
      lastname: tmp[0].lastname,
      curso: tmp[0].curso,
      rut: tmp[0].rut,
      telefono: tmp[0].telefono,
      direccion: tmp[0].direccion,
      email: tmp[0].email,
      rol: tmp[0].rol
    }*/
  }

  getPerfil(){
    let tmp = this.pS.getPersona().subscribe(res => 
      console.log('dentro', res)
    );
    return tmp;
  }
}

