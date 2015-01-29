Meteor.startup(function(){
Session.set("userVotes",3);
Meteor.subscribe('posts');
});
