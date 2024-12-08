import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://localhost:44308/api/Contact'; 
  constructor(public http: HttpClient)
   { }

   getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl);
   }

   createContact(contact:any):Observable<any>{
    return this.http.post(this.apiUrl,contact);
   }

   updateContact(id: number, contact: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
