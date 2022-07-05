import Button from './Button.jsx'
import React, { Component } from 'react'

export default class CardOne extends Component {
    render() {
        return (
            <>

                <div class="container mt-5">

                    <div class="row">

                        <div className="col-lg-6 section_Home_one_card_one">

                            <h1>{this.props.Home_section_two_text_one}</h1>





                            <p className="mt-5 mb-5">{this.props.Home_section_two_text_para_one}</p>

                            <Button btn_text="EXPLORE" />




                        </div>

                        <div className="col-lg-6 mt-5 text-center">

                            <img src={this.props.Home_secion_two_img_one} alt="" className='img-fluid' width={400} />

                        </div>

                    </div>

                </div>

            </>
        )
    }
}
