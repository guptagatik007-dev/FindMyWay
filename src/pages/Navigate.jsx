import { useState } from 'react';
import ChoosePath from '../components/ChoosePath';
import MapDisplay from '../components/MapDisplay';
import MapTypeChange from '../components/map_type_change';
import './Navigate.css';

function Navigate() {
  const [isChoosePathOpen, setIsChoosePathOpen] = useState(false);

  return (
    <main className="navigate-page">
      <MapDisplay />
      <MapTypeChange
        isCollapsed={isChoosePathOpen}
        onChangePath={() => setIsChoosePathOpen(true)}
      />
      {isChoosePathOpen && <ChoosePath onClose={() => setIsChoosePathOpen(false)} />}
    </main>
  );
}

export default Navigate;
