import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm';
import Quotes from './containers/Quotes'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
        <Quotes />
      </div>
    );
  }
}

export default App;

// XXX renders without crashing
// XXX always renders an h1 tag with 'Quote Maker'
// XXX always renders a 'QuoteForm' component
// XXX always renders a 'Quotes' components