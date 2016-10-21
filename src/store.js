const STORAGE_KEY = 'todo-vue.js'

export default {
	fetch: function(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
	},
	save: function(liItems) {
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(liItems))
	},
	delete: function(){
		window.localStorage.removeItem(STORAGE_KEY);
	},
	clear: function(){
		window.localStorage.clear();
	},
	key:function(){
		window.localStorage.key()
	},
}