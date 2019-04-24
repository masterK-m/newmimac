const React = require("react");
const { Component } = React;

const Try = require("./Try");

function getNumbers() {
    //숫자 4개를 랜덤하게 겹치지 않게 뽑는 함수
}

class NumberBaseball extends Component {
    state = {
        result: "",
        value: "",
        answer: getNumbers(),
        tries: []
    };

    onSubmitForm = () => {
        e.preventDefault();
    };

    onChangeInput = () => {};

    fruits = [
        { fruit: "사과", taste: "맛있다1" },
        { fruit: "감", taste: "맛있다2" },
        { fruit: "귤", taste: "맛있다3" },
        { fruit: "배", taste: "맛있다4" },
        { fruit: "딸기", taste: "맛있다5" }
    ];

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
                    {this.fruits.map((v, i) => {
                        return (
                            <Try key={v.fruit + v.taste} value={v} index={i} />
                        );
                    })}
                </ul>
            </>
        );
    }
}

module.exports = NumberBaseball;
