import * as React from 'react';
import './App.css';

import Routers from './components/routers';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <Routers/>
      </div>
    );
  }
}

export default App;
