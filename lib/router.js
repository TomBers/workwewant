Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',
waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', function () {
  this.render('home');
 },{name: 'home'});

Router.route('/about', function () {
  this.render('about');
 },{name: 'about'});

Router.route('/project', function () {
  this.render('project');
 },{name: 'project'});

Router.route('/submission', function () {
  this.render('submission');
 },{name: 'submission'});


Router.route('/posts', function () {
  this.render('postsList');
 },{name: 'posts'});

Router.route('/admin', function () {
  this.render('admin');
 },{name: 'admin'});

Router.route('/slideshow', function () {
  this.render('slideshow');
 },{name: 'slideshow'});

Router.map(function() {
    this.route('postItem', { 
        path: '/:_id',
        template: 'postItem',
        data: function() {
            return Posts.findOne({_id:this.params._id});
        }
    });
});



