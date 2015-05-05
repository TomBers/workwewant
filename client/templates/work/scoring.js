Template.scoring.helpers({
user: function() {
return Session.get('user');
},
points: function(){
	return Session.get('points');
}

});
