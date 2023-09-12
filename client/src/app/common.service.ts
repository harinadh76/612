import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }
  
  signup(data){
    this.http.post('/signup',data.value).subscribe((response)=>{
      console.log("signup succesfull",response);
    },(error)=>{
      console.log("signing up failed",error);
    })
  }
}
