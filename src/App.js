// website : react router dom
// go to cmd 
// install router command : npm install react-router-dom
// create folder (Containers) create files (home.js)&(About.js)
// in Containers folder create a folder (Config) in create a files (Router.js)
import React from 'react'
import AppRouter from './Containers/Config/Router'
class App extends React.Component{
  render(){
    return(
      <div>
        <AppRouter />
      
      </div>
    )
  }
}

export default App;


