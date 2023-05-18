import React, {useState, useEffect} from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'; 

import './App.css';
import Posts from "./components/Posts.jsx";
import PostIndex from "./components/PostIndex.jsx";
import PostDetails from "./components/PostDetails.jsx";
import gameIcon from "./assets/GameIcon.jpeg";

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'patJ0rbW7hd3k2q1d.f36ccc2a6a466d1194a0f4bc1386c4454eacd75f7728864fdfbe05de749ad5c7'}).base('appgXJQeeJKQqLcV1');

const table = base('Master Games');

const getRecords = () => {
  return table.select().firstPage();
}


function App() {

  const [gameRecords, setGameRecords] = useState([]);

  useEffect(() => {
    if (gameRecords.length === 0) {
      getRecords()
      .then((data) => {
        setGameRecords(data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  });

  return (
    <div className="App">
      <div className="banner">
        <img className="banner-img" src={gameIcon} alt="icon"/>
        <h1 className="App-header">Olive's Game Blog</h1>
        <img className="banner-img" src={gameIcon} alt="icon"/>
      </div>
    
      <HashRouter>
        <div className="nav">
          <ul className="nav-container">
            <li>
              <Link className="nav-link" to="/">Latest Posts</Link>
            </li>
            <li>
              <Link className="nav-link" to="/posts-index">Posts Index</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path='/' element={< Posts gameRecords={gameRecords}/>}></Route>
          <Route exact path='/post-details/:postid' element={< PostDetails gameRecords={gameRecords}/>}></Route>
          <Route exact path='/posts-index' element={< PostIndex gameRecords={gameRecords} />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );

}

export default App;
