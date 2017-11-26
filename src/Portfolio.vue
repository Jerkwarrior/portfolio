<template lang="html">
  <div class="portfolio">
    <h1>Portfolio</h1>
    <p>Under Construction!</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  @import 'style.sass'

  .portfolio
    @include card

    h1
      top: 20%
      @include title-text
    p
      top: 20%
      @include normal-text
</style>
