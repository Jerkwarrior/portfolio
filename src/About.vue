<template lang="html">
  <div class="about">
    <div class="left">
      <h1>About</h1>
    </div>
    <div class="right">
      <p>Hi, I'm Luke.</p>
      <p> Welcome to my site,</p>
      <p>I am a full stack developer looking for work.</p>
      <p>I have experience with Ruby, JS, HTML, SASS & Vue.</p>
      <p>Please check out my portfolio &</p>
      <p>feel free to get in contact if you need anything!</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  @import 'style.sass'

  .about
    @include card

    .left
      display: grid
      width: 50%
      float: left

    .right
      overflow: hidden
      width: 50%
      text-align: left

    h1
      top: 50%
      @include title-text

    p
      @include normal-text
</style>
