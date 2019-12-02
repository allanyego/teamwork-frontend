import React, { useState } from 'react';

const App: React.FC = () => {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
    <div data-uk-grid>
      <div className="uk-width-1-3@m">
        <div className="uk-card uk-card-default uk-card-body">
          <input type="todo" className="uk-input" />
          <div>
            <ul>
              { [1, 2, 3].map(t => <li key={t}>Flacko</li> )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
