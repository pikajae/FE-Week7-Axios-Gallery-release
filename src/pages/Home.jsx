import React , {useEffect, useState} from "react";
import styled from "styled-components";
import Layout from "./Layout";
import Card from "../components/Card";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Header = styled.div`
    width:100%;
    height:100px;

    display:flex;
    justify-content:center;
    align-items:center;
`
const HeaderWrapper= styled.div`
    height:90%;
    width:90%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`
const Lion = styled.img`
    height:80px;
    width:80px;
    margin-right:15px;
`
const TextWrapper = styled.div`
    width:70%;
    height:95%;

    text-align:left;
`
const Text1 = styled.p`
    font-size:12px;
    margin:5px;
`
const Text2 = styled.h3`
    margin:5px;
    margin-top:8px;
`
const ApiContentNumber = styled.p`
    font-size:13px;
    font-weight:bold;
    margin:5px;
`
const ContentContainer = styled.div`
    height:87%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const ContentWrapper = styled.div`
    grid-gap:0;
    height:95%;
    width:95%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:1fr 1fr 1fr;
    justify-items:center;
    align-items:center;
`

const Home = () => {
    const [cardInfo,setCardInfo] = useState([]);

    useEffect(()=> {
        axios
            .get(`http://3.36.127.43:8080/imageAll`)
            .then((res)=>{
                console.log(res.data);
                setCardInfo(res.data);
            })
            .catch((e)=>{
                console.log(e);
            })
    },[])

const [imgNumber,setImgNumber] = useState();
    useEffect(()=> {
        axios
            .get(`http://3.36.127.43:8080/imageSize`)
            .then((res)=>{
                console.log(res.data);
                setImgNumber(res.data);
            })
            .catch((e)=>{
                console.log(e);
            })
    },[])

    return (
        <>
            <Layout>
                <Header>
                    <HeaderWrapper>
                        <Lion src="img/logo.jpg"></Lion>
                        <TextWrapper>
                            <Text2>likelion_12th_frontend</Text2>
                            <Text1>멋쟁이사자처럼 12기 여러분들 화이팅!! 어른사자로 폭풍성장중..🦁</Text1>
                            <ApiContentNumber>게시물 {imgNumber}개</ApiContentNumber>
                        </TextWrapper>
                    </HeaderWrapper>
                </Header>
                <ContentContainer>
                    <ContentWrapper>
                        {cardInfo.map((card,index)=>(
                            <Card key={index} id={card.id} imgLink={card.imageURL} imgName={`${card.imageName}`} imgText={`${card.imageText}`}></Card>
                        ))}
                    </ContentWrapper>
                </ContentContainer>

            </Layout>
        </>
    );
};

export default Home;