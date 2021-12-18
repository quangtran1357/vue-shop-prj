import axios from 'axios'

const ProductService = {
    products: async (limit = 10, currentPage = 1, title = null) => {

        const res = await axios.get('products', {
            params: {
                limit: limit,
                page: currentPage,
                title: title
            }
        })
        console.log(res);
        
        if (res.data.code === 200) {
            return res.data
        }
    },
    productDetail: async (id) => {
        const res = await axios.get(`products/${id}`)
        console.log(res);
        
        if (res.data.code === 200) {
            return res.data
        }
    },
    productDetailBySlug: async (slug) => {
        const res = await axios.get(`/product/${slug}`)
        console.log(res);
        if (res.data.code === 200) {
            return res.data
        }
    },
    addProduct: async (data) => {
        const res = await axios.post(`/products`, data)
        console.log(res);
        if (res.data.code === 200) {
            return res.data
        }
    },
}

export default ProductService;