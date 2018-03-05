var feedURL = "https://www.metaweather.com/api/location/44418/";

$(document).on('pagecreate', '#feedPage', function(event) {
	
	
	<!-- Use an HTML GET request to obtain data from an API  -->
	var xmlhttp=new XMLHttpRequest()
	xmlhttp.open("GET", feedURL, true);
	
	xmlhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
		
			var weather= JSON.parse(xmlhttp.responseText);

	
			<!-- Define Ractive binding -->
			var ractive = new Ractive({
			el: 'container', <!-- where -->
			template: '#myTemplate', <!-- how -->
			data: { weather : weather.consolidated_weather } <!-- what - specify the list of weather reports using dot notation-->
		});
	};
	};
	
	
	xmlhttp.send();
			
	
	});
	

