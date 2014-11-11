	if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(showPosition);
		    } else { 
			        Session.set('lat',0);
					Session.set('long',0);
			    }

Template.submission.events({
	"submit .sub": function (event, template) {

		// console.log(event);
		var agreed = $('#agree').prop('checked');

		if(agreed == true){

			event.preventDefault();
			var file = template.find('#files').files[0];

			if(file && file.size < 256000){

				var name = event.target.name.value;
				var country = event.target.country.value;
				var wwd = event.target.wwd.value;
				var pwh = event.target.pwh.value;
				var www = event.target.www.value;
				var pww = event.target.pww.value;


				var reader = new FileReader();
				reader.onload = function(e) {
					console.log(e);
					lat = Session.get('lat');
					lng = Session.get('long');
					Posts.insert({src:e.target.result,name:name,country:country,wwd:wwd,pwh:pwh,www:www,pww:pww,lat:lat,lng:lng});
				};
				reader.readAsDataURL(file);

				alert('Thank you.');
				window.location.replace("/");
				return true;


				}else{alert('Please Upload an image or reduce the size (max 256kb)');}		
			}else{
				alert('Please Agree to the license agreement');
			}


					return false;
				}
			});

			function showPosition(position) {
				 Session.set('lat',position.coords.latitude);
				 Session.set('long',position.coords.longitude);
				
			}



			Posts.allow({
				insert: function () {
					return true;
				},
				remove: function () {
					return true;
				}
			});
