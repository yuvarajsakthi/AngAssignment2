import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products: Products[] = [
    {
      productName: 'Laptop',
      productPrice: 49999,
      productDescription: 'High performance, 16GB RAM, 512GB SSD',
      productStock: 5,
      productOnSale: true,
      productRating: 4.5,
      productReviews: [
        { reviewerName: 'User1', reviewerComment: 'Great product!' },
        { reviewerName: 'User2', reviewerComment: 'Works smoothly.' },
        { reviewerName: 'User3', reviewerComment: 'Good value for money.' },
      ],
    },
    {
      productName: 'Smartphone',
      productPrice: 1499,
      productDescription: 'Latest model, 128GB storage, excellent camera',
      productStock: 5,
      productOnSale: true,
      productRating: 4.5,
      productReviews: [
        { reviewerName: 'User1', reviewerComment: 'Great product!' },
        { reviewerName: 'User2', reviewerComment: 'Works smoothly.' },
        { reviewerName: 'User3', reviewerComment: 'Good value for money.' },
      ],
    },
  ];

  user = {
    name: 'Yuvaraj',
    email: 'yuvaraj@kanini.com',
  };

  cart: Products[] = [];

  addToCart(item: Products) {
    this.cart.push(item);
    console.log('Cart now:', this.cart);
  }

  removeFromCart(item: Products) {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
      console.log('Cart now:', this.cart);
    }
  }
}
