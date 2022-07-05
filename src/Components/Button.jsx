import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <>

                    <button type="button" class="btn Home_section_button">{this.props.btn_text}</button>

            </>
        )
    }
}
