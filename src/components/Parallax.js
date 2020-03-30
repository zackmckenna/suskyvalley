import React, { useState, useEffect } from 'react';
import { Parallax, Background } from 'react-parallax';
import { Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap'
import divider from '../assets/sdv_divider.png'

const MyComponent = () => {
  const [name, setName] = useState('')

  const handleNameChange = (event) => {
    event.preventDefault()
    setName(event.target.value)
  }

  return (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={0}
            bgImage={require('../assets/stardewbackground.png')}
            bgImageAlt="the cat"
            strength={200}
        >
            <Row>
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
              <Row>
                <Col>
                  <h1 style={{ fontFamily: 'StardewValleyText'}}> Welcome to Susky Valley!</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 style={{ fontFamily: 'StardewValleyText'}}>Please enter your name:</h3>
                </Col>
              </Row>
              <Row>
                <Col style={{ margin: 'auto'}} sm={6}>
                  <InputGroup className="mb-3">
                    <FormControl
                      style={{ fontFamily: 'StardewValleyText'}}
                      onChange={(event) => handleNameChange(event)}
                      value={name}
                      placeholder="name"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="primary">Button</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
            <img src={divider} />
        </Parallax>
    </div>
  )
}
;
export default MyComponent;
