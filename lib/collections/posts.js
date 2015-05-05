Posts = new Mongo.Collection('posts');
Posts.allow({
	insert: function () {
		return true;
	},
	update: function () {
		return true;
	}
});

Tags = new Mongo.Collection('tags');
Tags.allow({
	insert: function () {
		return true;
	},
	update: function () {
		return true;
	}
});

Users = new Mongo.Collection('users');
Users.allow({
	insert: function () {
		return true;
	},
	update: function () {
		return true;
	}
});
