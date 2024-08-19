//! Useful with navigator.geolocation.getCurrentPosition() which returns the position object with longitude and latitude

function toRad(value) {
  return (value * Math.PI) / 180;
}

function haversineFormula(dLat, dLon, lat1, lat2) {
  return (
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  );
}

// Returns the distance in kilometers between two coordinates
export default function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lng2 - lng1);
  const l1 = toRad(lat1);
  const l2 = toRad(lat2);

  const a = haversineFormula(dLat, dLon, lat1Rad, lat2Rad);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

// Example usage
const point1 = { lat: 37.7749, lng: -122.4194 }; // San Francisco, CA
const point2 = { lat: 34.0522, lng: -118.2437 }; // Los Angeles, CA

const distance = calculateDistance(
  point1.lat,
  point1.lng,
  point2.lat,
  point2.lng
);

console.log(`The distance is ${distance.toFixed(2)} kilometers.`);