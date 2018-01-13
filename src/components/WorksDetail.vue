<template>
  <div>
   <article class="product-box">
      <h1 class="product-title" v-cloak>{{ filteredData.title }}</h1>

      <div v-for="p in filteredData.picture" v-if="p.id === '1'">
        <img :src="p.path" width="" height="" alt="" class="product-image">
      </div>
      <p class="product-description" v-cloak>{{ filteredData.text }}</p>
      <p class="product-year" v-cloak>制作年：{{ filteredData.year }}</p>
      <p class="" v-cloak>{{ filteredData.role }}</p>
      <p class="" v-cloak><a :href="filteredData.url" target="_blank">{{ filteredData.urlTitle }}</a></p>
      <div v-for="p in filteredData.picture" v-if="p.id !== '1'">
        <img :src="p.path" width="" height="" alt="" class="product-image">
      </div>
    </article>
  </div>
</template>

<script>
export default {
    props: ['data'],
    computed: {
          filteredData: function () {
        var url = window.location.protocol+ '//' + window.location.host + '/works/'
        var matchData = this.data.filter(function(item, index){
          if (item.slug === window.location.href.replace(url, '')) return true;
        })
        return matchData[0]
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
