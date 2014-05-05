 var blogger = blogger || {};
 (function(){

 blogger.modelclass=Backbone.Model.extend({
 	urlRoot: function(){ 
 		console.log(this);
 		return "/postit" 
 	},
 	idAttribute: '_id'
 });
 //blogger.bloggerclass=bloggerclass;

 blogger.modelpost= new blogger.modelclass();
 blogger.colpostlist = new blogger.postlistclass({model:blogger.modelpost});
  
})();