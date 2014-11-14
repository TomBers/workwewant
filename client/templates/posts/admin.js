Template.admin.helpers({ posts: function() {
return Posts.find(); },

isChecked: function(){
	return this.show;
}
});

Template.admin.events({
	"click .chkbox": function (event, template) {
		var state = $('#'+this._id).prop('checked');
		var eid = this._id;
		
		Posts.update({_id:eid},{$set: {show:state}});
		
		
		
		}
});

Template.admin.rendered = function(){
	$("img.lazy").lazyload();
};


Posts.allow({
	insert: function () {
		return true;
	},
	update: function () {
		return true;
	}
});