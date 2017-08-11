import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  id: any;
  card: any;
  imageUrl: any;

  constructor(
    private fbs: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Get the ID
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params);
    

    this.fbs.getCardDetails(this.id)
      .subscribe(xyz => {
        this.card = xyz;
        //console.log(this.card);
        

    // @TODO  - Storage Ref
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child(this.card.path);
    storageRef.child(this.card.path).getDownloadURL().then(
      (url) => {
        this.imageUrl = url;
      }).catch((error) =>{
        console.log(error);
      });
    });

  }

  onDeleteClick(){
    this.fbs.deleteCard(this.id);
    this.router.navigate(['/listings']);
  }

}
