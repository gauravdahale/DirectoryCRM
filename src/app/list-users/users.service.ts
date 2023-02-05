import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private mDatabase:AngularFireDatabase) { }


getUsers(){
   return  this.mDatabase.list('users',ref => ref.orderByChild('timestamp').limitToLast(50)).valueChanges()
}
}
