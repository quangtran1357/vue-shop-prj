<template>
  <header class="header">
    <div
        id="undefined-sticky-wrapper"
        class="sticky-wrapper"
        style="height: 78px"
    >
      <div
          id="undefined-sticky-wrapper"
          class="sticky-wrapper"
          style="height: 78px"
      >
        <div class="sticky container">
          <!-- Logo -->
          <div class="logo">
            <router-link to="/"
            ><img class="img-responsive" src="@/assets/images/logo.png" alt="logo"
            /></router-link>
          </div>

          <nav class="navbar ownmenu">
            <!-- NAV -->
            <div class="navbar-collapse" id="nav-open-btn">
              <ul class="nav">
                <li class="dropdown">
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/about">About</router-link>
                </li>

                <!-- MEGA MENU -->
                <li class="dropdown megamenu">
                  <router-link to="/store"
                  >store
                  </router-link
                  >
                </li>
                <li>
                  <router-link to="/contact"> contact</router-link>
                </li>
              </ul>
            </div>
            <div class="nav-right">
              <ul class="navbar-right">

                <!-- USER INFO -->
                <li @click="toggleActiveOpenClass('user-info')" class="dropdown user-acc"
                    :class="{'open': activeOpenClass === 'user-info'}">
                  <a href="#" class="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false"><i class="icon-user"></i> </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <template v-if="user && user !== ''">
                      <li>
                        <h6>HELLO! Jhon Smith</h6>
                      </li>
                      <li><router-link to="/">MY CART</router-link></li>
                      <li><router-link to="/me">ACCOUNT INFO</router-link></li>
                      <li><a @click="logout">LOG OUT</a></li>
                    </template>
                    <template v-else>
                      <li><router-link to="/login">LOGIN</router-link></li>
                      <li><router-link to="/register">REGISTER</router-link></li>
                    </template>
                  </ul>
                </li>

                <!-- USER BASKET -->
                <li @click="toggleActiveOpenClass('user-basket')" class="dropdown user-basket open"
                    :class="{'open': activeOpenClass === 'user-basket'}"><a href="#" class="dropdown-toggle"
                                                                            data-toggle="dropdown"
                                                                            role="button" aria-haspopup="true"
                                                                            aria-expanded="true"><i
                    class="icon-basket-loaded"></i> </a>
                  <the-cart/>
                </li>

                <!--                &lt;!&ndash; SEARCH BAR &ndash;&gt;-->
                <!--                <li class="dropdown">-->
                <!--                  <a href="javascript:void(0);" class="search-open">-->
                <!--                  <i-->
                <!--                    class=" icon-magnifier"></i></a>-->
                <!--                  <div class="search-inside animated bounceInUp"><i class="icon-close search-close"></i>-->
                <!--                    <div class="search-overlay"></div>-->
                <!--                    <div class="position-center-center">-->
                <!--                      <div class="search">-->
                <!--                        <form>-->
                <!--                          <input type="search" placeholder="Search Shop">-->
                <!--                          <button type="submit"><i class="icon-check"></i></button>-->
                <!--                        </form>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </li>-->
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AuthService from '@/services/auth-service.js'
import TheCart from './TheCart.vue';
export default {
  components: { TheCart },
  name: "TheHeader",
  data() {
    return {
      activeOpenClass: ''
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    toggleActiveOpenClass(key) {
      if (this.activeOpenClass === key) {
        this.activeOpenClass = '';
        return;
      }
      this.activeOpenClass = key;
    },
    async logout() {
      const dataLogout = await AuthService.logout()
      console.log(dataLogout)
      if (dataLogout.code === 200) {
        this.$store.dispatch('actionSetUser', null)
      }
    }
  }
};
</script>

<style scoped src="@/assets/css/components/common/the-header.css"></style>
