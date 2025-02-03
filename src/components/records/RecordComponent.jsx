import "./_RecordComponent.scss";

function RecordComponent() {
  return (
    <div className="record-container">
      <h2 className="title">History</h2>

      <div className="month-container">
        <h3 className="month-title">August 2024</h3>
        <div className="record-day-container">
          <h4 className="subtitle">Routine</h4>
          <h5 className="day-subtitle">Tuesday, 27 Aug</h5>
          <div className="exercise-container">
            <div>
              <h4 className="subtitle">Exercise</h4>
              <ul className="exercise-name-list">
                <li>3 x exercise name</li>
                <li>3 x exercise name</li>
                <li>3 x exercise name</li>
                <li>3 x exercise name</li>
              </ul>
            </div>
            <div>
              <h4 className="subtitle">Best Set</h4>
              <ul className="best-set-list">
                <li>20 kg x 15</li>
                <li>20 kg x 15</li>
                <li>20 kg x 15</li>
                <li>20 kg x 15</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordComponent;
