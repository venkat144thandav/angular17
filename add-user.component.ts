import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogRef } from '@progress/kendo-angular-dialog';
import { LabelModule } from '@progress/kendo-angular-label';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule,LabelModule,ReactiveFormsModule,KENDO_INPUTS],
  providers:[UserService],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  userDetails:FormGroup;
  constructor(private fb:FormBuilder,public service:UserService,public dialog : DialogRef  ){
    this.userDetails=this.fb.group({
      name:new FormControl(null,Validators.required)
    })
  }
cancel(){
  this.dialog.close({ text: "Submit", themeColor: "primary" })
}
save(){
  let body={
    name:this.userDetails.value['name'],
    avatar:null
  }
  this.service.saveUser(body).subscribe((res:any)=>{
    this.dialog.close({ text: "saved" })
  })

}
}
