<template lang="html">
  <div class="home">
    <div class="wrapper">
      <navbar class='desktop'></navbar>
      <mobile-navbar class='mobile'></mobile-navbar>
      <transition name='change-page' mode="out-in">
        <router-view></router-view>
      </transition>
    <div class="push"></div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="sass">

  .wrapper
    height: 100%
    margin-bottom: -40px

    .push
      height: 40px

  .mobile
    display: none

    @media only screen and (max-device-width: 580px)
      display: inherit

  .desktop
    @media only screen and (max-device-width: 580px)
      display: none

  .change-page-enter-active, .change-page-leave-active
    transition: all 1s ease

  .change-page-enter, .change-page-leave-to
    transform: translateX(100%)
    opacity: 0

</style>
