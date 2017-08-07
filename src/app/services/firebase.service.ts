import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Listing } from '../listing'; //interface from card
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  card: FirebaseObjectObservable<Listing>;
  folder: any;

  constructor(private db: AngularFireDatabase) {
    this.folder = 'listingimages';
    this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>;
   }

  getListings() {
    return this.listings;
  }

  getCardDetails(id) {
    this.card = this.db.object('/listings/'+id) as FirebaseObjectObservable<Listing>;
    return this.card;
  }

  addCard(card){
    //Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        card.image = selectedFile.name;
        card.path = path;
        return this.listings.push(card);
      });
    }
  }

  updateListing(id, card){
    return this.listings.update(id, card);
  }

  deleteCard(id){
    return this.listings.remove(id).catch((error) =>{
        console.log(error);
      });
  }
}
