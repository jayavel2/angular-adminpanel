import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData=[];
  i=0;
  constructor( private http: HttpClient) { }
 
postUserData(userData: any): Observable<any>{
  console.log("----service",this.http.post('https://60fe7a762574110017078606.mockapi.io/api/v1/userdata',userData));
  return this.http.post('https://60fe7a762574110017078606.mockapi.io/api/v1/userdata',userData)
  //.catch(this.errorHandler)
}
getUserData(): Observable<any>{
  return this.http.get('https://60fe7a762574110017078606.mockapi.io/api/v1/userdata')
  //.catch(this.errorHandler)
}
deleteUserData(i : any): Observable<any>{
  console.log('i',this.http.delete(`https://60fe7a762574110017078606.mockapi.io/api/v1/userdata${i}`));
  return this.http.delete(`https://60fe7a762574110017078606.mockapi.io/api/v1/userdata/${i}`)
  //.catch(this.errorHandler)
}
// getUserData(): Observable<Employee[]>{
//   return this.http.get<Employee[]>('https://60fe7a762574110017078606.mockapi.io/api/v1/userdata')
//   //.catch(this.errorHandler)
// }

// errorHandler(error: HttpErrorResponse){

// }

}
