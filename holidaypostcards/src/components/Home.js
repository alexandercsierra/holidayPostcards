import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    // width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    // margin: 50% 2%;
    position: relative;
    z-index: 10000;
    // color: white;
    // border: 1px solid red;
    // margin-top: 30%;
//     @media(min-width: 1000px){
//         margin-top: 20%;
//     }
//     @media(min-width: 1370px){
//         margin-top: 15%;
//     }
// `;

const TheLink = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    color: red;
    margin: 4% auto;
    // padding: 2% 8%;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Input = styled.input`
    margin: 4% 0;
    font-size: 1rem;
    padding: 4%;
    width: 200%;
    border-radius: 5px;
    border: none;
    box-shadow: 3px 3px 8px 5px #2b1616;
    @media(max-width: 430px){
        width: 90%;
    }
`;

const Btn = styled.button`
    border-radius: 5px;
    width: 80%;
    border: 1px solid white;
    padding: 2% 4%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 10%;
    // box-shadow: 3px 3px 8px 5px #2b1616;
`;

const H1 = styled.h1`
    // margin-top: -10%;
    margin-top: 15%;
    color: white;
    @media (max-width: 1150px){
        margin-top: 30%;
    }
    @media (max-width: 800px){
        margin-top: 45%;
    }
    @media (max-width: 500px){
        margin-top: 60%;
    }
`;

const Div = styled.div`
    border: 1px solid white;
    width: 500px;
    height: 500px;
    // margin-top: 25%;
`;

const Home = (props) =>{

    const {setId, id, holiday, setHoliday} = props;

    const [code, setCode] = useState("");
    useEffect(()=>{
        setId(code);
    }, [code])

    function onSubmit(e){
        e.preventDefault();
        // setId(code);
        console.log(id);
    }


    function handleChange (e) {
        e.preventDefault();
        setCode(e.target.value);
    }

    return(
        <Container>
            {/* <Div> */}
            <H1>Happy Holidays!</H1>
            <h4 style={{color: "white"}}>Enter your greeting code below</h4>
            <Form onSubmit={onSubmit}>
                <Input name="code" id="code" onChange={handleChange} value={code} placeholder="enter code here"/>
                <Btn><TheLink to={`/card/${id}`}>Get your Card!</TheLink></Btn>
            </Form>
            <p style={{color: "white", background: "rgba(0,0,0,0.5)", borderRadius: "5px", padding: "1% 2%"}}>Try entering "christmas", "holiday", or "hannukah"</p>
            {/* </Div> */}
        </Container>
    )
}

export default Home