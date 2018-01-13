<template>
  <div>
    <h1>作品一覧</h1>
    <article v-for="d in data">
      <div v-for= "p in d.picture" v-if= "p.id === '1'" class = "product-image-box common-thumb-box">
      <router-link :to="'/works/'+ d.slug"><img :src="p.path" class="tes1"></router-link>
      </div>
      <div>
        <h1 v-cloak><router-link :to="'/works/' + d.slug">{{d.title}}</router-link></h1>
        <p class="product-description" v-cloak>{{d.text}}</p>
        <p class="product-year" v-cloak>制作年:{{d.year}}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  title:'wroks',
  description:'...',
  props: ['data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tes1{
  width:300px;
  height:auto;
}

</style>
