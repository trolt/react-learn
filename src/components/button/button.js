import React from 'react';

class MyButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }
    incState() {
        this.setState((prevState) => {
            return { value: prevState.value + 1 };
        });
    }

    decState() {
        this.setState((prevState) => {
            return { value: prevState.value - 1 };
        });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.incState()} >
                    valor {this.state.value}
                </button>
                <button onClick={() => this.decState()} >
                    valor {this.state.value}
                </button>
            </div>
        );
    }
}

export default MyButton;