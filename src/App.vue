<template>
  <div id="app">
    <div class="spacer">
    </div>
    <div class="terminal">
    <h3>> Hello!</h3>
    <h3>> Luke Marco</h3>
    <h3>> Full stack Developer</h3>
    <h3>> Hire me</h3>
    <h3>{{text}}</h3>
    <h3 id='type'> {{text2}}
      <span class="terminal-input"></span>
    </h3>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {text: '',
            text2: ''
    }
  },
  methods: {
    firstLine: function() {
      const self = this;
      setInterval(function() {
        self.text2 = "Would you like to know more?";
      }, 300);
    }
  },
  mounted: function() {
    this.firstLine()
  }
}
</script>

<style lang="sass">

body
  background-color: black

#app
  font-family: 'Courier', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: RGB(72, 230, 13)
  margin-top: 0 auto
  background-color: black

h3
  white-space: nowrap

@keyframes terminal-input
  0%
    background-color: RBG(72, 230, 13)
  50%
    background-color: black
  100%
    background-color: RBG(72, 230, 13)

.terminal-input
  height: 20px
  width: 10px
  display: inline-block
  background-color: RGB(72, 230, 13)
  animation: terminal-input
  animation-duration: 1.5s
  animation-iteration-count: infinite

.spacer
  height: 300px

.terminal
  margin-right: 1000px
  text-align: left

#type
  overflow: hidden
  white-space: nowrap
  width: 30em
  animation: typing 3.5s steps(40, end)

@keyframes typing
  from
    width: 0
  to
    width: 100%

</style>
