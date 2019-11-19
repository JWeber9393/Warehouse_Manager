import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProduct;
  ID: Number;

  constructor(
    private _http: HttpService,
    private formbuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this.newProduct = formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(0)]],
    })
   }

  ngOnInit() {
  }

  onSubmit(formdata) {
    console.log(formdata);
    let obs = this._http.createProduct(formdata);
    obs.subscribe(data => {
      console.log(data)
      // data.customID = this.ID
    })
    this._router.navigate(['products'])
  }

}
