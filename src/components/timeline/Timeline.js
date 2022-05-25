import React, { useEffect, useState } from 'react'
import Post from './Post'
import "./Timeline.css"
import TweetBox from './TweetBox.js'
import db from "../../firebase.js"
import { collection, onSnapshot, orderBy, query, } from "firebase/firestore"
import FlipMove from 'react-flip-move'

function Timeline() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postData = collection(db, "posts");
        const q = query(postData, orderBy("timestamp", "desc"));
        //データをリアルタイムで取得
        onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()))
        })
    }, []);

    return (
        <div className='timeline'>
            {/* Header */}
            <div className='timeline_header'>
                <h2>ホーム</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Post */}
            <FlipMove>
                {posts.map((post) => (<Post
                    key={post.text} /*後でuuidとかに変える*/
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />))}
            </FlipMove>
        </div>
    )
}

export default Timeline
