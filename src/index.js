// console.log('hello, this i jarvis');

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then(registration => {
//         console.log('Service-worker registed');
//       }).catch(error => {
//         console.log('Service-worker registed error');
//       })
//   })
// }
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div>This is App</div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));