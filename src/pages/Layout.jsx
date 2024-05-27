import React from "react";
import styled from "styled-components";

const Background = styled.div`
    background-color:white;
    width:100vw;
    height:130vh;
    display:flex;
    justify-content:center;
`
const Container = styled.div`
    background-color:white;
    width:50vw;
    height:100%;
    display:flex;
    /* justify-content:center; */
    /* align-items:center; */
    border: 1px solid black;
    text-align:center;
    flex-direction:column;
`



const Layout = ({children}) => {
    return (
        <>
            <Background>
                <Container>
                    {children}
                </Container>
            </Background>
        </>
    );
};

export default Layout;