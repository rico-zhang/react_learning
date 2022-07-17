import React from 'react';
import { Link } from 'react-router-dom'
import BetterLink from './BetterLink';
export default function News(props) {
    return <div>
        <nav>
            <BetterLink to={{name:'newshome'}}>新闻首页</BetterLink>
            <BetterLink to={{name:'newssearch'}}>新闻搜索页</BetterLink>
            <BetterLink to={{name:'newsdetail'}}>新闻详情页</BetterLink>
        </nav>
        <div>
            {props.children}
        </div>
    </div>;
}
