import {Component, OnDestroy, OnInit} from '@angular/core';
import {RequestsService} from "./requests.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {Requests} from "../interfaces";

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit,OnDestroy {
  orderList: Requests[] = []

  city = ''
  _destroyed$ = new Subject()

  constructor(private requestService: RequestsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  this.requestService.getRequests().subscribe(requests=>{
    requests.forEach(request=>{
      // console.log(request)
      this.orderList.push(request)
    })
    this.orderList.reverse()

  })
  }
  ngOnDestroy(): void {
    // @ts-ignore
    this._destroyed$.next()
    this._destroyed$.complete()
  }

}
