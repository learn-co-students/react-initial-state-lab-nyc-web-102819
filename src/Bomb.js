import React from 'react'

class Bomb extends React.Component {

    constructor (props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    
    render () {
        let boom = () => {
            if (this.state.secondsLeft === 0 ) {
                return "Boom!"
            } else {
                return <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
            }
        }
        return (
            boom()
        )
    }
}

export default Bomb
