  require.config({
    waitSeconds: 15
  });
  require( ["/build/extplugins.js","/collections/bloggerpostlist.js","/model/blogger.js","/javascripts/blogger.js"],
    function(someModule,    myModule) {
        console.log("modelues loaded..");
    }
  );