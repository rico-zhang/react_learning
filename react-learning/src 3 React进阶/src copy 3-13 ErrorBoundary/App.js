import React from 'react'


function CompA() {
    return (
        <div style={{
            width: "70%",
            height: "300px",
            border: "1px solid"
        }}>
            CompA
            <CompB />
        </div>
    )
}

function CompB() {
    const arr = undefined;
    //在这里发生错误
    const spans = arr.map(it => <span key={it}></span>)

    return (
        <div style={{
            width: "70%",
            height: "300px",
            border: "1px solid"
        }}>
            CompB
        </div>
    )
}

function CompC() {
    return (
        <div style={{
            width: "70%",
            height: "70%",
            border: "1px solid"
        }}>
            CompC
        </div>
    )
}

//方式一
class ErrorBound extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        console.log("getDerivedStateFromError");
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        console.log("componentDidCatch");
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError)
            return <p>11</p>
        return this.props.children;
    }
}

//方式二 HOC
function ErrorB(Com) {
    return class ErrorB extends React.Component {
        state = {
            hasError: false
        }

        static getDerivedStateFromError(error) {
            // 更新 state 使下一次渲染能够显示降级后的 UI
            console.log("getDerivedStateFromError");
            return { hasError: true };
        }
        componentDidCatch(error, errorInfo) {
            // 你同样可以将错误日志上报给服务器
            console.log("componentDidCatch");
            console.log(error, errorInfo);
        }

        render() {
            if (this.state.hasError)
                return <p>11</p>
            return <Com />;
        }
    }
}
const NewA = ErrorB(CompA);
export default function App() {
    return (
        <div className="app" >
            <ErrorBound>
                <CompA />
            </ErrorBound>
            <NewA></NewA>
            <CompC />
        </div>
    )
}
