/*eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZmxvcmlhbmF1dHJpY3F1ZSIsImEiOiJjbGhreWFkMGswZW1yM2xxczFuMWs4MGhyIn0.r1z9kAv_jEpgIVXGlshwhQ";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/florianautricque/clxno0gvo02pc01qm290le5fi",
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    //Create marker
    const el = document.createElement("div");
    el.className = "marker";

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
