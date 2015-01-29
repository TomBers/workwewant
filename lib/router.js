Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',
trackPageView: true
// waitOn: function() { return Meteor.subscribe('posts'); },
// fastRender: true
});




Router.route('/about', function () {
  this.render('about');
 },{name: 'about'});




Router.route('/project', function () {
  this.render('project');
 },{name: 'project'});

Router.route('/submission', function () {
  this.render('submission');
 },{name: 'submission'});


// Router.route('/posts', function () {
//   this.render('postsList');
//  },{name: 'posts'});

Router.route('/admin', function () {
  this.render('admin');
 },{name: 'admin'});

// Router.route('/adminDat', function () {
//   this.render('adminDat');
//  },{name: 'adminDat'});



Router.map(function() {
	
	this.route('/', {
		path: '/',
		template: 'homepg'
	 });
	
	this.route('posts', {
		path: '/posts',
		template: 'postsList'
		// waitOn: function() { return Meteor.subscribe('posts'); }
	 });
	
	this.route('adminDat', {
		path: '/adminDat',
		template: 'adminDat',
		// waitOn: function() { return Meteor.subscribe('posts'); }
	 });
	
	this.route('blog', {
		path: '/blog',
		template: 'blog',
		// waitOn: function() { return Meteor.subscribe('posts'); }
	 });
	
	this.route('jan', {
		path: '/jan',
		template: 'jan',
	 });
	this.route('tricia', {
		path: '/tricia',
		template: 'tricia'
	 });
	// this.route('slideshow', {
	// 	path: '/slideshow',
	// 	template: 'slideshow'
	// 	// waitOn: function() { return Meteor.subscribe('posts'); }
	//  });
	
	
	
    this.route('postItem', { 
        path: '/:_id',
        template: 'postItem',
        data: function() {
            return Posts.findOne({_id:this.params._id});
        }
    });

	

});



