import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';

export default function Textinput() {

  const upClick = () => {
    console.log("UpperCase clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  const loClick = () => {
    console.log("LowerCase clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
  }

  const handleOnChange = (event) => {
    console.log("Text changed");
    setText(event.target.value);
  }
  const [text, setText] = useState("");

  const wordLength=(text===''?0:text.split(' ').length);


  return (
    <div>
      <Container className='py-3'>
        <h1>Please enter text for analyzing</h1>
        <InputGroup size="lg" className='py-3'>
          <textarea
            className='form-control'
            rows={8}
            placeholder='Please enter the text'
            value={text}
            onChange={handleOnChange}
          />
        </InputGroup>
        <Button className='mx-1' onClick={upClick}>Upper Case</Button>
        <Button className='mx-1' onClick={loClick}>Lower Case</Button><br />
        <p style={{marginTop:"50px", fontSize:"30px"}}>Your entered text has {text.length} characters and {wordLength} words.</p>
        <p style={{marginTop:"20px", fontSize:"30px"}}>Approx. reading time {0.48 * wordLength} seconds. </p>
      </Container>
    </div>
  )
}
