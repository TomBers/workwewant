Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',
waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', function () {
  this.render('home');
 },{name: 'home'});

Router.route('/posts', function () {
  this.render('postsList');
 },{name: 'posts'});

Router.route('/slideshow', function () {
  this.render('slideshow');
 },{name: 'slideshow'});

Router.map(function() {
    this.route('postItem', { 
        path: '/:_id',
        template: 'postItem',
        data: function() {
            return Posts.findOne({_id:parseInt(this.params._id)});
        }
    });
});



