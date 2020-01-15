'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// const getRequest = (url) => {
//   return new Promise((resolve, reject ) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.onreadystatechange = () => {
//       resolve(xhr.responseText);
//       reject(console.error('err'));
//     };
//     xhr.send();
//   });
// };

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.cart = {};
    this.allProducts = [];
    this.addToCart();
    this._getProducts()
        .then(data => {
          this.goods = [...data];
          this.render();
        });
  }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        });
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  addToCart() {

  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x200') {
    this.id_product = product.id_product;
    this.product_name = product.product_name;
    this.price = product.price;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id_product}">
              <img src='${this.img}' alt="alt" class="product__img">
              <h3 class="product__title">${this.product_name}</h3>              
              <p class="product__price">${this.price} руб.</p>
              <button id="addToCart" data-id="${this.id_product}">Добавить в корзину</button>
            </div>`;
  }


}

class CartList {
  constructor(container = '.cart') {
    this.container = container;
    this.cartBlock = null;
    this.clrCartButton = null;
    this.catalogList = [];
    this.goods = [];
    this._getCartList();
    this._removeCartItem();
  }

  _getCartList() {

  }

  _removeCartItem() {

  }
}

class CartItem {

}

const list = new ProductList();
const cartList = new CartList();