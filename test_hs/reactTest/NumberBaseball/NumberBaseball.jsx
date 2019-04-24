const React = require("react");
const { Compoment } = React;

// import React, { Compoment } from "react";

function getNumbers() {
    //숫자 4개를 랜덤하게 겹치지 않게 뽑는 함수
}


class NumberBaseball extends Compoment {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: []
    };

    onSubmitForm = () => {
        e.preventDefault();
    };

    onChangeInput = () => {};


    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input
                        value={this.state.value}
                        onChange={this.onChangeInput}
                    />
                    {/* <input maxLength={4} defaultValue={this.state.value} /> */}
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {["like", "like", "like", "like", "like"].map(() => {
                        return <li>like</li>;
                    })}
                </ul>
            </>
        );
    }

}
module.exports = NumberBaseball;
