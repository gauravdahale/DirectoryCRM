import {Component, OnDestroy, OnInit} from '@angular/core';
import {RequestsService} from "./requests.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit,OnDestroy{
  orderList:any[]=[]
  city=''
  _destroyed$= new Subject()
  constructor(private requestService:RequestsService,private route:ActivatedRoute) {
  this.route.queryParams.pipe(takeUntil(this._destroyed$)).subscribe(next=>{
    console.log('route',next['city'])
    this.city = next['city']
    this.requestService.getOrders(this.city+'orders').subscribe(requests=>{
      requests.forEach(request=>{
        console.log(request)
        this.orderList.push(request)
        this.orderList.reverse()
      })
    })

  })
  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    // @ts-ignore
    this._destroyed$.next()
    this._destroyed$.complete()
  }

}
