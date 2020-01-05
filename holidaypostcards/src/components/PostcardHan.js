import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
// import './postcard.css'
import styled from 'styled-components'
import back from './imgs/nolinesback.jpg'
import holiday from './imgs/holidaycard.jpg'
import hannukah from './imgs/hannukard.jpg'
import lights from './imgs/lights.jpg'

const CardBack = styled.div`
    box-shadow: 3px 3px 8px 5px #2b1616;
    width: 350px;
    height: 233px;
    background: url(${back});
    background-size: cover;
    background-position: 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(min-width: 530px){
        width: 500px;
        height: 333px;
    }
    @media(min-width: 750px){
        width: 700px;
        height: 466px;
    }
    @media(min-width:1160px){
        width: 1000px;
        height: 666px;
    }
    @media(min-width:1450px){
        width: 1200px;
        height: 800px;
    }
    // @media(min-width:1600px){
    //     width: 1400px;
    //     height: 787px;
    // }
    @media only screen 
    and (min-device-width: 640px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
        width: 350px;
        height: 233px;
  }
`;

const CardFront = styled.div`
    box-shadow: 3px 3px 8px 5px #2b1616;
    width: 350px;
    height: 233px;
    background-image: url(${hannukah});
    background-size: cover;
    background-position: 50% 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media(min-width: 530px){
        width: 500px;
        height: 333px;
    }
    @media(min-width: 750px){
        width: 700px;
        height: 466px;
    }
    @media(min-width:1160px){
        width: 1000px;
        height: 666px;
    }
    @media(min-width:1450px){
        width: 1200px;
        height: 800px;
    }
    // @media(min-width:1600px){
    //     width: 1400px;
    //     height: 787px;
    // }
    @media only screen 
    and (min-device-width: 640px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
        width: 350px;
        height: 233px;
  }
`;

const Container = styled.div`
    margin: 15% 2%;
    position: relative;
    z-index: 10;
    // border: 1px solid red;
    @media(min-width: 1160px){
        margin: 8% 2% 15% 2%;
    }
    @media(min-width: 1400px){
        margin: 4% 2% 15% 2%;
    }
    @media only screen 
    and (min-device-width: 640px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
        margin: 0 auto;
  }
`;

const Btn = styled.button`
    margin-top: 4%;
    border: none;
    border-radius: 5px;
    background: dodgerblue;
    padding: 1% 2%;
    color: white;
`;


class Postcard extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    // style={{background: `url(${hannukah})`}}
    render() {
        // if(this.props.code === "hannukah"){
            return (
                <Container onClick={this.handleClick}>
              <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <CardFront >
                  {/* {`${this.props.code}`} */}
                  {/* <button onClick={this.handleClick}>Click to flip</button> */}
                </CardFront>
         
                <CardBack >
                  {/* This is the back of the card. */}
                  <iframe frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" width="70%" height="60%" src={this.props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                  {/* <button onClick={this.handleClick}>Click to flip</button> */}
                </CardBack>
              </ReactCardFlip>
              {/* <Btn onClick={this.handleClick}>Click to flip</Btn> */}
              </Container>
            )
        // } else {
        //     return (
        //         <Container onClick={this.handleClick}>
        //       <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        //         <CardFront style={{background: `url(${lights})`}}>
        //           {`This is the front of the card. ${this.props.code}`}
        //           {/* <button onClick={this.handleClick}>Click to flip</button> */}
        //         </CardFront>
         
        //         <CardBack >
        //           {/* This is the back of the card. */}
        //           <iframe width="50%" height="40%" src="https://www.youtube.com/embed/q-I-JNmZA98" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //           {/* <button onClick={this.handleClick}>Click to flip</button> */}
        //         </CardBack>
        //       </ReactCardFlip>
        //       {/* <Btn onClick={this.handleClick}>Click to flip</Btn> */}
        //       </Container>
        //     )
        // }
      
    }
  }

export default Postcard
