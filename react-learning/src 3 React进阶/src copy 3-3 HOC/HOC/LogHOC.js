import React from 'react'

export default function LogHOC(Comp) {
    return class LogWrapper extends React.Component {

        componentWillMount(){
            console.log(`${Comp.name} 开始挂载`);
        }
        
        componentDidMount(){
            console.log(`${Comp.name}挂载完成`);
        }

        render() {
            return (
                <Comp {...this.props}></Comp>
            )
        }
    }

}
