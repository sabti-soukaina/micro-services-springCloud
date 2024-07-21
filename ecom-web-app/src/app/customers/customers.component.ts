import { Component ,OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements  OnInit{
  customers :  any;
  err :any;

  constructor(private http:HttpClient, private  router:Router) {
  }

  ngOnInit() {
    this.http.get("http://localhost:1818/CUSTOMER-SERVICE/customers?projection=fullProduct")
      .subscribe({
        next :(data)=>{
          this.customers=data;
        },
        error : (err)=>{console.log(err);}
      });
  }
  getBill(c: any) {
    this.router.navigateByUrl("/bill/"+c.id)

  }

}
