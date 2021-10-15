import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {
  Card, CardBody
} from 'reactstrap';
import Emoji from './emoji.json'

function App() {
  const [search, setSearch] = useState('');
  const [datas, setData] = useState(Emoji);
  
  useEffect(()=>{
      const emojiResult = Emoji.filter((emo) => emo.title.toLowerCase().includes(search.toLowerCase()));
      setData(emojiResult);
  },[search])

  return (
    <div className="App">
      <div className="header">
        <div className="emoji_title">Emoji Search</div>
        <input type="text" placeholder="Search Emojis" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div className="cards">
        { 
          datas.length===0?
          <div className="results">No Emojis Found</div>:
          datas.map((data) =>{
            return(
              <div className="cardy">
                <Card>
                  <CardBody>
                    <div className="title">{data.title}</div>
                    <div className="symbol">{data.symbol}</div>
                    <div className="keywords">{data.keywords}</div>
                  </CardBody>
                </Card>
              </div>
              )
            })
        }
      </div>
    </div>
  );
}

export default App;
