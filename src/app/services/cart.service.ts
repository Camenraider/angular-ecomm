import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    // { 
    //   id: 1,
    //   title: 'God of War Ragnarök - Edição Standard - PlayStation 5',
    //   price: 279.90,
    //   image:"https://images-na.ssl-images-amazon.com/images/I/8136lnf0n2L._AC_UL232_SR232,232_.jpg",
    //   stock: 10
    // },
    // { 
    //   id: 2,
    //   title: 'Gran Turismo 7 Edição Padrão - PlayStation 5',
    //   price: 149.30,
    //   image:"https://images-na.ssl-images-amazon.com/images/I/61o3TmIqogL._AC_UL232_SR232,232_.jpg",
    //   stock: 0
    // },
  ]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id))
  }

  constructor() { }
}
