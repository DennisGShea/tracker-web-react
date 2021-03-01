import Activities from '../src/scenes/Activities'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (               
    <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
             <p>
               Edit <code>src/App.js</code> TimeTrackerWeb Feb 28 2021.
             </p>
            <a
               className="App-link"
               href="https://timeflip.io/en/faq"
               target="_blank"
               rel="noopener noreferrer"
             >
                Click for TimeTracker FAQ 
             </a>
             <Activities />
           </header>
         </div>
     );
  
}

export default App

