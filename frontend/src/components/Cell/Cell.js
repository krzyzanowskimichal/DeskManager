import { useState } from 'react';
import styled from 'styled-components'
import Desk from "../Desk/Desk";


const StyledCell = styled.div`
    width: auto;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background-color: ${(props) => props.color === 'free' ? "white" : "sienna"};
`

const Cell = ({x, y, cell, children}) => {
const [status, setStatus] = useState('free')
const showID = () => console.log(x,y, status, cell)
const changeHandler = () => {
    setStatus(status === 'free' ? 'occupied' : 'free')
    
}

  return (
  <StyledCell color={status} handleChange={changeHandler} onClick={showID}> {children} </StyledCell>
   )};

export default Cell;
