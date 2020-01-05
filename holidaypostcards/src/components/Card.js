import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import PostcardHan from './PostcardHan';
import styled from 'styled-components'
import holiday from './imgs/holidaycard.jpg'
import hannukah from './imgs/hannukard.jpg'
import lights from './imgs/lights.jpg'
import PostcardChris from './PostcardChris'
import PostcardHol from './PostcardHol'

let Div = styled.div`
    // margin: auto 4%;
    display: flex;
    // max-width: 100%;
    // box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border: 1px solid red;
`;

let H1 = styled.h1`
    padding: 0 2%;
    // background: red;
    text-align: center;
    @media(max-width: 570px){
        font-size: 1.5rem;
    }
`;


const Card = (props) => {
    const {holiday, setHoliday} = props;
    let textColor = "white"
    const {id} = useParams();
    const [code] = useState(id);
    const [front, setFront] = useState("");
    const [url, setUrl] = useState("");

    if (id.includes("hannukah")){
        textColor="white";
        setHoliday("hannukah");
        // setFront("hannukah");
    } else if (id.includes("christmas")){
        textColor="white";
        setHoliday("christmas");
    } else if (id.includes("holiday")){
        textColor="black";
        setHoliday("holiday");
    }
    return (
        <Div>
            <H1 style={{color:`${textColor}`}}>Tap or click to flip</H1>
            
            {holiday === "hannukah" && <PostcardHan code={code} url={"https://www.youtube.com/embed/WjOJis4UR44"}/>}
            {holiday === "christmas" && <PostcardChris url={"https://www.youtube.com/embed/MswymGTFYbw"}/>}
            {holiday === "holiday" && <PostcardHol url={"https://www.youtube.com/embed/XI9j2uriw8o"}/>}







            
        </Div>
    )
}

export default Card