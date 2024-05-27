import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const Wrapper = styled.div`
    width:50%;
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center
`

const NotFound = () => {
    return (
        <>
        <Layout>
            <Container>
                <Wrapper>
                    <h1>안돼 안바꿔줘 돌아가.</h1>
                    <Link to="/">도망가기!</Link>
                
                </Wrapper>
            </Container>
        </Layout>
        </>
    );
};

export default NotFound;