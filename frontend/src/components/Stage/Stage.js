import { useState } from "react";
import styled from "styled-components";
import Cell from "../Cell/Cell";
import { STAGE_WIDTH, STAGE_HEIGHT } from "../../AppHelpers";

const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
      ${(props) => props.height},
      calc(50vw / ${(props) => props.width}));
    grid-template-columns: repeat(${props => props.width}, 1fr);
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 50vw;
`;

const Stage = ({ stage }) => {

    console.log(stage)
        
  return (
    <StyledStage width={stage[0].length} height={stage.length}>{stage.map((row, y) => row.map((cell, x) => <Cell key={x} x={x} y={y} type={cell[(0, "clear")]} />))}</StyledStage>
  );
};

export default Stage;
