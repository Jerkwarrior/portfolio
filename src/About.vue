<template lang="html">
  <div class="about">
    <div class="left">
      <h1>About</h1>
    </div>
    <div class="right">
      <p>Hi, I'm Luke.</p>
      <p>I am a full stack developer.</p>
      <p>I have experience with Ruby on Rails, Javascript, Vue, HTML5, CSS3, & SASS.</p>
      <p>Please check out my portfolio & feel free to get in contact.</p>
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
      height: 550px
      float: left
      @media only screen and (max-device-width: 750px)
        display: none

    .right
      overflow: hidden
      width: 50%
      height: 550px
      text-align: left
      @media only screen and (max-device-width: 750px)
        margin: 0 auto
        text-align: center
        width: 70%
      @media only screen and (max-device-width: 360px) and (max-device-height: 768px)
        width: 90%

    h1
      top: 20%
      @include title-text
      font-size: 14vh
      @media only screen and (max-device-height: 850px)
        top: 10%
      @media only screen and (max-device-height: 768px)
        top: 5%
      @media only screen and (max-device-width: 600px)
        top: -10%

    p
      top: 20%
      @include normal-text
      font-size: 3vh
      @media only screen and (max-device-height: 850px)
        top: 10%
      @media only screen and (max-device-height: 768px)
        top: 5%
      @media only screen and (max-device-width: 600px)
        top: 5%
</style>
