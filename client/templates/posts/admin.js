Template.admin.helpers({ posts: function() {
return Posts.find(); }
});

Template.admin.rendered = function(){
	$("img.lazy").lazyload();
};
