import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  editProduct;
  productID;

  constructor(
    private _http: HttpService,
    private formbuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params.id);

      this.productID = params.id;
      this._http.oneProduct(params.id).subscribe((product: any) => {
        console.log(product._id);
        this.editProduct = this.formbuilder.group({
          name: [product.name, [Validators.required, Validators.minLength(3)]],
          quantity: [product.quantity, [Validators.required, Validators.min(0)]],
          price: [product.price, [Validators.required, Validators.min(0)]],
        });
        this.editProduct.name = product.name;
      });
    });
  }
  onEdit(formdata) {
    console.log(formdata);
    console.log(this.productID);
    let obs = this._http.editProduct(formdata, this.productID);
    obs.subscribe(data => {
      console.log(data);

    });
    this._router.navigate(['/products'])
  }
}
