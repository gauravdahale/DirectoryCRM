import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import {AngularFireMessaging} from "@angular/fire/compat/messaging";
@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  constructor(private angularFireMessaging:AngularFireMessaging) {
    // this.angularFireMessaging.messages.subscribe(
    //   (_messaging) => {
    //     _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    //     _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
    //   }
    // )
    this.angularFireMessaging.onMessage(next=>{
      next.onMessage = next.onMessage.bind(next)
      next.onTokenRefresh = next.onTokenRefresh.bind(next)
    })
  }
  requestPermission() {
    this.angularFireMessaging.requestPermission.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        alert(payload)
        // @ts-ignore
        this.currentMessage.next(payload);
      })
  }
}
