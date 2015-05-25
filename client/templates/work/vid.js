Template.vid.helpers({
user: function() {
return Session.get('user');
},
viewed: function(){
  var tmp = Session.get('viewed');
  // console.log(tmp);
  return Session.get('viewed').indexOf(this.vidId) > -1;
}


// points: function(){
// 	return Session.get('points');
// },
// wordcount : function(){
//   return Session.get('wordCount');
// }
});

Template.vid.rendered = function(){

	Session.setDefaultPersistent('points', 0);
	Session.setDefaultPersistent('user', 'Guest');
	Session.setDefaultPersistent('viewed', []);
};

Template.vid.events({
//   'keypress #textarea':function(e,t){
//     // var txt = t.find('#textarea').value;
//     // var regex = /\s+/gi;
//     // var wordCount = txt.trim().replace(regex, ' ').split(' ').length;
//     // Session.set('wordCount',wordCount);
// },

'click button.back, touchstart button.back':function(e,t){

  window.history.back();
},

'click button.done, touchstart button.done':function(e,t){

  // Store Tags from the Text area
  var txt = t.find('#textarea').value;
  var regex = /\s+/gi;
  var wordCount = txt.trim().replace(regex, ' ').split(' ').length;


  // Session.set('points',wordCount);

  // alert(wordCount);
  if(wordCount < 5 ){
    alert('You have entered '+ wordCount +' tags - please enter at least 5 tags to continue.');
  }else{
    var vidId = t.data.vidId;

    Session.setPersistent('points', parseInt(Session.get('points')) + 1);
    var tmp = Session.get('viewed');
    tmp.push(vidId);
    Session.setPersistent('viewed', tmp);


  Meteor.call('storeTags', vidId,Session.get('user'),txt);


  Router.go('scoring');
}
  // Store Tags from the Text area


},

    // console.log(e);
    // if(e.keyCode == 32){}
    // // else if (e.keyCode == 32){Session.set('points', Session.get('points') - 1);}
    // else{
    // Session.set('points', Session.get('points') + 1);
});
