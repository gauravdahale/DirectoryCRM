import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUsersComponent} from "./list-users/list-users.component";
import {ListRequestsComponent} from "./list-requests/list-requests.component";
import {DeleteDataComponent} from "./delete-data/delete-data.component";

const routes: Routes = [
  { path: 'users', component: ListUsersComponent },
  { path: 'orders', component: ListRequestsComponent },
  { path: 'requests', component: ListRequestsComponent },
  { path: 'orders:city', component: ListRequestsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'request-delete', component: DeleteDataComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
