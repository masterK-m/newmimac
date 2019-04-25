import React, {Component} from "react";

class ResponseCheck extends Component {
    state = {
        state: "waiting",
        message: "클릭해서 시작하세요.",
        result : []
    };

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const {state, message, result} = this.state;
        if(state === "waiting") {
            this.setState({
                state : 'ready',
                message : '초록색이 되면 클릭하세요.'
            });

            this.timeout =  setTimeout( () => {
                this.setState({
                    state : 'now',
                    message : '지금클릭'
                });
                this.startTime =  new Date();
            }, Math.floor(Math.random() * 1000 ) + 2000);

        } else if (state === 'ready') {
            clearTimeout(this.timeout);
            this.setState({
                state : 'waiting',
                message : '급하다 급해'
            })

        } else if (state === 'now') {
            this.endTime = new Date();
            this.setState( (prevState) => {
                return {
                    state : 'waiting',
                    message : '클릭해서 시작하세요.',
                    result : [...prevState.result, this.endTime - this.startTime]
                };
            });
        }
    };

    renderAverage = () => {
        const {result} = this.state;
        return result.length === 0 ? null : <div>평균시간 : {result.reduce((a ,c) => a + c) / result.length } ms</div>
    }

    render() {
        const {state, message} = this.state;
        return (
            <>
                <div
                    id="screen"
                    className = {state}
                    onClick={this.onClickScreen}
                >
                    {message}
                </div>
                {
                /*result.length === 0 ? null : <div>평균시간 : {result.reduce((a ,c) => a + c / result.length )}ms</div>                */
                }
                {this.renderAverage()}
            </>
        );
    }
}

export default ResponseCheck;