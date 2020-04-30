import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data = [
    {
      category: 'Electonic Appliances',
      expanded: true,
      products: [
        { id: 0, name: 'Microwave Ovens', price: '8' },
        { id: 1, name: 'AC', price: '5' },
        { id: 2, name: 'TV', price: '9' },
        { id: 3, name: 'Washing Machine', price: '7' }
      ]
    },
    {
      category: 'Men',
      products: [
        { id: 4, name: 'Swaters', price: '8' },
        { id: 5, name: 'Jackets', price: '6' },
        { id: 5, name: 'T-shirts', price: '6' },
        { id: 5, name: 'Jeans', price: '6' },
        { id: 5, name: 'Shirts', price: '6' }
      ]
    },
    {
      category: 'Women',
      products: [
        { id: 6, name: 'Sarees', price: '8' },
        { id: 7, name: 'Kurtas', price: '5' },
        { id: 8, name: 'Dress Material', price: '9' },
        { id: 5, name: 'Lehenga', price: '6' },
        { id: 5, name: 'Jackets', price: '6' }
      ]
    },
    {
      category: 'Baby Kids',
      products: [
        { id: 6, name: 'Sandles', price: '8' },
        { id: 7, name: 'Ethnic Wear', price: '5' },
        { id: 8, name: 'Causal Wear', price: '9' },
        { id: 5, name: 'T-Shirts & Pants', price: '6' }
      ]
    },
    {
      category: 'Home & Furniture',
      products: [
        { id: 6, name: 'Bed Sheets', price: '8' },
        { id: 7, name: 'Sofa', price: '5' },
        { id: 8, name: 'Wardrobes', price: '9' }
      ]
    },
    {
      category: 'Sports',
      products: [
        { id: 6, name: 'Cricket Kit', price: '8' },
        { id: 7, name: 'Batminton Kit', price: '5' },
        { id: 8, name: 'Football', price: '9' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}