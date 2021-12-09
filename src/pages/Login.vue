<template>
   <!-- Content -->
  <div id="content"> 
    
    <!--======= PAGES INNER =========-->
    <section class="chart-page padding-top-100 padding-bottom-100">
      <div class="container"> 
        
        <!-- Payments Steps -->
        <div class="shopping-cart"> 
          
          <!-- SHOPPING INFORMATION -->
          <div class="cart-ship-info">
            <div class="row"> 
              
              <!-- ESTIMATE SHIPPING & TAX -->
              <div class="col-sm-7">
                <h6>LOGIN YOUR ACCOUNT</h6>
                <div>
                  <ul class="row">
                    
                    <!-- Name -->
                    <li class="col-md-12">
                      <label> EMAIL
                        <input v-model="userForm.email" type="text" name="email" value="" placeholder="">
                      </label>
                    </li>
                    <!-- LAST NAME -->
                    <li class="col-md-12">
                      <label> PASSWORD
                        <input v-model="userForm.password" type="password" name="last-name" value="" placeholder="">
                      </label>
                    </li>
                    
                    <!-- LOGIN -->
                    <li class="col-md-4">
                      <button @click="login" type="button" class="btn">LOGIN</button>
                    </li>
                    
                    <!-- CREATE AN ACCOUNT -->
                    <li class="col-md-4">
                      <div class="checkbox margin-0 margin-top-20">
                        <input id="checkbox1" class="styled" type="checkbox">
                        <label for="checkbox1"> Stay me Login</label>
                      </div>
                    </li>
                    
                    <!-- FORGET PASS -->
                    <li class="col-md-4">
                      <div class="checkbox margin-0 margin-top-20 text-right">
                        <a href="#.">Forget Password</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AuthService from '@/services/auth-service.js'
export default {
  name: 'Login',
  data() {
    return {
      userForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      const dataLogin = await AuthService.login(this.userForm)
      console.log(dataLogin)
      if (dataLogin.code === 200) {
        console.log(' Show popup login thanh cong')
        this.$router.push('/me')
      }
    }
  }
}
</script>

