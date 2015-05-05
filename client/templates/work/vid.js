Template.vid.helpers({
user: function() {
return Session.get('user');
},

// points: function(){
// 	return Session.get('points');
// },
// wordcount : function(){
//   return Session.get('wordCount');
// }
});

Template.vid.events({
  'keypress #textarea':function(e,t){
    // var txt = t.find('#textarea').value;
    // var regex = /\s+/gi;
    // var wordCount = txt.trim().replace(regex, ' ').split(' ').length;
    // Session.set('wordCount',wordCount);
},

'click .done':function(e,t){

  // Store Tags from the Text area
  var txt = t.find('#textarea').value;
  var regex = /\s+/gi;
  var wordCount = txt.trim().replace(regex, ' ').split(' ').length;

  Session.setPersistent('points', parseInt(Session.get('points')) + parseInt(wordCount));
  // Session.set('points',wordCount);

  // alert(wordCount);
  if(wordCount == 0){
    alert('You have entered no tags - no tags, no points');
  }

  var vidId = t.data.vidId;
  Meteor.call('storeTags', vidId,Session.get('user'),txt);


  Router.go('scoring');
  // Store Tags from the Text area


},

    // console.log(e);
    // if(e.keyCode == 32){}
    // // else if (e.keyCode == 32){Session.set('points', Session.get('points') - 1);}
    // else{
    // Session.set('points', Session.get('points') + 1);
});
