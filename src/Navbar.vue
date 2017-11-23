<template lang="html">
  <nav class="navbar">
    <router-link to="/home">Home</router-link>
    <router-link to='/about'>About</router-link>
    <router-link to='/portfolio'>Portfolio</router-link>
    <router-link to='/contact'>Contact</router-link>
    <router-link to='/game'>Game</router-link>
    <div class="title">
      <h1>Member Chewbacca?</h1>
      <h3>I member.</h3>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  .navbar
    text-align: center
    padding-bottom: 100px
    background-color: #191E28
    color: #D1D2C8

  a
    text-decoration: none
    font-size: 1em
    font-family: 'Roboto', sans-serif
    color: #D1D2C8
    padding-left: 30px
    padding-right: 20px
    border-right: 1px solid
    border-right-color: white

  h1
    font-size: 6em
    margin-top: 100px
    text-align: center

  h3
    font-size: 4em
    text-align: center
</style>
