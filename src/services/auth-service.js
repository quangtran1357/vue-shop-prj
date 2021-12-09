import axios from 'axios'

const AuthService = {
    initAuthHeader: function() {
        const token = localStorage.getItem('vueShopToken')
        if (token && token !== '') {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        } else {
            axios.defaults.headers.common['Authorization'] = ``
        }
    },
    resetAuthHeader: async function() {
        localStorage.setItem('vueShopToken', '')
        this.initAuthHeader()
    },

    login: async function (user) {
        const res = await axios.post('login', user)
        if (res.data.code === 200) {
            localStorage.setItem('vueShopToken', res.data.data.token.access_token)
            console.log(this.initAuthHeader())
            return res.data
        }
    },
    register: async function (user) {
        const res = await axios.post('register', {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        })
        console.log(res)
        if (res.data.code === 200) {
            console.log('register successful')
        }
        return res.data
    },
    me: async function () {
        try {
            const res = await axios.post('me')
            console.log(res)
            if (res.data.code === 200) {
                console.log('Data oke')
            } else {
                this.resetAuthHeader();
            }
            return res.data
        } catch (e) {
            this.resetAuthHeader();
            console.log('not oke')
        }
        
        
    },
    logout: async function  () {
        const res = await axios.post('logout')
        console.log(res)
        if (res.data.code === 200) {
            console.log('logout success')
            this.resetAuthHeader();
        }
        return res.data
    }
}

export default AuthService