import { useState } from 'react';
import styled from 'styled-components'
import { Piece } from '../Piece/Piece';

const StyledCell = styled.div`
    width: auto;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background-color: ${(props) => props.color === 'free' ? "white" : "sienna"};
`

const Cell = ({x, y}) => {
const [status, setStatus] = useState('free')
const showID = () => console.log(x,y, status)
const changeHandler = () => {
    setStatus(status === 'free' ? 'occupied' : 'free')
    console.log(x,y, status)
}

  return (
  <StyledCell color={status} handleChange={showID} onClick={changeHandler} > <Piece  />  </StyledCell>
   )};

export default Cell;
