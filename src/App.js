
import './App.css';
import {useState} from 'react'

import SmartPhoneViewer from './Components/SmartPhoneViewer/SmartPhoneViewer'

function App() {



  const [viewState, setViewState] = useState('landing-page')








  function viewStateHandler(){
    if(viewState === 'landing-page'){
      return(<div className="landing-page-container">
        <div className="landing-page-jumbotron">JUMBOTRON</div>
        <div className="landing-page-items">
          <div className="product-card-container" onClick={() => {setViewState('smart-phone')}}>Iphone 13</div>
        </div>
      </div>)
    }

    else if(viewState === 'smart-phone'){
      return(<SmartPhoneViewer /> )
    }
  }

  return (
    <div className="App">
      <div className="electronics-app-container">

      <div className="nav-bar-container">
        <div className="nav-bar-wrapper">
    Nav Bar
        </div>
      </div>


<div className="main-view-container">
 {viewStateHandler()}
</div>



      </div>
     
    </div>
  );
}

export default App;
