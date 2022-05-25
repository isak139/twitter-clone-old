import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import db from "../../firebase"

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        // firebaseにデータを追加
        e.preventDefault(); //リロードを防ぐ

        addDoc(collection(db, "posts"), {
            displayName: "テストテスト",
            username: "testtest",
            verified: true,
            text: tweetMessage,
            avatar: "https://i.imgur.com/4poldXr.png",
            image: tweetImage,
            timestamp: serverTimestamp()
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar />
                    <input
                        value={tweetMessage}
                        placeholder='いまどうしてる？' type="text"
                        onChange={(e) => setTweetMessage(e.target.value)}
                    ></input>
                </div>
                <input
                    value={tweetImage}
                    className='tweetBox_imageInput' placeholder='画像のURLを入力' type="text"
                    onChange={(e) => setTweetImage(e.target.value)}
                ></input>
                <Button className="tweetBox_tweetButton" type="submit"
                    onClick={sendTweet}
                >ツイート</Button>
            </form>
        </div>
    )
}

export default TweetBox
