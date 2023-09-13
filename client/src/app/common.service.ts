import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(protected http : HttpClient) { }
  apiUrl='http://localhost:3000'
  
  signup(data : any){
    console.log("working")
    //
    this.http.post(`${this.apiUrl}/api/signup`,data.value).subscribe((response)=>{
      console.log("signup succesfull",response);
    }
    // ,(error)=>{
    //   console.log("signing up failed",error);
    // }
    )
  }
}
