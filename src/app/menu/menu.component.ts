import { Component } from '@angular/core';
import {MenuItem, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title = 'DirectoryCRM';
  items!: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) {


  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.items = [
      {
        label:'Users',
        icon:'pi pi-fw pi-file',
        items:[
          {
            label:'Users List',
            icon:'pi pi-fw pi-plus',
            routerLink: 'users',
            // items:[
            //   {
            //     label:'Bookmark',
            //     icon:'pi pi-fw pi-bookmark'
            //   },
            //   {
            //     label:'Video',
            //     icon:'pi pi-fw pi-video'
            //   },
            //
            // ]
          },
          // {
          //   label:'Delete',
          //   icon:'pi pi-fw pi-trash'
          // },
          // {
          //   separator:true
          // },
          // {
          //   label:'Export',
          //   icon:'pi pi-fw pi-external-link'
          // }
        ]
      },
      {
        label:'Orders',
        icon:'pi pi-fw pi-pencil',
        items:[
          {
            label:'Sakoli',
            icon:'pi pi-fw pi-align-left',
            routerLink:'orders',
            queryParams: {city:'sakoli'}
          },
          {
            label:'Lakhni',
            icon:'pi pi-fw pi-align-right',
            routerLink:'orders',
            queryParams: {city:'lakhni'}

          },
          // {
          //   label:'Center',
          //   icon:'pi pi-fw pi-align-center'
          // },
          // {
          //   label:'Justify',
          //   icon:'pi pi-fw pi-align-justify'
          // },

        ]
      },
      // {
      //   label:'Users',
      //   icon:'pi pi-fw pi-user',
      //   items:[
      //     {
      //       label:'New',
      //       icon:'pi pi-fw pi-user-plus',
      //
      //     },
      //     {
      //       label:'Delete',
      //       icon:'pi pi-fw pi-user-minus',
      //
      //     },
      //     {
      //       label:'Search',
      //       icon:'pi pi-fw pi-users',
      //       items:[
      //         {
      //           label:'Filter',
      //           icon:'pi pi-fw pi-filter',
      //           items:[
      //             {
      //               label:'Print',
      //               icon:'pi pi-fw pi-print'
      //             }
      //           ]
      //         },
      //         {
      //           icon:'pi pi-fw pi-bars',
      //           label:'List'
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   label:'Events',
      //   icon:'pi pi-fw pi-calendar',
      //   items:[
      //     {
      //       label:'Edit',
      //       icon:'pi pi-fw pi-pencil',
      //       items:[
      //         {
      //           label:'Save',
      //           icon:'pi pi-fw pi-calendar-plus'
      //         },
      //         {
      //           label:'Delete',
      //           icon:'pi pi-fw pi-calendar-minus'
      //         },
      //
      //       ]
      //     },
      //     {
      //       label:'Archieve',
      //       icon:'pi pi-fw pi-calendar-times',
      //       items:[
      //         {
      //           label:'Remove',
      //           icon:'pi pi-fw pi-calendar-minus'
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        label:'Logout',
        icon:'pi pi-fw pi-power-off'
      }
    ];



  }


}
