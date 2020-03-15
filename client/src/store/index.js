import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth/index';
import tours from './modules/tours/index';
import users from './modules/users/index';
import stripe from './modules/stripe/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    tours,
    users,
    stripe
  }
});
