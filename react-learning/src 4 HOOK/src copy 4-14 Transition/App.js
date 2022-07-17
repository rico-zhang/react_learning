import React, { useState } from 'react'
import { Transition } from 'react-transition-group'

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};


export default function App() {
    const [inProp, setInProp] = useState(false);
    return (
        <div className="app">
            <Transition in={inProp} timeout={duration}
                //mountOnEnter//初始状态 in如果为false 则不挂载; in为true 才挂载
                //unmountOnExit//in如果为false 则销毁组件
                //appear//首页渲染也有动画效果
                //正在动画时调用 即entering exiting
                addEndListener={(node, done) => {
                    console.log(node, done);
                    node.addEventListener("transitionend", () => {
                        console.log("动画结束");
                    }, { once: true })
                }}
            >
                {state => {
                    console.log(inProp, state);
                    return (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            I'm a fade Transition!
                        </div>
                    )
                }}
            </Transition>
            <button onClick={() => setInProp(!inProp)}>
                ClicK
      </button>
        </div>
    )
}
