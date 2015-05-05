Meteor.methods({
    postCount: function() {
	 return Posts.find().count();
 },
 storeTags: function(vidId,user,txt){
   Tags.insert({vidId:vidId,user:user,txt:txt});
 },
 userScore: function(user,score){
   Users.insert({user:user,score:score});
 }
});
