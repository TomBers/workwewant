Meteor.subscribe('posts');
Meteor.startup(function(){
Session.set("userVotes",3);	
});
