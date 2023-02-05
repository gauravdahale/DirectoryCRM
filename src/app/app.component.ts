import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeNGConfig} from "primeng/api";
import {MessagingService} from "./messaging.service";
import {AngularFireMessaging} from "@angular/fire/compat/messaging";

import { getMessaging, getToken, onMessage } from "firebase/messaging";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Zodezee Admin';
  items!: MenuItem[];
message:any

  constructor(private primengConfig: PrimeNGConfig,
              private messaging:AngularFireMessaging,
              private mService:MessagingService
             ) {

messaging.requestPermission.subscribe(()=>{
  console.log('Permission granted!')},
  (error) => { console.error(error);
})
    messaging.onMessage((message)=>{
      console.log('Message recieved',message)
    })
    messaging.getToken.subscribe(next=>{
      console.log('TOKEN',next)
    })
    this.listen();
    // this.message = messaging.
    this.mService.requestPermission()
    this.mService.receiveMessage()
this.message= this.mService.currentMessage
}
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message=payload;
    });
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.items = [
      // {
      //   label:'File',
      //   icon:'pi pi-fw pi-file',
      //   items:[
      //     {
      //       label:'New',
      //       icon:'pi pi-fw pi-plus',
      //       items:[
      //         {
      //           label:'Bookmark',
      //           icon:'pi pi-fw pi-bookmark'
      //         },
      //         {
      //           label:'Video',
      //           icon:'pi pi-fw pi-video'
      //         },
      //
      //       ]
      //     },
      //     {
      //       label:'Delete',
      //       icon:'pi pi-fw pi-trash'
      //     },
      //     {
      //       separator:true
      //     },
      //     {
      //       label:'Export',
      //       icon:'pi pi-fw pi-external-link'
      //     }
      //   ]
      // },
      // {
      //   label:'Edit',
      //   icon:'pi pi-fw pi-pencil',
      //   items:[
      //     {
      //       label:'Left',
      //       icon:'pi pi-fw pi-align-left'
      //     },
      //     {
      //       label:'Right',
      //       icon:'pi pi-fw pi-align-right'
      //     },
      //     {
      //       label:'Center',
      //       icon:'pi pi-fw pi-align-center'
      //     },
      //     {
      //       label:'Justify',
      //       icon:'pi pi-fw pi-align-justify'
      //     },
      //
      //   ]
      // },
      {
        label:'Users',
        icon:'pi pi-fw pi-user',
        items:[
          {
            label:'New',
            icon:'pi pi-fw pi-user-plus',

          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-user-minus',

          },
          {
            label:'Search',
            icon:'pi pi-fw pi-users',
            items:[
              {
                label:'Filter',
                icon:'pi pi-fw pi-filter',
                items:[
                  {
                    label:'Print',
                    icon:'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon:'pi pi-fw pi-bars',
                label:'List'
              }
            ]
          }
        ]
      },
      {
        label:'Events',
        icon:'pi pi-fw pi-calendar',
        items:[
          {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
              {
                label:'Save',
                icon:'pi pi-fw pi-calendar-plus'
              },
              {
                label:'Delete',
                icon:'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label:'Archieve',
            icon:'pi pi-fw pi-calendar-times',
            items:[
              {
                label:'Remove',
                icon:'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
      }
    ];



  }


}
