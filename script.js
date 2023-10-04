const L = require('leaflet');

// Initialize the map
const map = L.map('map').setView([10.0, 85.0], 5); // Centered on the Bay of Bengal

// Add a tile layer (you can use a different tile provider if desired)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Example data for a specific zone (you would replace this with real data)
const zoneAData = {
    name: 'Zone A',
    temperature: '30°C',
    bod: '5 mg/L',
    cod: '10 mg/L',
    tds: '500 ppm',
    salinity: '35 ppt',
    x: 0.0,
    y: 0.0,
};
const zoneBData = {
    name: 'Zone B',
    temperature: '30°C',
    bod: '5 mg/L',
    cod: '10 mg/L',
    tds: '500 ppm',
    salinity: '35 ppt',
    x: 0.0,
    y: 0.0,
};
const zoneCData = {
    name: 'Zone C',
    temperature: '30°C',
    bod: '5 mg/L',
    cod: '10 mg/L',
    tds: '500 ppm',
    salinity: '35 ppt',
    x: 0.0,
    y: 0.0,
};
const zoneDData = {
    name: 'Zone D',
    temperature: '30°C',
    bod: '5 mg/L',
    cod: '10 mg/L',
    tds: '500 ppm',
    salinity: '35 ppt',
    x: 0.0,
    y: 0.0,
};

// Create a custom marker at a specific location
const customMarker = L.marker([15.0, 85.0]).addTo(map); // Coordinates for a sample location

// Add a pop-up with data when the marker is clicked
customMarker.bindPopup(`<b>${zoneAData.name}</b><br>Temperature: ${zoneAData.temperature}<br>BOD: ${zoneAData.bod}<br>COD: ${zoneAData.cod}<br>TDS: ${zoneAData.tds}<br>Salinity: ${zoneAData.salinity}<br>Axis: ${zoneAData.x}, ${zoneAData.y}`).openPopup();
customMarker.bindPopup(`<b>${zoneBData.name}</b><br>Temperature: ${zoneBData.temperature}<br>BOD: ${zoneBData.bod}<br>COD: ${zoneBData.cod}<br>TDS: ${zoneBData.tds}<br>Salinity: ${zoneBData.salinity}<br>Axis: ${zoneBData.x}, ${zoneBData.y}`).openPopup();
customMarker.bindPopup(`<b>${zoneCData.name}</b><br>Temperature: ${zoneCData.temperature}<br>BOD: ${zoneCData.bod}<br>COD: ${zoneCData.cod}<br>TDS: ${zoneCData.tds}<br>Salinity: ${zoneCData.salinity}<br>Axis: ${zoneCData.x}, ${zoneCData.y}`).openPopup();
customMarker.bindPopup(`<b>${zoneDData.name}</b><br>Temperature: ${zoneDData.temperature}<br>BOD: ${zoneDData.bod}<br>COD: ${zoneDData.cod}<br>TDS: ${zoneDData.tds}<br>Salinity: ${zoneDData.salinity}<br>Axis: ${zoneCData.x}, ${zoneDData.y}`).openPopup();
