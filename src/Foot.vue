<template lang="html">
  <div class="footer">
    <p>Copyright © 2017 Luke Marco</p>
  </div>
</template>

<script>
export default {
  // TODO Add year to copyright in js
  }

</script>

<style lang="sass">
  @import 'style.sass'

  .footer
    position: absolute
    bottom: 0px
    left: 0px
    right: 0px
    padding: 5px
    color: $nav-text
    text-align: center
    @media only screen and (max-device-height: 420px)
      display: none

</style>
