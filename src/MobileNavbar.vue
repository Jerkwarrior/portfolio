<template lang="html">
  <div class="mobileNav">
    <div v-on:click="menu" class="button-container" id="button">
      <div class="hamburger-1"></div>
      <div class="hamburger-2"></div>
      <div class="hamburger-3"></div>
    </div>
    <transition name='dropdown' v-if="view">
      <div class="dropdown-container">
        <ul>
          <li><router-link v-on:click.native="menu" to="/">Home</router-link></li>
          <li><router-link v-on:click.native="menu" to='/About'>About</router-link></li>
          <li><router-link @click.native="menu" to='/portfolio'>Portfolio</router-link></li>
          <li><router-link v-on:click.native="menu" to='/contact'>Contact</router-link></li>
        </ul>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'mobileNav',
  data: function() {
    return {view: false}
  },
  methods: {
    menu: function() {
      this.view = !this.view;
      document.getElementById('button').classList.toggle("change");
    }
  },

}
</script>


<style lang="sass">
  @import 'style.sass'

  .mobileNav
    line-height: 30px
    padding-bottom: 100px
    background-color: $nav-background
    color: $nav-text
    border-bottom: 5px solid
    border-bottom-color: $border

  .button-container
    position: absolute
    right: 5%
    // height: 100%
    width: 50px
    margin-top: 5px
    z-index: 1001

  .hamburger-1, .hamburger-2, .hamburger-3
    width: 35px
    height: 5px
    background-color: $main-text
    margin: 6px 0
    transition: 0.5s ease

  .change .hamburger-1
      transform: rotate(-45deg) translate(-9px, 6px)
      transition: 0.5s ease

  .change .hamburger-2
      opacity: 0
      transition: 0.5s ease

  .change .hamburger-3
      transform: rotate(45deg) translate(-8px, -8px)
      transition: 0.5s ease


  .dropdown-container
    background-color: RGB(16, 15, 17, 0.9)
    display: flex
    position: absolute
    width: 100%
    margin: 0
    padding: 0
    justify-content: center
    z-index: 1000
    max-height: 220px
    text-align: center

    ul
      list-style-type: none
    li
      margin-bottom: 20px
    a
      text-decoration: none
      color: $nav-text

    nav
    .router-link-exact-active
      color: $main-text
      font-size: 2em
      cursor: pointer


  .dropdown-enter-active
    transition: opacity 5s ease
    // TODO This isn't fucking working!
  .dropdown-leave-active
    transition: opacity 0.5s ease
    // transform: translate3d(1000%)

  .dropdown-enter, .dropdown-leave-to
    opacity: 0

</style>
