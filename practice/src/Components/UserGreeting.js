import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn && <div> Welcome Shilpy </div>

        // return (
        //     this.state.isLoggedIn ? 
        //     <div>Welcome Shilpy</div> :
        //     <div>Welcome Guest</div>
        // )
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Shilpy</div>
        //     ) : (
        //     <div>Welcome Guest</div>
        //     )

        //message stores the element to be rendered
        // let message

        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Shilpy</div>
        // }else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Shilpy</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default UserGreeting
