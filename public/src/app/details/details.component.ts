import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  viewProduct;
  productID;

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this._route.params.subscribe((params: Params) => {
      console.log(params.id);

      this.productID = params.id;
      this._http.oneProduct(params.id).subscribe((product: any) => {
        console.log(product._id);
        this.viewProduct = product;
        console.log(this.viewProduct);
      });
      // this.viewProduct
    });
  }

  ngOnInit() {
  }
  

  onDelete(product){
    let obs = this._http.deleteProduct(product);
    obs.subscribe(() => console.log('data deleted'));
    this._router.navigate(['products'])
  }

}
