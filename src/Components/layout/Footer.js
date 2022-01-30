import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer Starts --> */}
            <div className="container-fluid bg-dark px-0">
                <a href="#pageTop" className="btn btn-dark btn-block mb-5">Back to Top</a>
                <div className="container">
                    <div className="row text-white mb-5">
                        <div className="col-md-3">
                            <h5>Get to know us</h5>
                            <a href="#" className="text-white">About</a> <br />
                            <a href="#" className="text-white">Careers</a> <br />
                            <a href="#" className="text-white">Press Release</a> <br />
                            <a href="#" className="text-white">Investment</a> <br />
                            <a href="#" className="text-white">Offers</a> <br />
                        </div>
                        <div className="col-md-3">
                            <h5>Connect With Us</h5>
                            <a href="#" className="text-white">Facebook</a> <br />
                            <a href="#" className="text-white">Twitter</a> <br />
                            <a href="#" className="text-white">Instagram</a> <br />
                        </div>
                        <div className="col-md-3">
                            <h5>Make Money With Us</h5>
                            <a href="#" className="text-white">Sell on Amazon</a> <br />
                            <a href="#" className="text-white">Affiliate Marketing</a> <br />
                            <a href="#" className="text-white">Fullfilment Center</a> <br />
                            <a href="#" className="text-white">Advertise Your Product</a> <br />
                            <a href="#" className="text-white">Amazon Pay</a> <br />
                        </div>
                        <div className="col-md-3">
                            <h5>Let Us Help You</h5>
                            <a href="#" className="text-white">COVID 19</a> <br />
                            <a href="#" className="text-white">Your Account</a> <br />
                            <a href="#" className="text-white">Returns</a> <br />
                            <a href="#" className="text-white">Funding</a> <br />
                            <a href="#" className="text-white">Help</a> <br />
                        </div>
                    </div>
                </div>

                <div className="dropdown-divider mt-3"></div>

                <div className="row mt-3 mx-0 px-0">
                    <div className="col-md-12 text-center">
                        <img src="assets/img/amazon_logo_white.png" height="30" width="100" alt="amazon logo white footer" />
                    </div>
                </div>


                {/* <!-- Sub footer starts --> */}
                <div className="py-3 mt-3 shadow-lg" style={{ backgroundColor: "#131a22", fontSize: "12px;" }}>
                    <div className="container">

                        <div className="row text-white">

                            <div className="col-md-3">
                                <p>Get to know us</p>
                                <a href="#" className="text-white">About</a> <br />
                                <a href="#" className="text-white">Careers</a> <br />
                                <a href="#" className="text-white">Press Release</a> <br />
                                <a href="#" className="text-white">Investment</a> <br />
                                <a href="#" className="text-white">Offers</a> <br />
                            </div>

                            <div className="col-md-3">
                                <p>Connect With Us</p>
                                <a href="#" className="text-white">Facebook</a> <br />
                                <a href="#" className="text-white">Twitter</a> <br />
                                <a href="#" className="text-white">Instagram</a> <br />
                            </div>

                            <div className="col-md-3">
                                <p>Make Money With Us</p>
                                <a href="#" className="text-white">Sell on Amazon</a> <br />
                                <a href="#" className="text-white">Affiliate Marketing</a> <br />
                                <a href="#" className="text-white">Fullfilment Center</a> <br />
                                <a href="#" className="text-white">Advertise Your Product</a> <br />
                                <a href="#" className="text-white">Amazon Pay</a> <br />
                            </div>

                            <div className="col-md-3">
                                <p>Let Us Help You</p>
                                <a href="#" className="text-white">COVID 19</a> <br />
                                <a href="#" className="text-white">Your Account</a> <br />
                                <a href="#" className="text-white">Returns</a> <br />
                                <a href="#" className="text-white">Funding</a> <br />
                                <a href="#" className="text-white">Help</a> <br />
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-12 text-center text-white">
                                <p>
                                    <i className="far fa-copyright"></i> 1996-2020, Amazon.com Inc.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
                integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
                integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
                crossorigin="anonymous"></script>
            <script src="js/bootstrap-drawer.min.js"></script>
            <script src="js/custom.js"></script>
        </div>
    );
}

export default Footer;
