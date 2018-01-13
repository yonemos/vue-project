<template>
  <div class="Wrapper">
    <main>
      <router-view v-bind:data="myData"></router-view>
    </main>

  </div>
</template>

<script>
import myData from '../../../static/data.json'
export default {

  data () {
    return {
      myData: myData
    }
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
