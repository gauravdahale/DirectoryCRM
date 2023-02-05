import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Order, Requests} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {


  constructor(private mDatabase: AngularFireDatabase) {
  }

  getRequests() {
    return this.mDatabase.list<Requests>('NewRequests', ref => ref.orderByChild('datetime').limitToLast(200)).valueChanges()
  }

  getOrders(city: string) {
    return this.mDatabase.list<Order>(city, ref => ref.orderByChild('timestamp').limitToLast(50)).valueChanges()

  }
}
