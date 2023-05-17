import React from "react";
import "./Posts.css";
import Post from "./Post.jsx";

const Posts = ({gameRecords}) => {

    return (
        <div className="posts-container">
            <h1 className="section-header">Latest Posts</h1>
            { gameRecords?.map( (game, index) => (
                <Post key={index} gameRecord={game} index={index}/>
            )) }
        </div>
    );
};

export default Posts;