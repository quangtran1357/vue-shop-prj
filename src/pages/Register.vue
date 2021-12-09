<template>
  <!-- Content -->
  <div id="content">
    <!--======= PAGES INNER =========-->
    <section class="chart-page padding-top-100 padding-bottom-100">
      <div class="container">
        <!-- Payments Steps -->
        <div class="shopping-cart">
          <!-- SHOPPING INFORMATION -->
          <div class="cart-ship-info register">
            <div class="row">
              <!-- ESTIMATE SHIPPING & TAX -->
              <div class="col-sm-12">
                <h6>REGISTER</h6>
                <div >
                  <ul class="row">
                    <!-- Name -->
                    <li class="col-md-6">
                      <label>
                        *FIRST NAME
                        <input
                          v-model="userForm.firstname"
                          type="text"
                          name="first-name"
                          value=""
                          placeholder=""
                        />
                      </label>
                    </li>
                    <!-- LAST NAME -->
                    <li class="col-md-6">
                      <label>
                        *LAST NAME
                        <input
                        v-model="userForm.lastname"
                          type="text"
                          name="last-name"
                          value=""
                          placeholder=""
                        />
                      </label>
                    </li>

                    <!-- EMAIL ADDRESS -->
                    <li class="col-md-6">
                      <label>
                        *EMAIL ADDRESS
                        <input
                        v-model="userForm.email"
                          type="text"
                          name="contry-state"
                          value=""
                          placeholder=""
                        />
                      </label>
                    </li>

                    <!-- LAST NAME -->
                    <li class="col-md-6">
                      <label>
                        *PASSWORD
                        <input
                        v-model="userForm.password"
                          type="password"
                          name="last-name"
                          value=""
                          placeholder=""
                        />
                      </label>
                    </li>

                    <!-- LAST NAME -->
                    <li class="col-md-6">
                      <label>
                        *PASSWORD CONFIRM
                        <input
                        v-model="userForm.password_confirmation"
                          type="password"
                          name="last-name"
                          value=""
                          placeholder=""
                        />
                      </label>
                    </li>

                    <!-- PHONE -->
                    <li class="col-md-6">
                      <button type="button" @click="register" class="btn">REGISTER NOW</button>
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
  name: "Register",
  data() {
    return {
      userForm: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
      }
    };
  },
  methods: {
    async register() {
      const dataRegister = AuthService.register(this.userForm)
      console.log(dataRegister)
    }
  }
};
</script>

