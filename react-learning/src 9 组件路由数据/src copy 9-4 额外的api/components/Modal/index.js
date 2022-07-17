import React from 'react';
import "./index.css";

export default function Modal(props) {
    const defaultProps = {
        bg: "rgba(0,0,0,.5)"
    };
    var datas = Object.assign({}, defaultProps, props);
    if (!datas.show)
        return null;
    return (
        <div onClick={e=>{
            //防止冒泡
            if(e.target.className=="modal"){
                datas.onClose();
            }
        }} className="modal" style={{
            background: datas.bg
        }}>

            <div className="modal-center">
                {datas.children}
            </div>
        </div>
    )
}
