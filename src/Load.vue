<template lang="html">
  <div class="load">
    <div class="load-wrapper">
      <i class="fa fa-circle-o-notch fa-spin"></i>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  @import 'style.sass'

  .load
    position: absolute
    text-align: center
    top: 0
    bottom: 0
    left: 0
    right: 0

    .fa-circle-o-notch
      color: $nav-text
      line-height: 6
      vertical-align: middle
      font-size: 150px

      @media only screen and (max-device-height: 800px)
        line-height: 4
</style>
