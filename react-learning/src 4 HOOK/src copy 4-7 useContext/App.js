import React,{useContext} from 'react'

const ctx = React.createContext("");


//使用useContext
function Test(){
   const value = useContext(ctx);
   return <p>上下文的值是{value}</p>
}

//不使用useContext
// function Test() {
//     return (<ctx.Consumer>
//         {value => <p>上下文的值是{value}</p>}
//     </ctx.Consumer>
//     )
// }

export default function App() {
    return (
        <ctx.Provider value="abc">
            <div className="app">
                <Test />
            </div>
        </ctx.Provider>

    )
}
