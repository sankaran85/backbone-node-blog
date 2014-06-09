 var blogger = blogger || {};
 (function(){

 blogger.modelclass=Backbone.Model.extend({
 	//urlRoot: "/postit",
 	idAttribute: '_id',
 	sync: function(method, model, options) {
	 	  console.log("sync .."+method);
	 	  if (method === 'create') {
        	options.url = '/post';
          }else if(method === 'delete'){
          	 options.url = '/post/del/'+model.id;
          }
        Backbone.sync(method, model, options);
    },
    defaults: {
        "id": "",
        "user": "",
        "title": "",
        "story": "",
        "created_at":""
    }

 });

 blogger.postlistclass = Backbone.Collection.extend({
    model:blogger.modelclass,
    sync: function(method, model, options) {
      console.log("sync .."+method);
      if (method === 'read') {
          options.url = '/getpostlist';
       }

          Backbone.sync(method, model, options);
     }
  });
 

 blogger.modelpost= new blogger.modelclass();

 blogger.colpostlist = new blogger.postlistclass();

    blogger.colpostlist.fetch({
		remove: true,
		success : function(Collection, responses){
			//console.log(responses);			 
		}
	});
	
 
})();