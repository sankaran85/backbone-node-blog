var blogger = blogger || {};


$(document).ready(function(){

   // post view
   var bloggerdelpost= Backbone.View.extend({
      tagName:  'li',    
      // cache the single post UI template
      template: _.template($('#posttemp').html()),
      events:{
        "click .deletepost" : "deletepost" 
      },
      initialize: function(){
         //console.log("init del post");
         this.listenTo(this.model, 'destroy', this.remove);
      },
      renderpostUI: function(){
        // $el get el dom element  else it creates the tagname a new html object
           return this.$el.html(this.template(this.model.toJSON()));
      },
      deletepost: function(e){
          //console.log(this.model.url());
         this.model.destroy();
      }
   });

   // form view
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
     /* blogger.colpostlist.create({
        "title": this.el.title.value,
        "story": this.el.story.value
      },{wait: true});*/
      var postmodel= new blogger.modelclass();
      postmodel.set({
        "title": this.el.title.value,
        "story": this.el.story.value
      });
      postmodel.save(null,{
        wait:true,
        success: function(postmodel){
          //console.log(postmodel.toJSON());
          blogger.colpostlist.add(postmodel);
         // console.log(blogger.colpostlist);

        }
      });
     
   	},
    showpost: function(postmodel){
    
        //console.log(postmodel.toJSON());
        var delpost= new bloggerdelpost({model:postmodel});
        $(".bloggerlist ul").prepend(delpost.renderpostUI());
    }
  });
 // creating form and corresponding listners
 new bloggerview({model:blogger.modelpost});
 

});