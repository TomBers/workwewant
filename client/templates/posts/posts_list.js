Template.postsList.helpers({ posts: function() {
return Posts.find(); }
});

Template.postsList.rendered = function(){
	$("img").unveil();
};
