var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format____2 = new ol.format.GeoJSON();
var features____2 = format____2.readFeatures(json____2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____2.addFeatures(features____2);
var lyr____2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____2, 
                style: style____2,
                popuplayertitle: 'محافظة__الاحساء',
                interactive: true,
                title: '<img src="styles/legend/___2.png" /> محافظة__الاحساء'
            });
var group_map = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'map'});

lyr_GoogleRoad_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr____2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_OpenStreetMap_1,lyr____2];
lyr____2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'name': 'name', 'source': 'source', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr____2.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'source': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr____2.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'name': 'no label', 'source': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr____2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});