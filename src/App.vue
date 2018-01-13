<template>
  <div id="app">
    <header>
      <h1 class="saite-title"><router-link to="/">４moji portfolio</router-link></h1>
    </header>
    <hnav></hnav>
   <!-- <img src="./assets/logo.png"> -->
    <router-view/>

  <transition name="fade">
  <router-view:data="myData"></router-view:data>
  </transition>
   </div>
</template>

<script>
import  HeaderNav from '@/components/parts/NavHader'
import myData from '../static/data.json'
  export default {
    name: 'app',
    components: {
      hnav: HeaderNav
    },
    data () {
      return {
        myData: myData
      }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
