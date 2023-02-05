import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUsersComponent} from "./list-users/list-users.component";
import {ListRequestsComponent} from "./list-requests/list-requests.component";

const routes: Routes = [
  { path: 'users', component: ListUsersComponent },
  { path: 'orders', component: ListRequestsComponent },
  { path: 'orders:city', component: ListRequestsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
