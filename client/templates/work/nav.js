Template.nav.helpers({
user: function() {
return Session.get('user');
},

points: function(){
	return Session.get('points');
}
});

Template.nav.rendered = function(){
	imageMapResize('#Map');
	imageMapResize('#Map2');

	Session.setDefaultPersistent('points', 0);
	Session.setDefaultPersistent('user', 'Guest');
	Session.setDefaultPersistent('viewed', []);
};

Template.nav.events({
	'click button.done, touchstart button.done':function(e,t){
		alert('Congratulations '+Session.get('user')+'! You have ' + Session.get('points') + ' peanuts.')
		Meteor.call('userScore', Session.get('user'),Session.get('points'), function(e,d){
			Session.setPersistent('user','');
			Session.setPersistent('points',0);
			Session.setPersistent('viewed',[]);
			Router.go('work');
		});

	}
});
