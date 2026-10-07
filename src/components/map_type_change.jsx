import { useState } from 'react';
import './map_type_change.css';

const mapTypes = [
  { name: '3D Map', icon: '◇' },
  { name: 'Outside', icon: '◎' },
  { name: 'Inside', icon: '▦' },
];

function MapTypeChange({ isCollapsed, onChangePath }) {
  const [activeMapType, setActiveMapType] = useState('3D Map');

  return (
    <aside className={`map-type-sidebar ${isCollapsed ? 'collapsed' : ''}`} aria-label="Map view">
      {mapTypes.map((mapType) => (
        <button
          className={`map-type-option ${activeMapType === mapType.name ? 'active' : ''}`}
          type="button"
          key={mapType.name}
          onClick={() => setActiveMapType(mapType.name)}
          aria-pressed={activeMapType === mapType.name}
        >
          <span className="map-type-icon" aria-hidden="true">{mapType.icon}</span>
          <span className="map-type-label">{mapType.name}</span>
        </button>
      ))}
      <button className="change-path-button" type="button" onClick={onChangePath}>
        Change path
      </button>
    </aside>
  );
}

export default MapTypeChange;
