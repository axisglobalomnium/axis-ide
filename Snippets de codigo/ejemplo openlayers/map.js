window.onload = function() {
    mimapa();
};
function mimapa() {
    
    //Definimos la url del WMS
    var capa = new ol.layer.Image({
       visible: true,
       source: new ol.source.ImageWMS({
           ratio: 1,
           url: 'http://axisqgissrv.aguasdevalencia.es/qgis/qgis_mapserv.fcgi.exe?map=Cartografia.qgs',
           params: {
               'FORMAT': 'image/png',
               'VERSION': '1.3.0',
               'TRANSPARENT': 'TRUE',
               STYLES: '',
               LAYERS: 'Cartografia',
           }
       })
   });
   
   var map = new ol.Map({
       layers: [capa],
       target: 'map',
       view: new ol.View({
         center: [-41893, 4789188],
         zoom: 16
       })
     });
   
}