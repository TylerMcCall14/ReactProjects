import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter-text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="musicScroll">
                <MusicNoteIcon className="videoFooter-icon"/>
                <div className="scroll">
                    {song}
                </div>
                </div>
            </div>
            <img className="videoFooter-record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    )
}

export default VideoFooter
