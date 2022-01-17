import styled from 'styled-components'
import desk from '../../assets/images/desk.png'

const StyledDesk = styled.div`
width: 100%;
height: 100%;
background-image: url(${desk});
background-position: center;
background-size: cover;
transform: ${props => {
    if(props.rotate === 'none') return 'unset';
    else if(props.rotate === 'left') return 'rotate(90deg)';
    else if(props.rotate === 'right') return 'rotate(270deg)';
    else if(props.rotate === 'upside') return 'rotate(180deg)' 
}};
`


const Desk = ({rotate, setDeskList, deskList, name}) => {

    const test = () => {
        console.log(name)
        let newState = [...deskList];
        newState[name - 1].rotation = 'right';
        setDeskList(newState)
    }

return (
    <StyledDesk rotate={rotate} onClick={test}/>
)
}

export default Desk