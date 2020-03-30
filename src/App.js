import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap'
import StardewValley from './fonts/StardewValley.ttf'
import stardewbackground from './assets/stardewbackground.png'
import divider from './assets/sdv_divider.png'
// import { Parallax, Background } from 'react-parallax'
import Parallax from './components/Parallax'

function App() {
  return (
    <div className="App">
      <Parallax />
      {/* <Row>
        <Col>
          <h1 className='mt-5' style={{ WebkitTextFillColor: 'rgba(217, 190, 37)', fontColor: 'black', fontSize: '10rem', marginBottom: '0', fontFamily: 'StardewValley'}}>
              <span style={{ fontFamily: 'StardewValleyCaps'}}>S</span>USK<span style={{ fontFamily: 'StardewValleyCaps'}}>Y</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{ WebkitTextFillColor: 'rgba(217, 190, 37)', margin: '0', fontSize: '10rem', fontFamily: 'StardewValley'}}>
            <span style={{ fontFamily: 'StardewValleyCaps'}}>V</span>ALLE<span style={{ fontFamily: 'StardewValleyCaps'}}>Y</span>
          </h1>
        </Col>
      </Row>
      <img src={divider}/>
      <Row>
        <Col style={{ fontFamily: 'StardewValleyText'}}>

        </Col>
      </Row>
      <header className="App-header">
      </header> */}
    </div>
  );
}

export default App;
