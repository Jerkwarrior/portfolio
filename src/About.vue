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
  .about
    overflow: hidden
    margin: 5%
    padding: 2%
    border: 5px solid
    display: block
    text-align: center
    color: #F2F2F2
    height: 550px

    .left
      display: grid
      width: 50%
      float: left

    .right
      width: 50%
      text-align: left
      overflow: hidden

    h1
      position: relative
      top: 50%
      font-size: 6em
    p
      font-size: 2em
</style>
