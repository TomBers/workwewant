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

			if(file){ //&& file.size < 256000){

				var name = event.target.name.value;
				var country = event.target.country.value;
				var wwd = event.target.wwd.value;
				var pwh = event.target.pwh.value;
				var www = event.target.www.value;
				var pww = event.target.pww.value;


				var reader = new FileReader();
				reader.onload = function(e) {
					// console.log(e);

					var tempImg = new Image();
					tempImg.src = e.target.result;

					// console.log(tempImg);
					tempImg.onload = function() {
						var MAX_WIDTH = 800;
						var MAX_HEIGHT = 800;
						
							
						
						var tempW = tempImg.width;
						var tempH = tempImg.height;
						
						
						if (tempW > tempH) {
							if (tempW > MAX_WIDTH) {
								tempH *= MAX_WIDTH / tempW;
								tempW = MAX_WIDTH;
							}
						}
						else {
							if (tempH > MAX_HEIGHT) {
								tempW *= MAX_HEIGHT / tempH;
								tempH = MAX_HEIGHT;
							}
						}
						var canvas = document.createElement('canvas');
						canvas.width =  tempW;
						canvas.height = tempH;
						
				
						var ctx = canvas.getContext("2d");
						ctx.drawImage(this, 0, 0, tempW, tempH);
						var dataURL = canvas.toDataURL("image/jpeg");
						lat = Session.get('lat');
						lng = Session.get('long');
						insId = Posts.insert({src:dataURL,name:name,country:country,wwd:wwd,pwh:pwh,www:www,pww:pww,lat:lat,lng:lng,score:0,show:false});
						// console.log(insId);
						alert('Thank you. Your submission ID is : '+insId);
						window.location.replace("/"+insId);

					}

					return true;
				};
				reader.readAsDataURL(file);




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
