   $(document).ready(function () {

			//Open street  Map
	var coord = [-28.971062, -49.538531]; // <--- coordinates here

	var map = L.map('map-canvas', { scrollWheelZoom:false}).setView(coord, 19);

	 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 22,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
	}).addTo(map);

	// custom icon
	var customIcon = L.icon({
		iconUrl: 'img/mapmarker.png',
		  iconSize:     [64, 64], // size of the icon
	iconAnchor:   [32, 63] // point of the icon which will correspond to marker's location
		});

	// marker object, pass custom icon as option, add to map         
	var marker = L.marker(coord, {icon: customIcon}).addTo(map);
		});