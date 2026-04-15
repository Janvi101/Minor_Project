import React, { useMemo } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const getColor = (type) => {
  switch(type) {
    case 'safe': return '#10b981'; // Modern vivid green
    case 'polluted': return '#ef4444'; // Modern vivid red
    case 'complaints': return '#f59e0b'; // Modern vivid orange
    default: return '#3b82f6'; // Modern vivid blue
  }
};

const LeafletMap = ({ filter }) => {
  const center = [22.7196, 75.8577]; // Indore Center

  // Generate mock data ONLY ONCE to avoid flickering/regeneration
  const items = useMemo(() => {
    const data = [];
    const rnd = (min, max) => Math.random() * (max - min) + min;

    // Generate 84 safe
    for (let i = 0; i < 84; i++) {
        data.push({ id: `safe-${i}`, type: 'safe', name: `Water Body Safe-${i}`, lat: rnd(22.65, 22.80), lng: rnd(75.80, 75.95) });
    }
    // Generate 27 polluted
    for (let i = 0; i < 27; i++) {
        data.push({ id: `poll-${i}`, type: 'polluted', name: `Water Body Polluted-${i}`, lat: rnd(22.65, 22.80), lng: rnd(75.80, 75.95) });
    }
    // Generate 12 complaints
    for (let i = 0; i < 12; i++) {
        data.push({ id: `comp-${i}`, type: 'complaints', name: `Water Body Complaint-${i}`, lat: rnd(22.65, 22.80), lng: rnd(75.80, 75.95) });
    }
    // Generate 19 remaining (moderate)
    for (let i = 0; i < 19; i++) {
        data.push({ id: `mod-${i}`, type: 'moderate', name: `Water Body Mod-${i}`, lat: rnd(22.65, 22.80), lng: rnd(75.80, 75.95) });
    }
    return data;
  }, []);

  const filteredItems = filter === 'all' ? items : items.filter(item => item.type === filter);

  return (
    <MapContainer center={center} zoom={11} maxZoom={18} style={{ height: '100%', width: '100%', borderRadius: '8px', zIndex: 0 }}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Geographic Street Map">
          <TileLayer
            maxNativeZoom={17}
            maxZoom={18}
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
          />
        </LayersControl.BaseLayer>
        
        <LayersControl.BaseLayer name="Live Satellite Imagery">
          <LayerGroup>
            <TileLayer
              maxNativeZoom={17}
              maxZoom={18}
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
            />
            {/* Reverted back to Esri Reference Labels as requested */}
            <TileLayer
              maxNativeZoom={17}
              maxZoom={18}
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            />
          </LayerGroup>
        </LayersControl.BaseLayer>
      </LayersControl>
      {filteredItems.map(item => (
        <CircleMarker 
          key={item.id} 
          center={[item.lat, item.lng]}
          radius={6}
          weight={2}
          color="#ffffff"
          fillColor={getColor(item.type)}
          fillOpacity={0.9}
        >
          <Popup>
            <strong>{item.name}</strong><br/>
            Status: {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
