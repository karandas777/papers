import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="bg-light py-2 px-1 shadow-sm fixed-top w-100">
                    <div className="h2 mb-0 container heading">
                    <span className="text-primary">P</span>apers
                    </div>
            </div>
        )
    }
}
