import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import "./App.css"
import RootRouterView from './RootRouterView';
import BetterLink from './BetterLink';
export default function App() {
    return <Router>
        <nav>
            <BetterLink to={{name:'home'}}>首页</BetterLink>
            <BetterLink to={{name:'news'}}>新闻页</BetterLink>
        </nav>
        <div>
            <RootRouterView />
        </div>

    </Router>;
}
