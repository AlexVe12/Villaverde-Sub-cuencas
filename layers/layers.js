var wms_layers = [];

var lyr_AP_24740_FBD_F6950_RT1dem_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "AP_24740_FBD_F6950_RT1.dem",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AP_24740_FBD_F6950_RT1dem_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8480451.903001, -1323353.701053, -8397665.827883, -1248087.204675]
                            })
                        });
var format_Capa_1 = new ol.format.GeoJSON();
var features_Capa_1 = format_Capa_1.readFeatures(json_Capa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capa_1.addFeatures(features_Capa_1);
var lyr_Capa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capa_1, 
                style: style_Capa_1,
                interactive: true,
                title: '<img src="styles/legend/Capa_1.png" /> Capa '
            });
var lyr_acc_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/acc_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8483423.721320, -1334245.222360, -8449921.422823, -1288596.368697]
                            })
                        });
var lyr_dir_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "dir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dir_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8483423.721320, -1334245.222360, -8449921.422823, -1288596.368697]
                            })
                        });
var lyr_fill_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/fill_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8483423.721320, -1334245.222360, -8449921.422823, -1288596.368697]
                            })
                        });
var lyr_c_acc_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_acc_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8480336.806927, -1323152.895240, -8460396.403723, -1299896.688508]
                            })
                        });
var lyr_c_cauce_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_cauce",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_cauce_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8480336.806927, -1323152.895240, -8460396.403723, -1299896.688508]
                            })
                        });
var lyr_c_fill_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_fill_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8480336.806927, -1323152.895240, -8460396.403723, -1299896.688508]
                            })
                        });

        var lyr_Googlemaps_8 = new ol.layer.Tile({
            'title': 'Google maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_c_shp_9 = new ol.format.GeoJSON();
var features_c_shp_9 = format_c_shp_9.readFeatures(json_c_shp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_shp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_shp_9.addFeatures(features_c_shp_9);
var lyr_c_shp_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_shp_9, 
                style: style_c_shp_9,
                interactive: true,
                title: '<img src="styles/legend/c_shp_9.png" /> c_shp'
            });
var format_c_curvas_10 = new ol.format.GeoJSON();
var features_c_curvas_10 = format_c_curvas_10.readFeatures(json_c_curvas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_curvas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_curvas_10.addFeatures(features_c_curvas_10);
var lyr_c_curvas_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_curvas_10, 
                style: style_c_curvas_10,
                interactive: true,
                title: '<img src="styles/legend/c_curvas_10.png" /> c_curvas'
            });
var lyr_c_reclass_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_reclass_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8480336.806927, -1323152.895240, -8460396.403723, -1299896.688508]
                            })
                        });
var format_c_rios_12 = new ol.format.GeoJSON();
var features_c_rios_12 = format_c_rios_12.readFeatures(json_c_rios_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_rios_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_12.addFeatures(features_c_rios_12);
var lyr_c_rios_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_12, 
                style: style_c_rios_12,
                interactive: true,
                title: '<img src="styles/legend/c_rios_12.png" /> c_rios'
            });

lyr_AP_24740_FBD_F6950_RT1dem_0.setVisible(true);lyr_Capa_1.setVisible(true);lyr_acc_2.setVisible(true);lyr_dir_3.setVisible(true);lyr_fill_4.setVisible(true);lyr_c_acc_5.setVisible(true);lyr_c_cauce_6.setVisible(true);lyr_c_fill_7.setVisible(true);lyr_Googlemaps_8.setVisible(true);lyr_c_shp_9.setVisible(true);lyr_c_curvas_10.setVisible(true);lyr_c_reclass_11.setVisible(true);lyr_c_rios_12.setVisible(true);
var layersList = [lyr_AP_24740_FBD_F6950_RT1dem_0,lyr_Capa_1,lyr_acc_2,lyr_dir_3,lyr_fill_4,lyr_c_acc_5,lyr_c_cauce_6,lyr_c_fill_7,lyr_Googlemaps_8,lyr_c_shp_9,lyr_c_curvas_10,lyr_c_reclass_11,lyr_c_rios_12];
lyr_Capa_1.set('fieldAliases', {'id': 'id', });
lyr_c_shp_9.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'Área': 'Área', 'Perimetro': 'Perimetro', });
lyr_c_curvas_10.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CONTOUR': 'CONTOUR', 'LENGTH': 'LENGTH', });
lyr_c_rios_12.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_Capa_1.set('fieldImages', {'id': '', });
lyr_c_shp_9.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', 'Área': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_c_curvas_10.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CONTOUR': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_c_rios_12.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_Capa_1.set('fieldLabels', {'id': 'inline label', });
lyr_c_shp_9.set('fieldLabels', {'ID': 'inline label', 'VALUE': 'inline label', 'NAME': 'inline label', 'Área': 'inline label', 'Perimetro': 'inline label', });
lyr_c_curvas_10.set('fieldLabels', {'fid': 'inline label', 'ID': 'inline label', 'CONTOUR': 'inline label', 'LENGTH': 'inline label', });
lyr_c_rios_12.set('fieldLabels', {'SEGMENT_ID': 'inline label', 'NODE_A': 'inline label', 'NODE_B': 'inline label', 'BASIN': 'inline label', 'ORDER': 'inline label', 'ORDER_CELL': 'inline label', 'LENGTH': 'inline label', });
lyr_c_rios_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});