import Vue from 'vue'
import App from './App.vue'
import Terminal from './Terminal.vue'
import Navbar from './Navbar.vue'
import Home from './Home.vue'
import About from './About.vue'
import Portfolio from './Portfolio.vue'
import Contact from './Contact.vue'
import Game from './Game.vue'
import VueRouter from 'vue-router'


Vue.component('terminal', Terminal);
Vue.component('navbar', Navbar);
Vue.component('home', Home);
Vue.component('about', About);
Vue.component('portfolio', Portfolio);
Vue.component('contact', Contact);
Vue.component('game', Game);


Vue.use(VueRouter);

const routes = [
  {path: '/Home.vue', component: Home},
  {path: '/About.vue', component: About},
  {path: '/Portfolio.vue', component: Portfolio},
  {path: '/Contact.vue', component: Contact},
  {path: '/Game.vue', component: Game}
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app');
