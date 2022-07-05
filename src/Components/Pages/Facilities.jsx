import axios from 'axios';
import React, { Component } from 'react'
import Button from '../Button'
import CardTwo from '../CardTwo';
import Testimonials from '../Testimonials';

export default class Facilities extends Component {

    state = {

        data: [],
        dataone: []

    };

    componentDidMount() {

        axios.get("https://snpzone-api.herokuapp.com/project/16").then((res) => {

            // console.log(res);

            this.setState(

                {
                    data: res.data,

                    dataone: res.data[1].Facilities_Page[0].Facilities_section_three

                }, () => {
                    console.log(this.state.dataone);
                }

            )

        })

    }





    render() {
        return (
            <>


                <section className="section_Facilities_one">

                    <div class="container">

                        <div class="row" style={{ height: "100vh" }}>

                            <div className="col-lg-6 d-flex align-items-center">

                                <div className="">


                                    <h3>{this.props.Faciliti_section_one_text_one}</h3>
                                    <h1 className='Home_section_one_text_two'>{this.props.Faciliti_section_one_text_two}</h1>
                                    <h2>{this.props.Faciliti_section_one_text_three}</h2>

                                    <br />

                                    <p className='Home_section_one_text_para_one'>{this.props.Faciliti_section_one_text_para_one}</p>

                                </div>

                            </div>


                            <div className="col-lg-12 d-flex justify-content-center  d-flex align-items-center">

                                <div className="">


                                    <Button btn_text="BOOK NOW" />
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="Facilities_section_two">


                    <div class="container my-5">

                        <div class="row">

                            <div className="col-lg-12 text-center">

                                <h1 className='Home_section_one_text_two'>{this.props.Facilities_section_two_text}</h1>

                                <p className='Home_section_one_text_para_one'>{this.props.Facilities_section_two_text_para}</p>

                            </div>

                            {this.state.dataone.map((val) => {

                                return <CardTwo

                                    key={val.id}

                                    Facilities_section_three_img_one={val.Facilities_section_three_img_one}

                                    Facilities_section_figcaption_one={val.Facilities_section_figcaption_one}

                                />

                            })}


                        </div>

                    </div>

                </section>

         

            </>
        )
    }
}
