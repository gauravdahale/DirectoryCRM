import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit,OnDestroy{
  userslist:any[]=[]
  _destroyed$=new Subject()
constructor(private userService:UsersService) {

}

  ngOnInit(): void {
  this.userService.getUsers().pipe(takeUntil(this._destroyed$)).subscribe(users=>{
    users.forEach(user=>{
      // console.log(user)
      this.userslist.push(user)
      this.userslist.reverse()
    })
  })
  }
  ngOnDestroy(): void {
    // @ts-ignore
    this._destroyed$.next()
    this._destroyed$.complete()
  }

}

