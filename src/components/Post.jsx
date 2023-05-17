import React from "react";
import "./Post.css";
import moment from 'moment';
import showdown from 'showdown';

const markdownConverter = new showdown.Converter();

const Post = ({gameRecord}) => {

    function createHTML(markdown){
        return(
            markdownConverter.makeHtml(markdown)
        )
    }

    return (  
        <div className="center-post">
            <div className="post-container">
                <h1 className="heading">{gameRecord.fields.Title}</h1>
                <h4>{moment(gameRecord.fields.Date).format("MMMM DD, yyyy")}</h4>
                <img className="header-img" src={gameRecord.fields.Headerimg[0].url} alt="post" />
                <div className="post-body">
                    <h4>Gameplay Rating: {gameRecord.fields.Gameplayrating}</h4>
                    <div dangerouslySetInnerHTML={{__html: createHTML(gameRecord.fields.Gameplaybody)}}></div>
                    <h4>Story Rating: {gameRecord.fields.Storyrating}</h4>
                    <div dangerouslySetInnerHTML={{__html: createHTML(gameRecord.fields.Storybody)}}></div>
                    <h4>Overall Rating: {gameRecord.fields.Overallrating}</h4>
                    <div dangerouslySetInnerHTML={{__html: createHTML(gameRecord.fields.Conclusion)}}></div>
                </div>
                <div className="bottom-gallery">
                    <img className="gallery-img" src={gameRecord.fields.Images[0].url} alt="post" />
                    <img className="gallery-img" src={gameRecord.fields.Images[1].url} alt="post" />
                    <img className="gallery-img" src={gameRecord.fields.Images[2].url} alt="post" />
                </div>
            </div>
        </div>
    );
};
  
export default Post;