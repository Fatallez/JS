Vue.component('search', {
    data() {
        return {
            searchLine: '',
            filteredGoods: [],
            // productsAPI: this.$root.$refs.products,
        }
    },
    methods: {
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.$root.$refs.products.productList.filter(product => regexp.test(product.product_name));
            this.$root.$refs.products.productList.forEach(el => {
                const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
                if(!this.filteredGoods.includes(el)){
                    block.classList.add('invisible');
                } else {
                    block.classList.remove('invisible');
                }
            })
        },
    },
    template: `<form action="#" class="search-form" @submit.prevent="filterGoods">
                   <input type="text" class="search-field" v-model="searchLine">
                   <button class="btn-search" type="submit">
                       <i class="fas fa-search"></i>
                   </button>
               </form>`
});