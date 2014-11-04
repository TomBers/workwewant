Meteor.methods({
	upVote: function(id) {
		Posts.update({_id:id},{$inc:{score:1}},{upsert:true});
	}
});