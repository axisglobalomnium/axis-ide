function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: {lat: 39, lng: 0.8}
        });

        var imageMapType = new google.maps.ImageMapType({
          getTileUrl: function(coord, zoom) {    
		var s = Math.pow(2, zoom);
        var twidth = 256;
        var theight = 256;
        var gbl = map.getProjection().fromPointToLatLng(new google.maps.Point(coord.x * twidth / s, (coord.y + 1) * theight / s));
        var gtr = map.getProjection().fromPointToLatLng(new google.maps.Point((coord.x + 1) * twidth / s, coord.y * theight / s));
        var bbox = gbl.lat() + "," + gbl.lng() + "," + gtr.lat() + "," + gtr.lng();
        var url = "https://axisdata.globalomnium.com/geoserver/wms?";
        url += "CRS=EPSG:4326";
        url += "&service=WMS";
        url += "&version=1.3.0";
        url += "&request=getmap";            
        url += "&layers=GlobalOmnium:red_distribucion_ap";
        url += "&format=image/png";
        url += "&TRANSPARENT=TRUE";
        url += "&bbox=" + bbox;
        url += "&width=256";
        url += "&height=256";
           return url;
          },
          tileSize: new google.maps.Size(256, 256),
            opacity: 0.85,
            ispng: true
        });

        map.overlayMapTypes.push(imageMapType);
      }