import { Injectable, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl = 'http://localhost:5224/api/User/GetUser/';
  
  GetUrl = 'http://localhost:5224/api/User/GetUser/';
  PostUrl = 'http://localhost:5224/api/User/PostUser/';


  constructor(private http: HttpClient) { }
    
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.PostUrl, user);
  }

  getUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  editUser(id: number, newData: any): Observable<any> {
    // alert(id);
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, newData);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  } 

}
