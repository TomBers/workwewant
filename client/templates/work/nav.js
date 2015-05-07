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
};

Template.nav.events({
	'click .done':function(e,t){
		Meteor.call('userScore', Session.get('user'),Session.get('points'), function(e,d){
			Session.setPersistent('user','');
			Session.setPersistent('points',0);
			Router.go('work');
		});

	}
});
