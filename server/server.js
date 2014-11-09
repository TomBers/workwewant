Meteor.methods({
    postCount: function() {
	 return Posts.find().count();
    }
});