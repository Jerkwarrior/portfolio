import Vue from 'vue'
import App from './App.vue'
import Terminal from './Terminal.vue'

Vue.component('terminal', Terminal);

new Vue({
  el: '#app',
  render: h => h(App)
})
