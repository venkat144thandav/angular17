import { Component, signal, Signal } from '@angular/core';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { UserService } from '../user.service';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { DialogCloseResult, DialogRef, DialogService, KENDO_DIALOGS } from '@progress/kendo-angular-dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AddUserComponent,KENDO_GRID,KENDO_INPUTS,FormsModule,KENDO_BUTTONS,KENDO_DIALOGS,CommonModule   ],
  providers:[UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
    gridData=[]
    adminUser:boolean=true
  constructor(public service:UserService,public dialogService:DialogService){

  }
  ngOnInit(){
    this.listUser()
  }
  listUser(){
    this.service.listUsers().subscribe((res:any)=>{
      console.log(res)
      this.gridData=res;
    })
  }
  onConfirmAction(dataItem:any){
    this.service.updateUsers(dataItem.id,dataItem).subscribe((res:any)=>{
      this.listUser()
    })
  }
  deleteUser(dataItem:any){
    this.service.deleteUser(dataItem.id).subscribe((res:any)=>{
      this.listUser()
    })
  }
  loadAdd(){
    const dialogRef: DialogRef = this.dialogService.open({
      title: "Please confirm",

      // Show component
      content: AddUserComponent,

      // actions: [{ text: "Cancel" }, { text: "Save", themeColor: "primary" }],
    }); 
    dialogRef.result.subscribe((result:any) => {
      
      if (result instanceof DialogCloseResult) {
        console.log("close");
      } else{
        this.listUser()
      }
    });
   }
   

}
