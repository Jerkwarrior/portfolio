<template lang="html">
  <div class="contact">
    <div class="link-top"></div>
    <div class="link-container">
      <!-- <a href="#"><i class="fa fa-envelope-square"></i></a> -->
      <!-- TODO Sort safe email overlay and form -->
      <a href="https://www.facebook.com/luke.marco.89"><i class="fa fa-facebook-square"></i></a>
      <a href="http://www.linkedin.com/in/luke-marco"><i class="fa fa-linkedin-square"></i></a>
      <a href="https://www.github.com/jerkwarrior"><i class="fa fa-github-square"></i></a>
    </div>
    <div class="link-bottom"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  @import 'style.sass'

  .contact
    @include card

    .link-top
      display: relative
      height: 33%
    .link-container
      display: relative
      height: 33%
    .link-bottom
      display: relative
      height: 33%

    a
      color: 180px
      border: 1px solid
      border-color: $main-background
      text-decoration: none

      .fa
        display: inline
        font-size: 200px
        padding: 2%
        vertical-align: top
        height: 180px
        transition: font-size 0.5s ease

        &:hover
          font-size: 250px

</style>
