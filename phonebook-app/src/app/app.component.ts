import { Component } from '@angular/core';
import { PhonebookService } from './services/phonebook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  contacts = [];

  constructor(private ps: PhonebookService) { }

  ngOnInit() {
    this.ps.getAllContacts()
      .subscribe(resp => this.contacts = resp.json());
  }

}
