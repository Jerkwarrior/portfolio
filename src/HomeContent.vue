<template lang="html">
  <div class="title">
    <h1>Luke Marco</h1>
    <h3>Full stack developer</h3>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  @import 'style.sass'

  .title
    @include card

  h1
    top: 20%
    @include title-text

  h3
    top: 20%
    @include normal-text

</style>
