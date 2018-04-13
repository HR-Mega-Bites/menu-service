import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      test: 'hello',
    };
  }

  render() {
    return (
      <div>{this.state.test}</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
