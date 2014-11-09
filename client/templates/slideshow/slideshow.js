if (Meteor.isClient) {
		    var Transform = require("famous/core/Transform");
		    var Modifier = require("famous/core/Modifier");
		    var StateModifier = require('famous/modifiers/StateModifier');
		    var Fader = require('famous/modifiers/Fader');
			var Surface = require("famous/core/Surface");
			var Engine = require("famous/core/Engine");
			var ScrollView = require("famous/views/Scrollview");
			var Transitionable = require("famous/transitions/Transitionable");
			
			
		
			 fdr = new Fader();
			
	      Meteor.setInterval( function(){fadeOut()}, 7000 );
	
	
	famous.polyfills;
	famous.core.famous;
	Session.set('post',1);
	
	
	Template.slideshow.helpers({ 
		post: function(){
			var pst = parseInt(Session.get('post'));
			return Posts.findOne({_id:pst});
		}
	});
	
	Template.slideshow.rendered = function(){
		
	
	
		
		var imgDiv=document.getElementById("fadeImg");
		context = Engine.createContext(imgDiv);

   
		 bgColorRed = new Transitionable(0);
		 bgColorGreen = new Transitionable(255);
		 bgColorBlue = new Transitionable(0);
	
	     colorTweenTime = 5500;
		 
		// var mod = new Modifier({transform: Transform.rotateZ(0)});
		// 		mod.setTransform(Transform.rotateZ(Math.PI/4),{ duration: 2000, curve: 'linear' });
	

    
         tempSurface = new Surface({
            size: [600, 600],
            properties: {
                backgroundImage:  'url(/img1.jpg)',
				    backgroundSize:   '100% auto',
				    backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center'
            }
        });

		tempSurface.render = function() {
		     red = Math.ceil(bgColorRed.get()),
		        green = Math.ceil(bgColorGreen.get()),
		        blue = Math.ceil(bgColorBlue.get());
				
				
		    this.setProperties({
		        backgroundColor: 'rgb(' + red + ', ' + green + ', ' + blue + ')'	
		    });

		    return this.id;
		};
	
	    originModifier = new StateModifier({
		  	align: [0.5,0.5],
			origin: [0.5, 0.0]
		});
		
		
		fdr.set(1,{duration: colorTweenTime, curve: 'easeIn'});
		context.add(originModifier).add(fdr).add(tempSurface);
	}
	
	  // Make sure dom got a body...
	  Meteor.startup(function() {
			Meteor.call('postCount', function(err,data){
				console.log(data);
				Session.set('noPosts',data);
			});
		
	  // 			 
	  // 			// tempSurface.on("click", function() {
	  // 			// 			fdr.set(0,{duration: 2000, curve: 'easeIn'});
	  // 			// 					  			});
	  // 	    
	  	  });
}

function fadeOut(){

	    bgColorRed.set(Math.floor((Math.random() * 255) + 1), { duration: colorTweenTime, curve: 'easeIn' });
	    bgColorGreen.set(Math.floor((Math.random() * 255) + 1), { duration: colorTweenTime, curve: 'easeIn' });
		bgColorBlue.set(Math.floor((Math.random() * 255) + 1), { duration: colorTweenTime, curve: 'easeIn' });
	
	if(fdr.isVisible()){
		fdr.set(0,{duration: 2000, curve: 'easeIn'});
	}else{
		
		var tmp = Session.get('noPosts');
		var pst = Session.get('post');

		if(pst < tmp){
			pst++;
			Session.set('post',pst); }
		else{Session.set('post',1); pst=1;}

		var imgURL = Posts.findOne({_id:pst}).imageUrl;
		
		tempSurface.setProperties({
					        backgroundImage: 'url('+imgURL+')'	
						    });
				fdr.set(1,{duration: 2000, curve: 'easeIn'});		
	}

	
	return true;
}


