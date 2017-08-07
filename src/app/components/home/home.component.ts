import { Component, OnInit } from '@angular/core';
import { AngularFireAuth  } from 'angularfire2/auth';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public fm: FlashMessagesService) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
