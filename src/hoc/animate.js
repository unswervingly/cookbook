import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'

export const animate = (WrapperComponent) => {
    return class extends PureComponent {
        render() {
            const SIR = 'animate__slideInRight'
            const SIL = 'animate__slideInLeft'
            const SOR = 'animate__slideOutRight'
            const SOL = 'animate__slideOutLeft'

            let enterActive = '';
            let exitActive = '';
            
            // console.log(this.props);
            const {match} = this.props;
            let pathname = this.props.location.pathname

            let state = this.props.location.state
            let from = state && state.from


            switch (true) {
                case from === '/home':
                case from === '/list' && pathname === '/detail':
                    enterActive=SIR
                    exitActive=SOL
                    break;
                case from === '/list' && pathname === '/home':
                case from === '/detail' && pathname === '/list':
                case from === '/detail' && pathname === '/home':
                    enterActive=SIL
                    exitActive=SOR
                    break;
                default:
                    break;
            }
            return (
                <CSSTransition
                    in={!!match}
                    timeout={1000}
                    classNames={{
                        enter: 'animate__animated',
                        enterActive,
                        exit: 'animate__animated',
                        exitActive,
                    }}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <WrapperComponent {...this.props}/>
                </CSSTransition>
            )
        }
    }
}

