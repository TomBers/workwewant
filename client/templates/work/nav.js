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
		alert('Congratylations '+Session.get('user')+'! You have ' + Session.get('points') + ' peanuts go to the desk to collect them.')
		Meteor.call('userScore', Session.get('user'),Session.get('points'), function(e,d){
			Session.setPersistent('user','');
			Session.setPersistent('points',0);
			Session.setPersistent('viewed',[]);
			Router.go('work');
		});

	}
});
