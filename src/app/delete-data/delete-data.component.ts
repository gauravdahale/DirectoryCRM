import { Component } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
// import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss']
})
export class DeleteDataComponent {
  phoneNumber=''

  constructor(private mFirestore: AngularFirestore,
  ) {}

  deleteData() {
    // Assuming you have a deleteData method in your data service
    this.mFirestore.collection('delete-data-requests').add({mobile:this.phoneNumber})
        .then(res=>{
          alert('Request Submitted!! We will let you now when this process completes!!')
// this.mSnackbar.open('Delete Data Request Successfully sent!Your data will be deleted in 2 days!')._dismissAfter(5000)
        })
  }
}
