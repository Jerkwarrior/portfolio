import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Load from './Load.vue'
import Terminal from './Terminal.vue'
import Navbar from './Navbar.vue'
import MobileNavbar from './MobileNavbar.vue'
import Foot from './Foot.vue'
import Home from './Home.vue'
import HomeContent from './HomeContent.vue'
import About from './About.vue'
import Portfolio from './Portfolio.vue'
import Contact from './Contact.vue'
import Game from './Game.vue'

Vue.component('load', Load);
Vue.component('terminal', Terminal);
Vue.component('navbar', Navbar);
Vue.component('mobile-navbar', MobileNavbar);
Vue.component('foot', Foot);
Vue.component('home', Home);
Vue.component('homeContent', HomeContent);
Vue.component('about', About);
Vue.component('portfolio', Portfolio);
Vue.component('contact', Contact);
Vue.component('game', Game);


Vue.use(VueRouter);

const routes = [
  {path: '/', component: HomeContent},
  {path: '/About', component: About},
  {path: '/Portfolio', component: Portfolio},
  {path: '/Contact', component: Contact},
  {path: '/Game', component: Game}
];

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app');
