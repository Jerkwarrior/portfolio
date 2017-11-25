<template lang="html">
  <div class="contact">
    <i class="fa fa-envelope-square" aria-hidden="true"></i>
    <i class="fa fa-facebook-square" aria-hidden="true"></i>
    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
    <i class="fa fa-github-square" aria-hidden="true"></i>
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

  .fa
    position: relative
    top: 25%
    font-size: 200px
    padding: 2%
</style>
