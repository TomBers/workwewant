Session.setDefault('points', 0);
var started = false;
Template.work.events({
	'click button.user':function(e,t){
		alert('welcome ' + t.find('#user').value);
    Session.set('user',t.find('#user').value);
    $('#getUsr').hide();
    $('#vids').show();

	},
  'click .vid':function(e,t){
    if(!started){
    alert('Getting Started +10 pts');
    Session.set('points', Session.get('points') + 10);
    started = true;
  }
  },
  'click .backtoNav':function(e,t){
    alert('back to nav');
  },

  'keypress #textarea':function(e,t){
    console.log(e);
    if(e.keyCode == 32){}
    // else if (e.keyCode == 32){Session.set('points', Session.get('points') - 1);}
    else{
    Session.set('points', Session.get('points') + 1);
  }
  }

});

Template.work.helpers({
user: function() {
return Session.get('user');
},

points: function(){
	return Session.get('points');
}
});
