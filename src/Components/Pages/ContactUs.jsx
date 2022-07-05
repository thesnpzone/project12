import axios from 'axios'
import React, { Component } from 'react'
import Button from '../Button'
import Testimonials from '../Testimonials'

export default class ContactUs extends Component {



  render() {
    return (
      <>



        <section className="section_contect_one">

          <div class="container">

            <div class="row">

              <div className="col-lg-12 text-center py-5">

                <h1 className='Contect_Section_one_heading_one'>{this.props.Contect_Section_one_heading_one}</h1>


              </div>

            </div>

          </div>

        </section>


        <section className="section_contect_two">

          <div class="container">

            <div class="row">

              <div className="col-lg-12 mt-5 py-5 ">

                <h1 style={{ fontWeight: "700" }}>{this.props.Contect_Section_two_text_one}</h1>

                <p className='Contect_Section_two_para_two'>{this.props.Contect_Section_two_para_one}</p>

              </div>

            </div>

          </div>

        </section>

        <section className="Contect_Section_three">

          <div class="container">

            <div class="row">

              <div className="col-lg-6 py-5">

                <h1> {this.props.Contect_Section_three_para_one} </h1>
                <br />
                <br />
                <h1> {this.props.Contect_Section_three_para_two} </h1>
                <br />
                <br />
                <h1> {this.props.Contect_Section_three_para_three} </h1>


              </div>


              <div className="col-lg-6 py-5">

                <form>


                  <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="name" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>

                  <Button btn_text="Submit" />
                </form>

              </div>


            </div>

          </div>

        </section>


      

      </>
    )
  }
}
