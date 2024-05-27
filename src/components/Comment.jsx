import React , {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
    width:100%;
    height:15%;
    display:flex;
    align-items:center;

`
const Text1 = styled.h3`
    font-size:16px;
    margin-left:10px;
`
const Text2 = styled.p`
    margin-left:10px;
    width:75%;
`
const DelButton = styled.button`
    width:10%;
    height:70%;
    color:gray;
    margin-left:10px;
    background-color:white;
    border:none;
    cursor: pointer;
`
const Comment=({id,imageId,commentBody,createdAt,commentInfo,setCommentInfo,commentNumber,setCommentNumber}) => {


const delComment = () => {
    axios
        .delete(`https://reqres.in/api/users/${imageId}/comments/${id}`)
        .then(response => {
            setCommentInfo(commentInfo.filter((com)=>com.id !== id));
            console.log('Comment deleted successfully:', response.data);
            setCommentNumber(commentNumber-1);
        })
        .catch(error => {
            console.log('Failed to delete comment:', error);
        })
};


    return(
        <>  
            <Wrapper>
                <Text1>익명</Text1>
                <Text2> {commentBody} </Text2>
                <DelButton onClick={delComment}>삭제</DelButton>
            </Wrapper>
        </>
    );
};

export default Comment;