import React, { Component } from 'react'
import Button from '../Button'
// import CardThree from '../CardThree'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";



// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";
import axios from 'axios';
import Testimonials from '../Testimonials';


export default class Rooms extends Component {

  state = {

    data: [],
    dataone: [],

  };

  componentDidMount() {

    axios.get("https://snpzone-api.herokuapp.com/project/16").then((res) => {

      // console.log(res);

      this.setState(

        {
          data: res.data[2].Room_Page[0].Room_Section_three,
          dataone: res.data[2].Room_Page[0].Room_Section_three[0].Room_section_three_img,
        }, () => {
          console.log(this.state.dataone);
        }

      )

    })

  }


  render() {
    return (
      <>

        <section className="section_Room_one">

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


        <section className="Room_section_two">


          <div class="container my-5">

            <div class="row">

              <div className="col-lg-12 text-center">

                <h1 className='Room_section_two_text'>{this.props.Room_section_two_text}</h1>

                <p className='Room_section_two_text_para'>{this.props.Room_section_two_text_para}</p>

              </div>





            </div>

          </div>

        </section>



        <section className="Room_section_three">


          <div class="container">

            <div class="row">

              {this.state.data.map((val) => {

                return (

                  <div className="col-lg-12 my-5">


                    <div class="card" >


                      <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                          shadow: true,
                          slideShadows: true,
                          shadowOffset: 20,
                          shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[Autoplay, EffectCube, Pagination]}
                        autoplay={{
                          delay: 2500,

                        }}
                        loop={true}
                        className="mySwiper"
                      >

                        {val.Room_section_three_img.map((e) => {

                          return (

                            <SwiperSlide>
                              <img className="img-fluid" src={e.Room_section_three_img} />
                            </SwiperSlide>

                          )
                        })}




                      </Swiper>

                      <div class="card-body text-center" style={{ padding: "0" }}>
                        <h1 class="card-title Room_Section_three">{val.Room_section_figcaption_one}</h1>

                        <div className="Room_Section_three_border p-5">

                          <div className="d-flex justify-content-between">


                            <ul className='text-left ul'>
                              <h3 className='h3ressize'>   <li className='li' data-icon="➕">{val.Room_section_text_two}</li></h3>
                            </ul>

                            <h3><Button btn_text={val.Room_section_text_one} /></h3>

                          </div>
                        </div>

                      </div>
                    </div>

                  </div>


                )



              })}




            </div>

          </div>


        </section>





      </>
    )
  }
}
