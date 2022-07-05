import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

export default class Testimonials extends Component {

    state = {
        data: [],
    }

    componentDidMount() {

        axios.get("https://snpzone-api.herokuapp.com/project/16").then((res) => {



            this.setState(
                {

                    data: res.data[4].Testimonials_section

                }, () => { console.log(this.state.data); }
            )

        })

    }

    render() {

        return (

            <div class="container">

                <div class="row">

                        <div className="col-lg-12 text-center pt-5 mt-5 ">

                            <h1>Testimonials</h1>
                            
                        </div>


                    <div className="col-lg-12">


                        <Carousel
                            showArrows={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            autoPlay={true}
                            interval={2500}
                            swipeable={true}
                        >

                            {this.state.data.map((val) => {

                                return (

                                    <div>

                                        <div className="myCarousel pt-5 ">

                                            <p>
                                                {val.Testimonials_section_text_one}
                                            </p>
                                            <h3 className="pt-5">{val.Testimonials_section_text_two}</h3>
                                        </div>
                                    </div>

                                )

                            })}






                        </Carousel>

                    </div>

                </div>

            </div>

        );
    }
}