import './MapDisplay.css';

function MapDisplay({ campus }) {
  return (
    <section className="map-display" aria-label="Map">
      {campus ? (
        <div className="campus-details">
          <h1>{campus.name}</h1>
          <p><strong>ID:</strong> {campus.id}</p>
          <p>
            <strong>Center:</strong> {campus.center.lat}, {campus.center.lng}
          </p>
          <p><strong>Zoom:</strong> {campus.zoom}</p>
          <h2>Zones</h2>
          <ul>
            {campus.zones.map((zone) => (
              <li key={zone.id}>{zone.name} ({zone.id})</li>
            ))}
          </ul>
          <h2>Files</h2>
          <ul>
            {Object.entries(campus.files).map(([type, file]) => (
              <li key={type}><strong>{type}:</strong> {file}</li>
            ))}
          </ul>
          <h2>Attribution</h2>
          <ul>
            {campus.attribution.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      ) : (
        <p>Loading campus...</p>
      )}
    </section>
  );
}

export default MapDisplay;
