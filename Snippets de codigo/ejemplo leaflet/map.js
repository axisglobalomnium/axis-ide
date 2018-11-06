
var map = L.map('map').setView([39.4561165, -0.3545661],16);

var mapaaxis2 = L.tileLayer.wms("http://axisqgissrv.aguasdevalencia.es/qgis/qgis_mapserv.fcgi.exe?map=Cartografia.qgs&CRS=EPSG:3857",
    { 
	layers:'Cartografia',
	
        format:'image/png',                        
        attribution:"Axis IDE"
    }
).addTo(map);
var mapaaxis = L.tileLayer.wms("https://axisdata.globalomnium.com/geoserver/wms?",
    {
        layers:'GlobalOmnium:red_distribucion_ap',
        format:'image/png',                        
        attribution:"Axis IDE",
		transparent:true
    }
).addTo(map);

