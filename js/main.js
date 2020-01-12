'use strict';

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook',  price: 20000, img:'img/notebook.jpg'},
      {id: 2, title: 'Mouse',     price: 1500,  img: 'img/mouse.jpg'},
      {id: 3, title: 'Keyboard',  price: 5000,  img: 'img/keyboard.jpg'},
      {id: 4, title: 'Gamepad',   price: 4500,  img:'img/gamepad.jpg'},
    ]
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = product.img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <h3 class="product__title">${this.title}</h3>
              <img src='${this.img}' alt="alt" class="product__img">
              <p class="product__price">${this.price} руб.</p>
              <button class="by-btn">Добавить в корзину</button>
            </div>`;
  }
}

class CartList extends ProductList {
    countCartPrice() {}
}

class CartItem extends ProductItem {

}

const list = new ProductList();