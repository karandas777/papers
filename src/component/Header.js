import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="bg-light py-2 px-1 shadow-sm fixed-top w-100">
                    <div className="h2 mb-0 container px-1 heading text-right">
                    <img src={require('../assets/logo.png')} className="img-fluid float-left" width="35" alt="logo" />
                       Papers<span className="text-primary">Pro</span>
                    </div>
            </div>
        )
    }
}
