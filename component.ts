import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello_component.html'
    
})
export class App {
  name = 'Angular';


  orderID: Number = 123;

  deliveryAgentName: string = 'John D';

  customerName: string = 'Vijay Kumar';

  deliveryAddress: Array<string> = ['255 Baker Street'];

  orderPrice: Number = 900;

  orderVerified: string = 'Order not Verified!';

  orderPaymentStatus: string = 'Paid';

  productImg: string =

    'https://static.toiimg.com/photo/msid-87930581/87930581.jpg';

  constructor() {}

  ngOnInit(): void {}

 

  verifyOrder() {

    this.orderVerified = 'Order is Verified!';

  }
}

bootstrapApplication(App);
