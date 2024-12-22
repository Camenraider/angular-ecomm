import { Component, input, inject } from '@angular/core';
import { Product } from '../../../models/products';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div 
      class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center"
    >
      <img [src]="item().image" class="w-[50px] h-[50px] object-contain">
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm">{{ 'R$ ' + item().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button 
        label="Remove" 
        (btnClicked)="cartService.removeFromCart(item().id)" 
        class="bg-red-500 rounded-xl"     
        />
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
    cartService = inject(CartService);
    item = input.required<Product>();
}
