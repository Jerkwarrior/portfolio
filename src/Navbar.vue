<template lang="html">
  <div class="nav-wrapper">
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to='/About'>About</router-link>
      <router-link to='/portfolio'>Portfolio</router-link>
      <router-link to='/contact'>Contact</router-link>
      <!-- <router-link to='/game'>Game</router-link> -->
      <!-- TODO Add blog section -->
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  @import 'style.sass'

  .nav-wrapper
    line-height: 30px
    padding-bottom: 100px
    background-color: $nav-background
    color: $nav-text
    border-bottom: 5px solid
    border-bottom-color: $border

  .navbar
    text-align: center

    a
      vertical-align: middle
      text-decoration: none
      font-size: 1em
      color: $nav-text
      padding-left: 30px
      padding-right: 20px
      border-right: 1px solid
      border-right-color: $main-text
      transition: font-size 0.5s ease


    a:hover
      font-size: 2em
      color: $main-text

  nav
    .router-link-exact-active
      color: $main-text
      font-size: 2em
      cursor: pointer

</style>
