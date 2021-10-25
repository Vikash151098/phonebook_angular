import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent },
      { path: 'add', component: AddContactComponent },
      { path: ':id', component: ContactDetailsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
