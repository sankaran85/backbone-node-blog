var post = require('./../dbschema/post');
var blogger = require('./../dbschema/blogger');
/*
 * GET home page.
 */
exports.backbone = function(req, res){
  res.render('helloworld');
}
exports.bkwhatityped = function(req, res){
  res.render('whatityped');
}


exports.index = function(req, res){
	res.render('index', { title: 'Express'});
};

exports.loginblog = function(req, res){
    res.render("loginblog");
};
exports.loginblogger = function(req, res){
    res.render("loginblogger");
};
exports.deletepost = function(req,res){
   var delId=req.params.id;
    blogger.findByIdAndRemove(delId,function(err, data){
      res.send("Blogger Post Deleted...");
    });
};
exports.deletecomment = function(req, res){
    var delId=req.body.delId;
    post.findByIdAndRemove(delId,function(err, data){
      res.send("Comment Deleted");
    });
};
exports.welcomeblogger = function(req, res){
    var user=null;
   if(req.session.user){
      user=req.session.user; 
   }else{
      user = req.body.userName;
      req.session.user=user;   
 }
  listbloggerbyusername(user,res);

};
exports.savepost = function(req, res){
      var  user=req.session.user;
      title = req.body.title;
      story = req.body.story;

      var myblogger =  new blogger({
       user : user,
       title: title,
       story : story
     });

      myblogger.save(function(err,savedrecord){
         if(err){
          console.log("Error ..."+err);
         }else{
           console.log("Data Saved..");
           console.log(savedrecord);
          res.json(savedrecord);
         }
      });
};
exports.blogit = function(req, res){
 
   if(req.session.user){
      user=req.session.user; 
      mypost = req.body.mypost;
      var mypost =  new post({
       user : user,
       comment : mypost
     });
      mypost.save(function(err){
         if(err){
          console.log("Error ..."+err);
         }else{
           console.log("Data Saved..");
           findusernamebyid(user,res);
         }
      });
   }else{

    var user = req.body.userName;

     req.session.user=user;
     
     findusernamebyid(user,res);
 }
};
exports.logout  = function(req, res){
     req.session.destroy();
     res.redirect('/myblogger');
};
function findusernamebyid(username,res){
        post.find({user: username},function(err, post) {
           res.render("mypost",{user: username, mycomments: post });
        });
}
function listbloggerbyusername(username,res){
        blogger.find({user: username}).sort('-posted').exec(function(err, posta) {
           res.render("bloggerlist",{user: username, mypost: posta });
        });
}