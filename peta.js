//definisi koordinat
var mymap = new L.map("mapid", {
    center: [-3, 120],
    zoom: 5
});

//load peta dasar melalui vectormap
var gambarPetaDasar = L.tileLayer('http://vectormap.pptik.id/styles/klokantech-basic/{z}/{x}/{y}.png', {
    minZoom: 5,
    maxZoom: 18,
    attribution: '&copy; <a href="https://vectormap.pptik.id">PPTIK</a>'
}).addTo(mymap);

//load layer objek spesifik di mapi
$.ajax({
    type: "GET",
	url: 'http://mapi.pptik.id/api/itbStreet',
	dataType: 'json',
	success: function (response) {
		L.geoJSON(response).addTo(mymap);
	}
});