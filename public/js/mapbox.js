/* eslint-disable */
// const locations = JSON.parse(document.getElementById('map').dataset.locations);

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY2xhdWRpb21icyIsImEiOiJjbWNncTlkMHgwbTZtMmxwbzB4eWg4YzB6In0.7ae9utceFvwAhJOKDY3g3A';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/claudiombs/cmcgr4ufl009801ry67oxamra',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((location) => {
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(location.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
      container: 'map',
    })
      .setLngLat(location.coordinates)
      .setHTML(`<p>Day ${location.day}: ${location.description})</p>`)
      .addTo(map);

    bounds.extend(location.coordinates);
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
