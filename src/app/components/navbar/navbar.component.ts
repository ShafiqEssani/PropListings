import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth,
    private auth: AngularFireAuth,
    private router: Router,
    public fm: FlashMessagesService) {
    this.user = afAuth.authState;
   }

  ngOnInit() {
    // this.auth.subscribe(user => {
    //   if (!user) {
    //     this.router.navigate(['/']);
    //   }
    // });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.fm.show('You are logged out',
    {cssClass: 'alert-success', timeout: 3000});    
  }
}
