Template.work.rendered = function(){
	Session.setDefaultPersistent('points', 0);
	Session.setDefaultPersistent('user', '');
	Session.setDefaultPersistent('viewed', []);
}

var started = false;
Template.work.events({
	'click button.user, touchstart button.user':function(e,t){
    Session.setPersistent('user',t.find('#user').value);
    Router.go('nav');
	}
	// ,
  // 'click .vid':function(e,t){
  //   if(!started){
  //   alert('Getting Started +10 pts');
  //   Session.set('points', Session.get('points') + 10);
  //   started = true;
  // }
  // },
  // 'click .backtoNav':function(e,t){
  //   alert('back to nav');
  // },
	//
  // 'keypress #textarea':function(e,t){
  //   console.log(e);
  //   if(e.keyCode == 32){}
  //   // else if (e.keyCode == 32){Session.set('points', Session.get('points') - 1);}
  //   else{
  //   Session.set('points', Session.get('points') + 1);
  // }
  // }

});
