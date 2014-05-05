function lazyloadjscss(){
	 setTimeout(function(){
		  LazyLoad.js("/javascripts/lib/jquery-min.js",function(){
		  	console.log("jquery loaded..");
		  });
		  LazyLoad.js("/javascripts/util.js",function(){
		  	console.log("util loaded..");
		  });
	} , 3000);
}