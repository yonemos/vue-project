<template>
  <div class="wrapper">
    <main>
     <form action ="https://script.google.com/macros/s/AKfycbxxYNQDg1r9X3JkwclQGeyLsFIc5HqSh-W5c98131rV_FrM20Uz/exec" class="form-box">
       <input neme="SPREADSHEET_ID" type="hidden" value="1XQFF7XWepOxyqvZUWXVUpoYBsRHSUiUSTf1Y2SkJGjU">
       <input name="SHEET_NAME" type ="hidden" value="フォームデータ">
       <h1>お問い合わせ</h1>
       <div class="form-item-box">
         <label class="contorol-label">Mail</label>
         <div class="">
           <input type="email" name="your-email" class="form-contrl" pleceholder="your@email.com">
          </div>
      </div>
      <div class="form-item-box">
        <label class="control-label">お名前</label>
          <div class="">
            <input type="text"  name="your-name" class="form-control" placeholder="Youre Name">
          </div>
      <div class="form-item-box">
        <label class="contorol-label">メッセージ<span class="label-required">必須</span></label>
        <div class="">
          <textarea name="your-message" required id="message" rows="8" placeholder="Message"></textarea>
        </div>
      </div>
      <div class="form-item-box">
        <button class="form-button" type="submit" v-on:click="sendMessage()">submit</button>
      </div>
      </div>
    </form>
    </main>
  </div>
</template>

<script>
export default {
  title:'Contact',
  description:'4mojiへのお問い合わせページ',
  methods:{
    sendMessage(){
      const form = $('form');
      const submitBtn = form.find('button[type=submit]');
      if(getElementById("message")===""){
        alert(" メッセージを入力してください ");
        return false;
      }
      $.ajax({
        url:form.attr('action'),
        dataType:'jsonp',
        data:form.serialize(),
        beforeSend:function(){
          return submitBtn.prop('disabled',true);
        },
        complete:function(){
          return submitBtn.prop('disabled',false);
        },
        jsonpCallback:'console.log',
        error:function(response){
          return console.log(response);
        }
      });
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
