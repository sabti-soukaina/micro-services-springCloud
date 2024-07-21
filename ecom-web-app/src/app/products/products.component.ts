import { Component , OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements  OnInit{
  products : any;

  constructor(private  http:HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://localhost:1818/PRODUCT-SERVICE/products?projection=fullProduct")
      .subscribe({
      next : (data)=>{
        this.products = data;
      },
      error :(err)=>{}
    });
  }

}
