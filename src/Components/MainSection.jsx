import React, { Component } from 'react'


import { HashRouter, Switch, Route } from "react-router-dom";


import axios from 'axios'


import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


import '../../node_modules/bootstrap/dist/js/bootstrap'

// import CSS 

import "./Asset/main.css"

// import components 


import Home from './Pages/Home';


import Facilities from './Pages/Facilities';


import Rooms from './Pages/Rooms';


import ContactUs from './Pages/ContactUs';


import Testimonials from './Testimonials'


import Footer from './Footer';
import Navbar from './Navbar';




export default class MainSection extends Component {

  state = {

    data: [],

  };

  componentDidMount() {

    axios.get("https://snpzone-api.herokuapp.com/project/16").then((res) => {

      // console.log(res);

      this.setState(

        {
          data: res.data,
        }, () => {
          console.log(this.state.data);
        }

      )

    })

  }

  render(props) {

    return (





      <>

        {this.state.data.length > 0 && (


          <>

            <HashRouter>

              <Navbar />

              <Switch>

                {/* Page 1 */}

                <Route exact path="/">

                  <Home

                    Home_section_one_text_one={this.state.data[0].Home_Page[0].Home_section_one.Home_section_one_text_one}

                    Home_section_one_text_two={this.state.data[0].Home_Page[0].Home_section_one.Home_section_one_text_two}

                    Home_section_one_text_three={this.state.data[0].Home_Page[0].Home_section_one.Home_section_one_text_three}

                    Home_section_one_text_para_one={this.state.data[0].Home_Page[0].Home_section_one.Home_section_one_text_para_one}

                    Home_section_one_text_para_two={this.state.data[0].Home_Page[0].Home_section_one.Home_section_one_text_para_two}

                  />

                </Route>

                {/* Page 2 */}

                <Route path="/room">

                  <Rooms

                    Faciliti_section_one_text_one={this.state.data[1].Facilities_Page[0].Facilities_section_one.Faciliti_section_one_text_one}

                    Faciliti_section_one_text_two={this.state.data[1].Facilities_Page[0].Facilities_section_one.Faciliti_section_one_text_two}

                    Faciliti_section_one_text_three={this.state.data[1].Facilities_Page[0].Facilities_section_one.Faciliti_section_one_text_three}

                    Faciliti_section_one_text_para_one={this.state.data[1].Facilities_Page[0].Facilities_section_one.Faciliti_section_one_text_para_one}

                    Room_section_two_text={this.state.data[2].Room_Page[0].Room_Section_two.Room_section_two_text}

                    Room_section_two_text_para={this.state.data[2].Room_Page[0].Room_Section_two.Room_section_two_text_para}

                  />

                </Route>

                {/* Page 3 */}

                <Route path="/facilities">

                  <Facilities

                    Faciliti_section_one_text_one={this.state.data[1].Facilities_Page[0].Facilities_section_one.Faciliti_section_one_text_one}

                    Faciliti_section_one_text_two={this.state.data[1].Facilities_Page[0].Facilities_section_one.Faciliti_section_one_text_two}

                    Faciliti_section_one_text_three={this.state.data[1].Facilities_Page[0].Facilities_section_one.Faciliti_section_one_text_three}

                    Faciliti_section_one_text_para_one={this.state.data[1].Facilities_Page[0].Facilities_section_one.Faciliti_section_one_text_para_one}

                    Facilities_section_two_text={this.state.data[1].Facilities_Page[0].Facilities_section_two.Facilities_section_two_text}

                    Facilities_section_two_text_para={this.state.data[1].Facilities_Page[0].Facilities_section_two.Facilities_section_two_text_para}

                  />

                </Route>

                {/* Page 4 */}

                <Route path="/contactUs">

                  <ContactUs

                    Contect_Section_one_heading_one={this.state.data[3].Contact_Page[0].Contect_Section_one.Contect_Section_one_heading_one}

                    Contect_Section_two_text_one={this.state.data[3].Contact_Page[0].Contect_Section_two.Contect_Section_two_text_one}

                    Contect_Section_two_para_one={this.state.data[3].Contact_Page[0].Contect_Section_two.Contect_Section_two_para_one}

                    Contect_Section_three_para_one={this.state.data[3].Contact_Page[0].Contect_Section_three.Contect_Section_three_para_one}

                    Contect_Section_three_para_two={this.state.data[3].Contact_Page[0].Contect_Section_three.Contect_Section_three_para_two}

                    Contect_Section_three_para_three={this.state.data[3].Contact_Page[0].Contect_Section_three.Contect_Section_three_para_three}

                  />

                </Route>

              </Switch>


            </HashRouter>

            <Testimonials />

            <Footer />

          </>



        )}



      </>
    )

  }
}
