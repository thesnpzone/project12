
import React, { Component } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";



// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";
import axios from 'axios';

export default class CardThree extends Component {


    state = {

        data: [],
    
      };
    
      componentDidMount() {
    
        axios.get("https://snpzone-api.herokuapp.com/project/16").then((res) => {
    
          // console.log(res);
    
          this.setState(
    
            {
              data: res.data[2].Room_Page[0].Room_Section_three,
            }, () => {
              console.log(this.state.data);
            }
    
          )
    
        })
    
      }
    

    render() {

        return (


            <>

                <div className="col-lg-12">


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
                            <SwiperSlide>
                                <img className="img-fluid" src="https://snpzone.github.io/snp-images-zone/project16_images/img/img8.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-fluid" src="https://snpzone.github.io/snp-images-zone/project16_images/img/img9.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-fluid" src="https://snpzone.github.io/snp-images-zone/project16_images/img/img10.png" />
                            </SwiperSlide>

                        </Swiper>

                        <div class="card-body text-center" style={{ padding: "0" }}>
                            <h1 class="card-title Room_Section_three">SINGLE ROOM</h1>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>


            </>

        )
    }
}
