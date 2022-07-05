import React, { Component } from 'react'

export default class CardTwo extends Component {
    render() {
        return (
            <>

                <div className="col-lg-12 text-center mt-5">

                    <img src={this.props.Facilities_section_three_img_one}  className='img-fluid' alt="" />

                    <div class="container">

                        <div class="row cardtwo_responsive" style={{ position: "relative", bottom: "56px" }}>

                            <div className="col-4"></div>
                            <div className="col-4 figureCaption"> <h1><figcaption>{this.props.Facilities_section_figcaption_one}</figcaption></h1></div>
                            <div className="col-4"></div>

                        </div>

                    </div>

                </div>

            </>
        )
    }
}
