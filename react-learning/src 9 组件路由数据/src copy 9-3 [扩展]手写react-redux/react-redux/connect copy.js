import React from 'react'
import { bindActionCreators } from 'redux'
import ctx from './ctx'


export default function (mapStateToProps, mapDispatchToProps) {
    /**
     * 返回一个高阶组件
     */
    return function (Comp) {
        class Temp extends React.PureComponent {

            static contextType = ctx;


            getEventHandlers(mapDispatchToProps) {
                if (typeof mapDispatchToProps === "function")
                    return mapDispatchToProps(this.store.dispatch, this.props);
                if (typeof mapDispatchToProps === "object") {
                    return bindActionCreators(mapDispatchToProps, this.store.dispatch);
                }
                return {}
            }

            constructor(props, context) {
                super(props);
                this.store = context;
                if (mapStateToProps) {
                    this.state = mapStateToProps(this.store.getState(), this.props);
                    this.unListen = this.store.subscribe(() => {
                        this.setState(mapStateToProps(this.store.getState(), this.props));
                    })
                }
                if (mapDispatchToProps) {
                    this.handlers = this.getEventHandlers(mapDispatchToProps);
                }
            }

            componentWillUnmount() {
                if (this.unListen)
                    this.unListen()
            }

            render() {
                return <Comp {...this.state} {...this.handlers}  {...this.props} />;
            }
        }
        Temp.displayName = Comp.displayName || Comp.name;

        return Temp;
    }
}
