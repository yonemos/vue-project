<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <div>
    こちらは<br>
    [<a href="https://booth.pm/ja/items/667217">Vue.jsでポートフォリオサイト制作記 | Shop Becolomochi</a>]<br>
    を参考にして作った実験的なサイトです。
</div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'About 4moji'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: 900;
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
