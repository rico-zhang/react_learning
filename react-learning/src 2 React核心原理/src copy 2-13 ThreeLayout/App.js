import React from 'react';
import ThreeLayOut from "./components/TreeLayOut"

export default function App() {
    return (
        <div>
            <ThreeLayOut gap={50} left={<div style={{border:"2px solid red",height:"100%"}}>left</div>}  right={<div style={{border:"2px solid blue",height:"100%"}}>right</div>}>
                <div style={{border:"2px solid #f40",height:"100%"}} >
                    <p>主区域</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat ipsam natus fugit tenetur necessitatibus, optio sapiente dolore veritatis, perspiciatis commodi. Natus ipsa at dolor voluptatum iste? Accusamus, similique harum.
                </div>
            </ThreeLayOut>
        </div>
    )
}
