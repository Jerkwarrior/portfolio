<template lang="html">
  <div class="wrapper">
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to='/About'>About</router-link>
      <router-link to='/portfolio'>Portfolio</router-link>
      <router-link to='/contact'>Contact</router-link>
      <router-link to='/game'>Game</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  .wrapper
    line-height: 30px
    padding-bottom: 100px
    background-color: #191E28
    color: #D1D2C8

  .navbar
    text-align: center

  a
    vertical-align: middle
    text-decoration: none
    font-size: 1em
    font-family: 'Roboto', sans-serif
    color: #D1D2C8
    padding-left: 30px
    padding-right: 20px
    border-right: 1px solid
    border-right-color: #F2F2F2
    transition: font-size 0.5s ease

  a:hover
    font-size: 2em
    color: #F2F2F2

  nav
    .router-link-exact-active
      // background-color: #141921
      color: #F2F2F2
      font-size: 2em
      cursor: pointer

</style>
