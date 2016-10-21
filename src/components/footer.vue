<template>
  <div class="myFooter">
    <h1>{{ msg }} {{address}}</h1>
    <button v-on:click="childBtn">childBtn</button>

   <br><br>
   <div class="myInput">
   	<label v-bind:for="ramdId">{{label}}:</label>
   	<input type="text" v-bind:id="ramdId" v-bind:value="value" v-on:input="onInput">
   </div>
  </div>
</template>
<script>
/*自动生成  new Vue()*/
export default {
  /*data : function(){}*/
  data () {
    return {
      msg: 'Hello Vue!',
      msgp: 'hello parent',
      num:1,
      ramdId:'input1'
	    }
	  },
	props:['address','value','label'],
	methods: {
		childBtn:function() {
			this.num++;
			this.$emit("childBtn",this.msgp);
		},
		onInput:function(event){
			this.$emit('input', event.target.value);
		}
	}
}
</script>

<style scoped>
		.myFooter{
			height:150px;
			background-color:#ababab;
		}
</style>