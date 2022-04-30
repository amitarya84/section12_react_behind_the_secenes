import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import Demooutput from './components/Demo/DemoOutput';
import Demolist from './components/Demo/DemoList';

function App() {
  // const [showParagraph, setShowParagraph] = useState();
  // const [allowToggle, setAllowToggle] = useState(false)
  const [listTitle, setListTitle] = useState('My List')

  // const toggleParagraphHandler = useCallback(() => {
  //   if(allowToggle){
  //     setShowParagraph(prv => !prv)
  //   }
  // }, [allowToggle])

  // const allowToggleHandler = () => {
  //   setAllowToggle(prv => !prv)
  // }

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title')
  }, [])


  console.log("APP RUNNING!")
  return (
    <div className="app">
      {/* <h1>Hi there!</h1> */}
      {/* <Demooutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button> */}
      <Demolist title={listTitle} items={useMemo(() => [5,2,3,4,1], [])} />
      <Button onClick={changeTitleHandler} >Change Title</Button>
    </div>
  );
}

export default App;
