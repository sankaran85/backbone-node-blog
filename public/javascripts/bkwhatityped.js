$(document).ready(function(){

   var modelwhatitypedclass = Backbone.Model.extend({});

   var viewwhatitypeclass = Backbone.View.extend(
   	{
   		el: ".whtitype",

         events: {"dblclick":"updatemodel"},

   		initialize: function(){
            _.bindAll(this,"showtyped");
   			this.model.bind("change:typed",this.showtyped);
   		},
   		
   		updatemodel:function(){
   			this.model.set({typed:this.el.value});
   		},

   		showtyped: function(){
   			var type=this.model.get("typed");
            $(".whthetyped").text(type);
   		}

   	});
  var modelwhatitypedobj = new modelwhatitypedclass();
  new viewwhatitypeclass({model:modelwhatitypedobj});

});