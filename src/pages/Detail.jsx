import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Layout from "./Layout";
import Comment from "../components/Comment";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

`
const Header = styled.div`
    width:100%;
    height:7%;

    display:flex;

`
const HeaderTextBox = styled.div`
    width:85%;
    height:100%;

    text-align:left;
    align-items:center;

`
const HeaderText1 = styled.h3`
    margin:8px;
`
const HeaderText2 = styled.p`
    margin:8px;
    font-size:13px;
`
const HeaderTextBox2 = styled.div`
    width:15%;
    height:100%;

    display:flex;
    justify-content:center;
    align-items:center;
`
const ContentContainer = styled.div`
    width:97%;
    height:93%;

    display:flex;
    flex-direction:column;
    align-items:center;
    margin:10px;
`
const Imgbox = styled.img`
    height:70%;
    width:100%;
`
const WriteComment = styled.div`
    width:100%;
    height:5%;

    text-align:left;
`
const InputBox = styled.input`
    width:80%;
    height:70%;
    margin:4px;
    border:none;
`
const SubmitBox = styled.button`
    color:blue;
    border:none;
    width:10%;
    height:70%;
    margin:4px;
    margin-left:10px;
    background-color:white;
    pointer-events:auto;
    cursor: pointer;
`
const ViewComment = styled.div`
    width:100%;
    height:25%;

`

const Detail = () => {

    const [comment,setComment]=useState();
    const commentChange = e =>{
        setComment(e.target.value)
    };
    //댓글 내용 입력을 위한 변수

    const {cardId} = useParams();
    //card의 id아 cardId에 저장될것.
    const [cardInfo,setCardInfo] = useState([]);
    const handleSubmit = () => {
        axios
        .post(`http://3.36.127.43:8080/${cardId}/comments`, {
            commentBody:comment
        })
        .then(response => {
            console.log('Comment Created:', response.data);
            setCommentInfo([...commentInfo, response.data]);
            setCommentNumber(commentNumber+1);
            console.log(comment)
        })
        .catch(error => {
            console.error('Failed to post comment:', error);
        });
}
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
    useEffect(() => {
        axios
          .get(`http://3.36.127.43:8080/${cardId}/comments`)
          .then((res) => {
            console.log(res.data);
            setCommentInfo(res.data);
            setCommentNumber(res.data.length);
          })
          .catch((e) => {
            console.log(e);
          });
      }, [cardId]);


//댓글작업 시작
const [commentInfo,setCommentInfo] = useState([]);

useEffect(()=> {
    axios
        .get(`http://3.36.127.43:8080/${cardId}/comments`)
        .then((res)=>{
            console.log(res.data);
            setCommentInfo(res.data);
        })
        .catch((e)=>{
            console.log(e);
        })
},[cardId])

const [commentNumber,setCommentNumber] = useState(0);
//댓글갯수파악용 변수


    return (
        <>
            <Layout>
                <DetailContainer>
                    <Header>
                        <HeaderTextBox>
                            <HeaderText1>멋쟁이 사자처럼 at 인하대학교 12기 모집</HeaderText1>
                            <HeaderText2>1년간 즐겁게 활동할 아기사자들을 모집합니다!</HeaderText2>
                        </HeaderTextBox>
                        <HeaderTextBox2>
                            <p>댓글{commentNumber}개</p>
                        </HeaderTextBox2>
                    </Header>
                    <ContentContainer>
                        {cardInfo.map((card)=>((cardId===card.id)?<Imgbox src={card.imageURL}/>:console.log("불일치")
                            
                        ))}

                        <WriteComment>
                            <InputBox type="text" placeholder="댓글 작성.." value={comment} onChange={commentChange}></InputBox>
                            <SubmitBox onClick={handleSubmit}>게시</SubmitBox>
                        </WriteComment>
                        <ViewComment>
                            {commentInfo.map((comment1)=>(
                                <Comment key={comment1.id} id={comment1.id} imageId={comment1.imageId} commentBody={comment1.commentBody} createdAt={comment1.createdAt} commentInfo={commentInfo} setCommentInfo={setCommentInfo} commentNumber={commentNumber} setCommentNumber={setCommentNumber}></Comment>
                            ))}
                        </ViewComment>
                    </ContentContainer>
                </DetailContainer>
            </Layout>
        </>
    );
};

export default Detail;