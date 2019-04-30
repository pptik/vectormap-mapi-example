//definisi koordinat
var mymap = new L.map("mapid", {
    center: [-8, 120],
    zoom: 5
});

//load peta dasar melalui vectormap
var gambarPetaDasar = L.tileLayer('http://vectormap.pptik.id/styles/klokantech-basic/{z}/{x}/{y}.png', {
    minZoom: 5,
    maxZoom: 18,
    attribution: '&copy; <a href="https://vectormap.pptik.id">PPTIK</a>'
}).addTo(mymap);


// var jsonLayer = L.geoJson().addTo(mymap);

// Load Json Data
// gambarPetaDasar.on("tileload", function( event ){
// 	var z = event.coords.z;
// 	var x = event.coords.x;
// 	var y = event.coords.y;
    
// 	var jsonString = "http://localhost/" + z + "-" + x + "-" +  y + ".geojson";
    
// 	$.getJSON( jsonString, function(json){
// 		jsonLayer.addData(json);
// 	} );
    
// });

// clear data ketika zoomend
// mymap.on("zoomend", function(){
//     jsonLayer.clearLayers();
// });

// //load layer objek spesifik di mapi
// $.ajax({
//     type: "GET",
// 	url: 'http://mapi.pptik.id/api/itbStreet',
// 	dataType: 'json',
// 	success: function (response) {
// 		L.geoJSON(response).addTo(mymap);
// 	}
// });
