import React, { Component } from "react";
import Button from "./components/ui/Button/Button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1, title: "titre" };
    }

    componentDidUpdate(oldProps, oldState) {
        console.log("---", oldState, this.state);
    }

    render() {
        return (
            <div className="App">
                Valeur du compteur : {this.state.count}
                <Button
                    onButtonClick={() => {
                        this.setState({ count: this.state.count + 1 });
                    }}
                    bgColor="skyblue"
                >
                    Add
                </Button>
                <Button
                    onButtonClick={() => {
                        this.setState({ count: this.state.count - 1 });
                    }}
                    bgColor="skyblue"
                >
                    Substract
                </Button>
            </div>
        );
    }
}

export default App;
