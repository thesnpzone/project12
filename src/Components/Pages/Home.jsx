import axios from 'axios';
import React, { Component } from 'react'
import Button from '../Button'
import CardOne from '../CardOne'
import Footer from '../Footer';
import Testimonials from '../Testimonials';

export default class Home extends Component {

    state = {

        data: [],

    };

    componentDidMount() {

        axios.get("https://snpzone-api.herokuapp.com/project/16").then((res) => {

            // console.log(res);

            this.setState(

                {
                    data: res.data[0].Home_Page[0].Home_section_two,
                }, () => {
                    console.log(this.state.data);
                }

            )

        })

    }


    render() {
        return (
            <>


                <section className="section_Home_one">

                    <div class="container">

                        <div class="row" style={{ height: "100vh" }}>

                            <div className="col-lg-6 d-flex align-items-center">

                                <div className="">


                                    <h3>{this.props.Home_section_one_text_one}</h3>
                                    <h1 className='Home_section_one_text_two'>{this.props.Home_section_one_text_two}</h1>
                                    <h2>{this.props.Home_section_one_text_three}</h2>

                                    <br />

                                    <p className='Home_section_one_text_para_one'>{this.props.Home_section_one_text_para_one}</p>

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


                <div className="text-center my-5">

                    <p className='Home_section_one_text_para_one'>{this.props.Home_section_one_text_para_two}</p>

                </div>

                <section className="section_Home_two">

                    <div class="container">

                        <div class="row">

                            <div className="col-lg-12">

                                {this.state.data.map((val) => {


                                    return <CardOne

                                        key={val.id}

                                        Home_section_two_text_one={val.Home_section_two_text_one}

                                        Home_section_two_text_para_one={val.Home_section_two_text_para_one}

                                        Home_secion_two_img_one={val.Home_secion_two_img_one}

                                    />

                                })}

                            </div>

                        </div>


                    </div>

                </section>





        

            </>
        )
    }
}
