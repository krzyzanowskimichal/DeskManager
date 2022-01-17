import { useEffect, useState } from "react";
import styled from "styled-components";
import Cell from "../Cell/Cell";
import Desk from "../Desk/Desk";
import { STAGE_WIDTH, STAGE_HEIGHT } from "../../AppHelpers";
import { DESKS } from "../DesksLayout/DesksLayout";

const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(${(props) => props.height}, calc(50vw / ${(props) => props.width}));
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 50vw;
`;

const Stage = ({ stage, setStage }) => {
  console.log(stage);
  const [deskList, setDeskList] = useState([
    { id: 1, type: "single", rotation: "left", coordinates: { x: 1, y: 1 }, shape: DESKS.L.shape, collided: false,
},
    { id: 2, type: "single", rotation: "none", coordinates: [{ x: 3, y: 3 }] },
    {
      id: 3,
      type: "double",
      rotation: "none",
      coordinates: [
        { x: 5, y: 4 },
        { x: 6, y: 4 }
      ]
    }
  ]);

  useEffect(() => {
    const updateStage = prevStage => {
        // First flush the stage
        const newStage = prevStage.map(row =>
          row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
        );
  
        // Then draw the tetromino
        deskList[0].shape.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value !== 0) {
              newStage[y + deskList[0].coordinates.y][x + deskList[0].coordinates.x] = [
                value,
                `${deskList[0].collided ? 'merged' : 'clear'}`,
              ];
            }
          });
        });
        // Then check if we got some score if collided
        // if (player.collided) {
        //   resetPlayer();
        //   return sweepRows(newStage);
        // }
        return newStage;
      };
  
      // Here are the updates
      setStage(prev => updateStage(prev));
  }, [])

  return (
    // <StyledStage width={stage[0].length} height={stage.length}>{stage.map((row, y) => row.map((cell, x) => <Cell key={x} x={x} y={y} cell={cell} type={cell[(0, "clear")]}> {
    //     deskList.map(item =>
    //     item.coordinates.map(match => (match.x === x && match.y === y) && <Desk name={item.id} deskList={deskList} setDeskList={setDeskList} rotate={item.rotation}/>)
    //     )
    //     } </Cell>))}</StyledStage>

    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row, y) => row.map((cell, x) => <Cell key={x} x={x} y={y} cell={cell} type={cell[(0, "clear")]} />))}
    </StyledStage>
  );
};

export default Stage;
