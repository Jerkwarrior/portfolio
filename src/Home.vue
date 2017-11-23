<template lang="html">
  <div class="home">
    <navbar></navbar>
    <transition name='change-page' mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="sass">
  body
    font-family: 'Roboto', sans-serif
    background-color: #141921

  .change-page-enter-active, .change-page-leave-active
    transition: all 1.5s ease

  .change-page-enter, .change-page-leave-to
    transform: translateX(100%)
    opacity: 0

</style>
