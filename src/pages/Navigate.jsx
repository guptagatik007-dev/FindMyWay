import { useEffect, useState } from 'react';
import ChoosePath from '../components/ChoosePath';
import MapDisplay from '../components/MapDisplay';
import MapTypeChange from '../components/map_type_change';
import './Navigate.css';



// this will be chaged later when fetched through api the function and the errors 
const campusFolder = 'IIT_Mandi';
const campusMetadataFiles = import.meta.glob('../campuses/*/campus.json', {
  eager: true,
  import: 'default',
  query: '?url',
});
const campusMetadataUrl = campusMetadataFiles[`../campuses/${campusFolder}/campus.json`];

function Navigate() {
  const [isChoosePathOpen, setIsChoosePathOpen] = useState(false);
  const [campus, setCampus] = useState(null);
  const [campusError, setCampusError] = useState(
    campusMetadataUrl ? '' : `Campus data was not found for "${campusFolder}".`,
  );

  useEffect(() => {
    if (!campusMetadataUrl) {
      return undefined;
    }

    const loadCampus = async () => {
      try {
        const response = await fetch(campusMetadataUrl);

        if (!response.ok) {
          throw new Error(`Campus data request failed with status ${response.status}.`);
        }

        setCampus(await response.json());
      } catch (error) {
        setCampusError(error instanceof Error ? error.message : 'Unable to load campus data.');
      }
    };

    loadCampus();
  }, []);

  return (
    <main className="navigate-page">
      {campusError ? <p role="alert">{campusError}</p> : <MapDisplay campus={campus} />}
      <MapTypeChange
        isCollapsed={isChoosePathOpen}
        onChangePath={() => setIsChoosePathOpen(true)}
      />
      {isChoosePathOpen && <ChoosePath onClose={() => setIsChoosePathOpen(false)} />}
    </main>
  );
}

export default Navigate;
