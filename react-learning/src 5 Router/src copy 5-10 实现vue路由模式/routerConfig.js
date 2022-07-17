import Home from "./Home"
import News from "./News"
import NewsHome from "./NewsHome"
import NewsSearch from "./NewsSearch"
import NewsDetail from "./NewsDetail"

export default [
    {
        path: '/', exact: true,name:'home', component: Home
    },
    {
        path: '/news', name:'news',component: News,
        children: [
            { path: '/', exact: true, name:'newshome',component: NewsHome },
            { path: '/search', name:'newssearch',component: NewsSearch },
            { path: '/detail', name:'newsdetail',component: NewsDetail },
        ]
    }
]