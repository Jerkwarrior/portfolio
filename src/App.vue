<template>
  <div id="app">
    <div class="spacer">
    </div>
    <div class="terminal">
      <ul>
        <li>
          <h3 id = 'first'>> Hello!</h3>
        </li>
        <li>
          <h3 id = 'second'>> Luke Marco</h3>
        </li>
        <li>
          <h3 id = 'third'>> Full Stack Web Developer</h3>
        </li>
        <li>
          <h3 id = 'fourth'>> Hire Me</h3>
        </li>
        <li>
          <h3>{{text}}</h3>
        </li>
        <li>
          <h3 id='type'> {{text2}} <span class="terminal-input"></span> </h3>
        </li>
        <li>
          <span class="terminal-input" id="hidden-input"></span>
        </li>
      </ul>
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
    },
    moveLine: function() {
      const self = this;
      window.setTimeout(function() {
        self.text = '> ' + self.text2;
         document.getElementById('first').style.display = 'none';
         document.getElementById('type').innerHTML = '';
         document.getElementById('hidden-input').style.display = 'inline-block';
      }, 7000);
    }
  },
  mounted: function() {
    this.firstLine()
    this.moveLine()
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

ul
  list-style: none

h3
  white-space: nowrap

@keyframes terminal-input
  50%
    background-color: black
  100%
    background-color: RGB(72, 230, 13)

.terminal-input
  height: 20px
  width: 10px
  display: inline-block
  background-color: RGB(72, 230, 13)
  animation: terminal-input 1.5s infinite

#hidden-input
  display: none

.spacer
  height: 300px
  color: RGB(72, 230, 13)

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
