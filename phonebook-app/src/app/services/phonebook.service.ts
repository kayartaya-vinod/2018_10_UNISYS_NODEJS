import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const baseUrl = 'http://localhost:4321/api/contacts/';


@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: Http) { }

  getAllContacts() {
    return this.http.get(baseUrl);
  }
}
