import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="py-3 px-1">
                    <div className="display-4 text-center mb-0 container px-1 heading">
                       Papers<span className="text-primary">Pro</span>
                    </div>
            </div>
        )
    }
}
