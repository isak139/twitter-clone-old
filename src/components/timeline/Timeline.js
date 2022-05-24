import React from 'react'
import Post from './Post'
import "./Timeline.css"
import TweetBox from './TweetBox.js'

function Timeline() {
    return (
        <div className='timeline'>
            {/* Header */}
            <div className='timeline_header'>
                <h2>ホーム</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Post */}
            <Post
                displayName="テストテスト"
                username="testtest"
                verified={true}
                text="始めてのツイート"
                avatar="https://i.imgur.com/4poldXr.png"
                image="https://source.unsplash.com/random"
            />
        </div>
    )
}

export default Timeline
