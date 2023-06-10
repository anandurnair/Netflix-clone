import React from 'react';
import { action,netflixOrginals,horror,comedey,documentaries,romance } from './urls';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Banner/>
     <RowPost url={netflixOrginals} title='Netflix Orginals' />
     <RowPost url={action} title="Action" isSmall/>
     <RowPost url={horror} title="Horror" isSmall/>
     <RowPost url={comedey} title="Comedy" isSmall/>
     <RowPost url={romance} title="Romance" isSmall/>
     <RowPost url={documentaries} title="Documentaries" isSmall/>
    </div>
  );
}

export default App;
