const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [
      {id_product: 1, product_name: "Геймпад PS4", price: 4500},
      {id_product: 2, product_name: "Клавиатура", price: 1200},
      {id_product: 3, product_name: "Графический планшет", price: 18000},
      {id_product: 4, product_name: "Стабилизатор напряжения", price: 5000},
    ],
    cartProducts: [],
    imgCatalog: 'https://placehold.it/200x150',
    searchLine: '',
    filteredGoods: [],
    isVisibleCart: false,
  },
  methods: {
    getJson(url) {
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          });
    },
    filterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filteredGoods = this.products.filter(product => regexp.test(product.product_name));
      this.products.forEach(el => {
        const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
        if(!this.filteredGoods.includes(el)){
          block.classList.add('invisible');
        } else {
          block.classList.remove('invisible');
        }
      })
     },
  },
  mounted() {
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for (let el of data) {
            this.products.push(el);
          }
        });
  },
});
