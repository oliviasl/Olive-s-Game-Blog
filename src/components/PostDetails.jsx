import React from "react";
import "./Post.css";
import { useParams } from 'react-router-dom'; 
import Post from "./Post.jsx";

const PostDetails =  ({gameRecords}) => {
    const {postid} = useParams();

    var postIndex = 0;
    for (let i = 0;i < gameRecords.length; i ++){
        if (gameRecords[i].Postid === postid) {
            postIndex = i;
        }
    }

    return (
        <div>
            {gameRecords.length > 0 ? <Post gameRecord={gameRecords[postIndex]} index={postIndex}></Post> : ''}
            
        </div>
    );
};

export default PostDetails;