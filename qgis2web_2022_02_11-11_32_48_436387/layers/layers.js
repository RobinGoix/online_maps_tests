var wms_layers = [];

var lyr_hillshade_mingora_sharpened_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "hillshade_mingora_sharpened",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/hillshade_mingora_sharpened_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8041060.452068, 4123593.025973, 8072463.774797, 4145797.395579]
                            })
                        });
var format_population_mingora_1 = new ol.format.GeoJSON();
var features_population_mingora_1 = format_population_mingora_1.readFeatures(json_population_mingora_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_population_mingora_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_population_mingora_1.addFeatures(features_population_mingora_1);
var lyr_population_mingora_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_population_mingora_1, 
                style: style_population_mingora_1,
                interactive: true,
    title: 'population_mingora<br />\
    <img src="styles/legend/population_mingora_1_0.png" /> 0 - 500<br />\
    <img src="styles/legend/population_mingora_1_1.png" /> 500 - 2,500<br />\
    <img src="styles/legend/population_mingora_1_2.png" /> 2,500 - 5,000<br />\
    <img src="styles/legend/population_mingora_1_3.png" /> 5,000 - 10,000<br />\
    <img src="styles/legend/population_mingora_1_4.png" /> 10,000 - 20,000<br />\
    <img src="styles/legend/population_mingora_1_5.png" /> 20,000 - 40,000<br />\
    <img src="styles/legend/population_mingora_1_6.png" /> 40,000 and more<br />'
        });
var format_waterways_mingora_2 = new ol.format.GeoJSON();
var features_waterways_mingora_2 = format_waterways_mingora_2.readFeatures(json_waterways_mingora_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterways_mingora_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterways_mingora_2.addFeatures(features_waterways_mingora_2);
var lyr_waterways_mingora_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterways_mingora_2, 
                style: style_waterways_mingora_2,
                interactive: true,
                title: '<img src="styles/legend/waterways_mingora_2.png" /> waterways_mingora'
            });
var format_swat_river_mingora_3 = new ol.format.GeoJSON();
var features_swat_river_mingora_3 = format_swat_river_mingora_3.readFeatures(json_swat_river_mingora_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_swat_river_mingora_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_swat_river_mingora_3.addFeatures(features_swat_river_mingora_3);
var lyr_swat_river_mingora_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_swat_river_mingora_3, 
                style: style_swat_river_mingora_3,
                interactive: true,
                title: '<img src="styles/legend/swat_river_mingora_3.png" /> swat_river_mingora'
            });
var format_labels_mingora_4 = new ol.format.GeoJSON();
var features_labels_mingora_4 = format_labels_mingora_4.readFeatures(json_labels_mingora_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_labels_mingora_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_labels_mingora_4.addFeatures(features_labels_mingora_4);
var lyr_labels_mingora_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_labels_mingora_4, 
                style: style_labels_mingora_4,
                interactive: true,
    title: 'labels_mingora<br />\
    <img src="styles/legend/labels_mingora_4_0.png" /> airport<br />\
    <img src="styles/legend/labels_mingora_4_1.png" /> <br />'
        });
var group_basemaps = new ol.layer.Group({
                                layers: [lyr_hillshade_mingora_sharpened_0,],
                                title: "basemaps"});

lyr_hillshade_mingora_sharpened_0.setVisible(true);lyr_population_mingora_1.setVisible(true);lyr_waterways_mingora_2.setVisible(true);lyr_swat_river_mingora_3.setVisible(true);lyr_labels_mingora_4.setVisible(true);
var layersList = [group_basemaps,lyr_population_mingora_1,lyr_waterways_mingora_2,lyr_swat_river_mingora_3,lyr_labels_mingora_4];
lyr_population_mingora_1.set('fieldAliases', {'id': 'id', 'block_id': 'block_id', 'circle': 'circle', 'thesil': 'thesil', 'households': 'households', 'pop_2017': 'pop_2017', 'pop_d_2017': 'pop_d_2017', });
lyr_waterways_mingora_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_swat_river_mingora_3.set('fieldAliases', {'id': 'id', });
lyr_labels_mingora_4.set('fieldAliases', {'id': 'id', 'type': 'type', 'label': 'label', });
lyr_population_mingora_1.set('fieldImages', {'id': 'Range', 'block_id': 'Range', 'circle': 'Range', 'thesil': 'TextEdit', 'households': 'TextEdit', 'pop_2017': 'Range', 'pop_d_2017': 'TextEdit', });
lyr_waterways_mingora_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_swat_river_mingora_3.set('fieldImages', {'id': 'TextEdit', });
lyr_labels_mingora_4.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'label': 'TextEdit', });
lyr_population_mingora_1.set('fieldLabels', {'id': 'no label', 'block_id': 'no label', 'circle': 'no label', 'thesil': 'no label', 'households': 'no label', 'pop_2017': 'no label', 'pop_d_2017': 'no label', });
lyr_waterways_mingora_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_swat_river_mingora_3.set('fieldLabels', {'id': 'no label', });
lyr_labels_mingora_4.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'label': 'no label', });
lyr_labels_mingora_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});