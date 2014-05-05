var blogger = blogger || {};

$(document).ready(function(){


   var bloggerdelpost= Backbone.View.extend({
      tagName:  'li',    
      // cache the single post UI template
      template: _.template($('#posttemp').html()),
      events:{
        "click .deletepost" : "deletepost" 
      },
      initialize: function(){
         console.log("init del post");
         this.listenTo(this.model, 'destroy', this.remove);
      },
      renderpostUI: function(){
           return this.$el.html(this.template(this.model.toJSON()));
      },
      deletepost: function(e){
         this.model.destroy();
      }
   });

   var bloggerview= Backbone.View.extend({
   
   	el: "#postform",
    
   	events: {
   		"submit" : "savepost"
   	},
   	initialize: function(){
         _.bindAll(this,"showpost");
         this.listenTo(blogger.colpostlist, 'add', this.showpost);
   	},
   	savepost: function(e){
   		e.preventDefault();

      var postmodel= new blogger.modelclass();
      postmodel.set({
        "title": this.el.title.value,
        "story": this.el.story.value
      });
      postmodel.save(null,{
        success: function(postmodel){
          blogger.colpostlist.add(postmodel);
        }
      });
     
   	},
    showpost: function(postmodel){
    
        console.log(postmodel.toJSON());
        var delpost= new bloggerdelpost({model:postmodel});
        $(".bloggerlist ul").prepend(delpost.renderpostUI());
        
     
    },
    delpostUI: function(){
       //  this.model.destroy();
    }
  });

 new bloggerview({model:blogger.modelpost});
 

});