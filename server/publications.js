Meteor.publish('posts', function() { return Posts.find();});
Meteor.publish('users', function() { return Users.find();});
Meteor.publish('tags', function(id) { return Tags.find({vidId:id});});
