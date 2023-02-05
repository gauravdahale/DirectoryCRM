import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideDatabase, getDatabase} from '@angular/fire/database';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage';
import {ListUsersComponent} from './list-users/list-users.component';
import {MenuComponent} from './menu/menu.component';
import {AppRoutingModule} from "./app-routing.module";
//? NG PRIME
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
//? NG PRIME Started
import {CardModule} from 'primeng/card';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import { ListRequestsComponent } from './list-requests/list-requests.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {getMessaging, provideMessaging} from "@angular/fire/messaging";
import {AsyncPipe} from "@angular/common";
import {MessagingService} from "./messaging.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ListUsersComponent,
    MenuComponent,
    ListRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    NgbModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    ScreenTrackingService, UserTrackingService,AsyncPipe,MessagingService,
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ]
})
export class AppModule {
}
