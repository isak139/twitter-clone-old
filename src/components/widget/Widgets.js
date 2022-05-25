import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
                <Search className='widgets_serchIcon' />
                <input placeholder='キーワード検索' type="text"></input>
            </div>
            <div className='widgets_widgetContainer'>
                <h2>いまどうしてる？</h2>
                <TwitterTweetEmbed tweetId={'1529102712100769792'} />
                <TwitterTimelineEmbed sourceType='profile' screenName='Twitter' options={{ height: 400 }} />
                <TwitterShareButton url='https://twitter.com/tan_tsubo01' options={{ text: 'react.jsによるTwitter Clone' }} />
            </div>
        </div>
    )
}

export default Widgets
