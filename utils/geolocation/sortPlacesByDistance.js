import calculateDistance from './calculateDistance.js';

// Returns sorted places by closest distance to the given coordinates
export function sortPlacesByDistance(places, lat, lon) {
  const sortedPlaces = [...places];
  sortedPlaces.sort((a, b) => {
    const distanceA = calculateDistance(lat, lon, a.lat, a.lon);
    const distanceB = calculateDistance(lat, lon, b.lat, b.lon);
    return distanceA - distanceB;
  });
  return sortedPlaces;
}

// Example usage
const places = [
  { name: 'Eiffel Tower', lat: 48.858844, lon: 2.29435 },
  { name: 'Louvre Museum', lat: 48.860611, lon: 2.337644 },
  { name: 'Notre-Dame Cathedral', lat: 48.852968, lon: 2.349902 },
  { name: 'Montmartre', lat: 48.886704, lon: 2.343104 },
  { name: 'Champs-Élysées', lat: 48.873809, lon: 2.295066 },
  { name: "Musée d'Orsay", lat: 48.860294, lon: 2.325753 },
];

const parisLat = 48.8566;
const parisLon = 2.3522;

const sortedPlaces = sortPlacesByDistance(places, parisLat, parisLon);
console.log(sortedPlaces);