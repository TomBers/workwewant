Template.postItem.helpers({ 
	votesLeft: function(){
		return Session.get("userVotes");
	}
});

Template.postItem.events({
	'click button.vote':function(){
		var votesLeft = Session.get("userVotes");
		Meteor.call('upVote',this._id);
		Session.set("userVotes",--votesLeft);
		if(votesLeft == 0){
			alert("Thanks for voting.  Start New sesstion");
			window.location.replace("/");
		}

	}
});


Template.postItem.rendered = function() {
    // console.log(this.data); // you should see your passage object in the console
};
