Template.adminDat.helpers({ 
posts: function() {
return Posts.find({},{sort:{score:0}}); },

isChecked: function(){
	return this.show;
}
});

Template.adminDat.events({
	"click .chkbox": function (event, template) {
		var state = $('#'+this._id).prop('checked');
		var eid = this._id;
		
		Posts.update({_id:eid},{$set: {show:state}});
		}
});

Template.adminDat.rendered = function(){
	// $("img.lazy").lazyload();
};


// Posts.allow({
// 	insert: function () {
// 		return true;
// 	},
// 	update: function () {
// 		return true;
// 	}
// });