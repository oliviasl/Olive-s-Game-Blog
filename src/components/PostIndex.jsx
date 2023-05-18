import React from "react";
import "./PostIndex.css";
import { Link } from 'react-router-dom';

const PostIndex = ({gameRecords}) => {
    return (
        <div>
            <h1 className="section-header">Posts Index</h1>

            <div className="index-container">

                {gameRecords.map( (post, index) => (
                    <Link className="index-link" key={index} to={"/post-details/" + post.fields.Postid} >
                        <img className="index-img" src={post.fields.Indeximg[0].url} alt="post index"/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PostIndex;