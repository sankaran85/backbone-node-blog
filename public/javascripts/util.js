$(document).ready(function(){
   $(".deletecomment").click(function(){

   	      var delId= $(this).attr("identify");
   	    $.post("/deletecomment",{delId: delId},function(data) {
   	    	    $("#"+delId).remove();
   	    });
   });
});