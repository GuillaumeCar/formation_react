import React, { Component } from "react";
import Button from "./components/ui/Button/Button";
import { API_URI } from "./config/config";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { memes: [], images: [] };
    }

    componentDidMount() {
        const memesRequest = fetch(API_URI + "/memes").then((res) =>
            res.json()
        );

        const imagesRequest = fetch(API_URI + "/images").then((res) =>
            res.json()
        );

        Promise.all([memesRequest, imagesRequest]).then((res) => {
            this.setState({ memes: res[0], images: res[1] });
        });
    }

    componentDidUpdate(oldProps, oldState) {
        console.log("---", oldState, this.state);
    }

    render() {
        return <div className="App">{JSON.stringify(this.state)}</div>;
    }
}

export default App;
