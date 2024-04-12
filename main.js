import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {Circle} from 'ol/geom.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Style, Fill, Stroke} from 'ol/style.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import { fromLonLat } from 'ol/proj';

const cpCoords = fromLonLat([-120.6625, 35.3050]);
const txCoords = fromLonLat([-97.7431, 30.2672]);
const caCoords = fromLonLat([-120.61833086, 35.11916619]);
const mnCoords = fromLonLat([-93.28773, 45.11997]);

const seth = new Feature({
  geometry: new Circle(txCoords, 50000),
});

seth.setStyle(
  new Style ({
    fill: new Fill({
      color: 'rgba(255,0,0,0.5)'
    }),
    stroke: new Stroke({
      width: 1,
      color: 'rgba(0,0,0,1)'
    })
  }),
);

const rho = new Feature({
  geometry: new Circle(caCoords, 50000),
});

rho.setStyle(
  new Style ({
    fill: new Fill({
      color: 'rgba(0,255,0,0.5)'
    }),
    stroke: new Stroke({
      width: 1,
      color: 'rgba(0,0,0,1)'
    })
  }),
);

const mary = new Feature({
  geometry: new Circle(mnCoords, 50000),
});

mary.setStyle(
  new Style ({
    fill: new Fill({
      color: 'rgba(0,0,255,0.5)'
    }),
    stroke: new Stroke({
      width: 1,
      color: 'rgba(0,0,0,1)'
    })
  }),
);

new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
      visible: true,
    }),
    new VectorLayer({
      source: new VectorSource({
        features: [seth, rho, mary],
      }),
    }),
  ],
  target: 'map',
  view: new View({
    center: cpCoords,
    zoom: 4
  }),
});
