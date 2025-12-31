import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { signupModel } from './signupModel';

@Injectable({
  providedIn: 'root',
})

export class SignInService {
  constructor(private http:HttpClient) {}

  url='http://localhost:8080/api/auth'; 
  
  registerUser(User: signupModel) {
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}/signup`, User,{headers});
  }
  
}
