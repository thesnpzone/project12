import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <>

                <nav className={'navbar navbar-expand-md   text-center bg-inverse  scrolling-navbar '} style={{ padding: "0px", backgroundColor: "#0b0c10" }} >

                    <div className="container-fluid" style={{ paddingLeft: "0px" }} >


                        <Link class="nav-link navbar-brand nav-item logo_name" to="/">SNP ZONE</Link>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">

                            <i class="fa fa-bars"></i>

                        </button>

                        <div className="collapse navbar-collapse" id="navbarCollapse">

                            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">

                                <li className="nav-item ">

                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>

                                </li>

                                <li className="nav-item">

                                    <Link className="nav-link" to="/room" >Room</Link>

                                </li>

                                <li className="nav-item">

                                    <Link className="nav-link" to="/facilities">Facilities</Link>

                                </li>

                              

                                <li className="nav-item">

                                    <Link className="nav-link" to="/contactUs">ContactUs</Link>

                                </li>




                            </ul>

                        </div>

                    </div>

                </nav>




            </>
        )
    }
}
