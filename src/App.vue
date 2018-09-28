<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>

export default {
 data () {
   return {}
 },
 created () {
   let token = localStorage.getItem('token')
   this.$store.commit('SET_TOKEN', token)
 }
}
</script>


<style lang="scss">
</style>
