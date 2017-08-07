import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  title: any;
  owner: any;
  city: any;
  bedrooms: any;
  price: any;
  type: any;
  image: any;
  

  constructor(
    private fb: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let card = {
      title: this.title,
      owner: this.owner,
      city: this.city,
      bedrooms: this.bedrooms,
      price: this.price,
      type: this.type
    }
    
    console.log(this.title);
    
    this.fb.addCard(card);

    this.router.navigate(['/listings']);
  }

}
