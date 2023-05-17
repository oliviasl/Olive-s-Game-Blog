import React from "react";
import "./PostIndex.css";

const PostIndex = ({gameRecords}) => {
    return (
        <div>
            <h1 className="section-header">Posts Index</h1>

            <div className="index-container">

                {gameRecords.map( (post, index) => (
                    <a key={index} href={"/Olives-Game-Blog/post-details/" + post.fields.Postid} >
                        <img className="index-img" src={post.fields.Indeximg[0].url} alt="post index"/>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PostIndex;