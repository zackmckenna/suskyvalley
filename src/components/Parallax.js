import React, { useState, useEffect } from 'react';
import { Parallax, Background } from 'react-parallax';
import { Row, Col, InputGroup, Button, Container, FormControl } from 'react-bootstrap'
import divider from '../assets/sdv_divider.png'

const MyComponent = () => {
  const [name, setName] = useState('')
  const [playerName, setPlayerName] = useState('')
  const [hasName, setHasName] = useState(false)
  const [part, setPart] = useState(0)
  const [colaCode, setColaCode] = useState('')
  const [counter, setCounter] = useState(0)
  const [wrongColaCode, setWrongColaCode] = useState('')
  const [magnetCode, setMagnetCode] = useState('')
  const [keyCodeOne, setKeyCodeOne] = useState('')
  const [keyCodeTwo, setKeyCodeTwo] = useState('')

  const handleNameChange = (event) => {
    event.preventDefault()
    setName(event.target.value)
  }

  const handleSubmitColaCode = () => {
    if (colaCode == '4072'){
      setPart(part + 1)
    } else {
      setColaCode('')
      setWrongColaCode('That is not the code!')
      setTimeout(() => {
        setWrongColaCode('')
      }, 3000)
    }
  }

  const handleSubmitKeyCodeOne = () => {
    if (keyCodeOne == '4352'){
      setPart(part + 1)
    } else {
      setKeyCodeOne('')
      setWrongColaCode('That is not the code!')
      setTimeout(() => {
        setWrongColaCode('')
      }, 3000)
    }
  }

  const handleKeyCodeOneChange = (event) => {
    event.preventDefault()
    setKeyCodeOne(event.target.value)
  }

  const handleSubmitKeyCodeTwo = () => {
    if (keyCodeTwo == '2249'){
      setPart(part + 1)
    } else {
      setKeyCodeTwo('')
      setWrongColaCode('That is not the code!')
      setTimeout(() => {
        setWrongColaCode('')
      }, 3000)
    }
  }

  const handleKeyCodeTwoChange = (event) => {
    event.preventDefault()
    setKeyCodeTwo(event.target.value)
  }

  const handleSubmitMagnetCode = () => {
    if (magnetCode == '5432861'){
      setPart(part + 1)
    } else {
      setMagnetCode('')
      setWrongColaCode('That is not the code!')
      setTimeout(() => {
        setWrongColaCode('')
      }, 3000)
    }
  }

  const handleColaCodeChange = (event) => {
    event.preventDefault()
    setColaCode(event.target.value)
  }

  const handleMagnetCodeChange = (event) => {
    event.preventDefault()
    setMagnetCode(event.target.value)
  }


  const handleNameSubmit = (event) => {
    event.preventDefault()
    setPlayerName(name)
    setHasName(true)
    setPart(1)
  }

  const handlePartClick = (event) => {
    event.preventDefault()
    setPart(part + 1)
  }

  const renderPart = () => {
    switch (part) {
      case 0:
        return null
      case 1:
        return <PartOne/>
      case 2:
        return <PartTwo/>
      case 3:
        return <>
          <h3 style={{ fontFamily: 'StardewValleyText'}}>Before you go looking for it, you might want to gather some items. And before you gather items, you might want to head to your fridge and grab some Joja cola for an energy boost! Type in the code on the can in order to continue.</h3>
          <InputGroup className="mb-3">
            <FormControl
              style={{ fontFamily: 'StardewValleyText'}}
              onChange={(event) => handleColaCodeChange(event)}
              value={colaCode}
              placeholder="cola code"
              aria-label="cola code"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button style= {{ fontFamily: 'StardewValleyText' }} onClick={(event) => handleSubmitColaCode(event)} variant="primary">I got the Cola!</Button>
            </InputGroup.Append>
          </InputGroup>
          {wrongColaCode ? wrongColaCode : null}
      </>
      case 4:
        return <>
          <PartFour />
          <InputGroup className="mb-3">
            <FormControl
              style={{ fontFamily: 'StardewValleyText'}}
              onChange={(event) => handleMagnetCodeChange(event)}
              value={magnetCode}
              placeholder="secret code"
              aria-label="cola code"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button style= {{ fontFamily: 'StardewValleyText' }} onClick={(event) => handleSubmitMagnetCode(event)} variant="primary">Submit Code</Button>
            </InputGroup.Append>
          </InputGroup>
          {wrongColaCode ? wrongColaCode : null}
      </>
      case 5:
        return <>
        <PartFive />
        <InputGroup className="mb-3">
          <FormControl
            style={{ fontFamily: 'StardewValleyText'}}
            onChange={(event) => handleKeyCodeOneChange(event)}
            value={keyCodeOne}
            placeholder="secret code"
            aria-label="cola code"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button style= {{ fontFamily: 'StardewValleyText' }} onClick={(event) => handleSubmitKeyCodeOne(event)} variant="primary">Submit Key Code</Button>
          </InputGroup.Append>
        </InputGroup>
        {wrongColaCode ? wrongColaCode : null}
    </>
    case 6:
      return <>
        <PartSix />
        <InputGroup className="mb-3">
          <FormControl
            style={{ fontFamily: 'StardewValleyText'}}
            onChange={(event) => handleKeyCodeTwoChange(event)}
            value={keyCodeTwo}
            placeholder="secret code 2"
            aria-label="cola code"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button style= {{ fontFamily: 'StardewValleyText' }} onClick={(event) => handleSubmitKeyCodeTwo(event)} variant="primary">Submit Key Code</Button>
          </InputGroup.Append>
        </InputGroup>
        {wrongColaCode ? wrongColaCode : null}
    </>
    case 7:
      return <PartSeven />
      default:
        return <Error />
    }
  }

  const Error = () => <h1>OH NO ERROR!</h1>

  const PartOne = () => {
    return (
      <>
        <h3 style={{ fontFamily: 'StardewValleyText'}}>What a great day in the Valley for such a special occasion! You've toiled long and hard this year to create an incredible farm. You've fought a countless number of horrific monsters, filled the hearts of everyone here with love, and have truly given this town 100%. So, for that, the citizens of Susky Valley thank you {playerName}, and wish you a Happy Birthday!</h3>
        <Button onClick={(event) => handlePartClick(event)} style= {{ fontFamily: 'StardewValleyText' }}>Yay! It's my birthday!</Button>
      </>
    )
  }

  const PartTwo = () => {
    return (
      <>
        <h3 style={{ fontFamily: 'StardewValleyText'}}>To show our gratitude, we got you a special gift! To show our ineptitude, we somehow lost it this morning on our way to your house, and we need your help to find it again.</h3>
        <Button onClick={(event) => handlePartClick(event)} style= {{ fontFamily: 'StardewValleyText' }}>Okie Bork</Button>
      </>
    )
  }

  const PartThree = () => {

    const handleSubmitColaCode = () => {
      if (colaCode == '4072'){
        setPart(part + 1)
      }
    }

    const handleColaCodeChange = (event) => {
      event.preventDefault()
      setColaCode(event.target.value)
    }

    return (
      <>
        <h3 style={{ fontFamily: 'StardewValleyText'}}>Before you go looking for it, you might want to gather some items. And before you gather items, you might want to head to your fridge and grab some Joja cola for an energy boost! Type in the code on the can in order to continue.</h3>
        <InputGroup className="mb-3">
          <FormControl
            style={{ fontFamily: 'StardewValleyText'}}
            onChange={(event) => handleColaCodeChange(event)}
            value={colaCode}
            placeholder="cola code"
            aria-label="cola code"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button style= {{ fontFamily: 'StardewValleyText' }} onClick={(event) => handleSubmitColaCode(event)} variant="primary">Got the Cola!</Button>
          </InputGroup.Append>
        </InputGroup>
      </>
    )
  }

  const PartFour = () => {
    return (
    <>
      <h3 style={{ fontFamily: 'StardewValleyText'}}>Great! I hope you're feeling more caffeinated now. So there are two items that you'll probably need to find your gift, so lets start with the first one. You'll need your compass to tell you where to go. Some spooky looking <span style={{ color: 'red'}}>M</span><span style={{ color: 'green'}}>A</span><span style={{ color: 'yellow'}}>G</span><span style={{ color: 'purple'}}>N</span><span style={{ color: '#B5E0F1'}}>E</span><span style={{ color: 'orange'}}>T</span><span style={{ color: 'blue'}}>S</span> might have hid it somewhere. Look behind them and you may find the clue!</h3>
    </>
    )
  }

  const PartFive = () => {
    return (
    <>
      <h3 style={{ fontFamily: 'StardewValleyText'}}>GHOSTS: oooOOOOooo you got us. Fine, we'll tell you where the key is. Round and round the sound does go, how the compass needle spins, the tunes do flow. Go there and flip the lid to reveal the key and what we have hid.</h3>
    </>
    )
  }

  const PartSix = () => {
    return (
      <h3 style={{ fontFamily: 'StardewValleyText'}}>Ah! The compass! The first key item! You've found it! You're halfway there. Now for the next one. This item should be near where the plants hang out inside to stay warm during the winter.</h3>
    )
  }

  const PartSeven = () => {
    return (
      <h3 style={{ fontFamily: 'StardewValleyText'}}>Oh! I almost forgot! Make sure to grab the map. I think one of Krobus' friends got to it, so it might be in poor shape. I think I last saw it around the black shipping crate in the kitchen. Grab the map, your compass, the shovel, and go find your Birthday Gift! Once again, happy birthday {name}, from everyone here in Susky Valley! I hope it's a fantastic day. </h3>
    )
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
          <Container>

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
              {!hasName ?
              <>
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
                      <Button style= {{ fontFamily: 'StardewValleyText' }} onClick={(event) => handleNameSubmit(event)} variant="primary">Submit Name</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
              </> : null }
              {renderPart()}
          </Container>
            <img src={divider} />
        </Parallax>
    </div>
  )
}
;
export default MyComponent;
