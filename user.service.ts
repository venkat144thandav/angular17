import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  listUsers(){
    return this.http.get('https://66bc3f8c24da2de7ff69bcf5.mockapi.io/users')
  }
  updateUsers(id:any,body:any){
    return this.http.put('https://66bc3f8c24da2de7ff69bcf5.mockapi.io/users/'+id,body)
  }
  deleteUser(id:any){
    return this.http.delete('https://66bc3f8c24da2de7ff69bcf5.mockapi.io/users/'+id)
  }
  saveUser(body:any){
    return this.http.post('https://66bc3f8c24da2de7ff69bcf5.mockapi.io/users/',body)
  }
}

