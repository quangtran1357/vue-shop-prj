import axios from 'axios'

const ProductService = {
    products: async () => {
        const res = await axios.get('products')
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