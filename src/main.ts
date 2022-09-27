import '@/main.css';

import _ from 'lodash';
import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import Product from '@/product.model';

console.log(_.shuffle([1, 2, 3]));

// declare var Global_Variable: string;
// declare let Local_Variable: string;
// declare const ReadOnly_Variable = 30;

// console.log(Global_Variable);
// console.log(Local_Variable);
// console.log(ReadOnly_Variable);

const products = [
  { title: 'A carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];

// const p1 = new Product('A Book', 12.99);
// console.log(p1.getInformation());

// const loadedProducts = products.map((product) => {
//   return new Product(product.title, product.price);
// });

const loadedProducts = plainToInstance(Product, products);

loadedProducts.forEach((product) => {
  console.log(product.getInformation());
});

const newProduct = new Product('', -5.99);

validate(newProduct).then((errors) => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS!', errors);
    return;
  }

  console.log(newProduct.getInformation());
});
