import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FlashMessagesModule } from 'angular2-flash-messages';
import * as firebase from 'firebase/app';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'add-card', component: AddCardComponent},
  {path: 'card/:id', component: CardComponent},
  {path: 'edit-card/:id', component: EditCardComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    CardComponent,
    AddCardComponent,
    EditCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService, AngularFireDatabase, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
