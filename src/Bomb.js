import React, {Component} from "react";

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    render() {
        const message = this.state.secondsLeft == 0
            ? <p>Boom!</p>
            : <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        return message
    }
}
