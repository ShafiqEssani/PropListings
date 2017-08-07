import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  id: any;
  title: any;
  owner: any;
  city: any;
  bedrooms: any;
  type: any;
  image: any;
  price: any;

  constructor(
    private fbs: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.fbs.getCardDetails(this.id)
      .subscribe(card => {
        //console.log(card.price);
        
        this.title = card.title;
        this.owner = card.owner;
        this.city = card.city;
        this.bedrooms = card.bedrooms;
        this.price = card.price;
        this.type = card.type;
      });
  }

  onEditSubmit() {
    let card = {
      title: this.title,
      owner: this.owner,
      city: this.city,
      bedrooms: this.bedrooms,
      price: this.price,
      type: this.type
    }

    this.fbs.updateListing(this.id, card);
    this.router.navigate(['/listings']);
  }
}