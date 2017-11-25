<template lang="html">
  <div class="portfolio">
    <h1>Portfolio</h1>
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
      @include title-text
</style>
