Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            productList: [
                {id_product: 232, product_name: "Геймпад PS4", price: 4500},
                {id_product: 212, product_name: "Графический планшет", price: 16000},
                {id_product: 356, product_name: "Монитор", price: 8500},
                {id_product: 4654, product_name: "Кофеварка", price: 13500},
            ],
            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    methods: {

    },
        mounted() {
            this.$parent.getJson(`${API + this.catalogUrl}`)
                .then(data => {
                    for(let el of data){
                        this.productList.push(el);
                    }
                });
        },
    template: `
        <div class="products">
            <product v-for="item of productList" :key="item.id_product" :img="imgCatalog" :product="item" :data-id="item.id_product"></product>
        </div>
    `
});

Vue.component('product', {
    props: ['product', 'img'],
    data() {
      return {
          cartAPI: this.$root.$refs.cart,
      };
    },

    template: `
    <div class="product-item">
                <img :src="img" alt="Some img">
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}₽</p>
                    <button class="buy-btn" @click="cartAPI.addProduct(product)">Купить</button>
                </div>
            </div>
    `
});
