import './ChoosePath.css';

function ChoosePath({ onClose }) {
  return (
    <aside className="choose-path-panel" aria-label="Choose path">
      <div className="choose-path-header">
        <div>
          <p className="choose-path-label">Route planner</p>
          <h2>Choose path</h2>
        </div>
        <button className="choose-path-close" type="button" onClick={onClose} aria-label="Close choose path panel">
          &times;
        </button>
      </div>
      <form className="choose-path-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="start-destination">Start destination</label>
        <input id="start-destination" type="text" placeholder="Choose starting point" />
        <label htmlFor="end-destination">End destination</label>
        <input id="end-destination" type="text" placeholder="Choose ending point" />
        <button className="choose-path-submit" type="submit">
          Show path
        </button>
      </form>
    </aside>
  );
}

export default ChoosePath;
