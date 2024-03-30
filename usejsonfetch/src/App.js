import React from 'react';
import ReactDOM from 'react-dom';
import { DataComponent, ErrorComponent, LoadingComponent } from './Components';

function App() {
  return (
    <div>
      <h1>Data Fetch Example</h1>
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
