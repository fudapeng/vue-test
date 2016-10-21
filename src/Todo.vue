<template>
	<div id="todo">
		<h1>{{username}}</h1>
		<input type="text" v-model="newItem" v-on:keyup.enter="addItem" ><span>{{newItem}}</span>
		<ul>
			<li v-for="item in liItems" v-bind:class="{finsh : item.isshow}" v-on:click="btnLi(item)"
			v-on:remove="liItems.splice(index,1)">
				{{item.label}}
			</li>
		</ul>
	<div class="btn" v-on:click="clearStore">clear</div>
	<p>child is {{num}}{{msgp}} #######{{message}}</p>
	<my-footer address="beijing" label="Message" v-model="message" v-on:childBtn='childmsg'></my-footer>

	<div  class="demo">
	  <button v-on:click="add">Add</button>
	  <button v-on:click="remove">Remove</button>
	  <transition-group name="list" tag="p">
	    <span v-for="item in items" v-bind:key="item" class="list-item">
	      {{ item }}
	    </span>
	  </transition-group>
</div>


	</div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>
<script>
import Store from  './store'
import myFooter from  './components/footer.vue'

	export default {
		components: {
			myFooter
		},
		data () {
	    return {
	      username:'Hello fdp',
	      liItems:Store.fetch(),
	      newItem:'',
	      msgp:'ww',
	      num:1,
	      items: [1,2,3,4,5,6,7,8,9],
    	nextNum: 10,
	      message:'hello',
	      show:true
	    }
	  },
	  watch:{
	  	liItems: {
	  		handler: function(liItems) {
	  			console.log(liItems);
	  			Store.save(liItems);
	  		},
	  		deep:true
	  	}
	  },
	  methods: {
	  	btnLi:function(item){
	  		item.isshow = !item.isshow;
	  	},
	  	addItem:function(){
	  		this.liItems.push({
	  			label:this.newItem,
	  			isshow:false
	  		})
	  		this.newItem = '';
	  	},
	  	clearStore: function(){
	  		Store.clear();
	  	},
	  	childmsg:function(msgp){
	  		this.num++;
	  		this.msgp = msgp;
	  	},
	  	randomIndex: function () {
	      return Math.floor(Math.random() * this.items.length)
	    },
	    add: function () {
	      this.items.splice(this.randomIndex(), 0, this.nextNum++)
	    },
	    remove: function () {
	      this.items.splice(this.randomIndex(), 1)
	    }
	  }
	}

</script>

<style scoped>
h1 {
  color: #42b983;
  background-color: #000;
}
.finsh{
	text-decoration: underline;
	cursor: pointer;
};
.btn{
	background-color: #780;
	color: #FFF;
	font-size: 16px;
	width: 120px;
	line-height: 40px;
	text-align: center;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 3s ;
  color: blue;
}
.list-enter, .list-leave-active {
  opacity: 0;
  background-color: red;
  transform: translateY(30px);
}
</style>
