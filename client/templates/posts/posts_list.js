Template.postsList.helpers({ posts: function() {
return Posts.find({show:true}); }
});

Template.postsList.rendered = function(){

};
