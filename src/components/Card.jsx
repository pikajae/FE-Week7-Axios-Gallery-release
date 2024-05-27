import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
    width:100%;
    height:90%;
    padding:5px;
    display:flex;
    align-items:center;
    flex-direction:column;
`
const ContentImg = styled.img`
    width:200px;
    height:200px;
`
const TextBox = styled.div`
    width:90%;
    height:50px;
    text-align:left;
`
const Text1 = styled.div`
    height:20px;
    margin:0;
    overflow:hidden;
    text-overflow:ellipsis;
    font-weight:bold;
`
const Text2 = styled.p`
    margin:0;
    font-size:12px;
    color:gray;
`

const Card = ({id,imgLink,imgText,imgName}) => {
    const navigate = useNavigate();
    return (
        <>
            <CardContainer id={id} onClick={()=> navigate(`/detail/${id}`)}>
                <ContentImg src={imgLink}/>
                <TextBox>
                    <Text1>
                        {imgName}
                    </Text1>
                    <Text2>
                        {imgText}
                    </Text2>
                </TextBox>
            </CardContainer>
        </>
    );
};

export default Card;