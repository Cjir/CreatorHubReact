import React from 'react';
import { Button } from 'reactstrap';

function Footer(props) {
    return (
        <React.Fragment>
            <footer className="site-footer mt-3 pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col text-left">
                            <ul className="list-unstyled">
                                <h5>Getting Started</h5>
                                <li className="list"><a href="/">Your Space</a></li>
                                <li className="list"><a href="/">Stating A Blog</a></li>
                                <li className="list"><a href="/">Maing Connections</a></li>
                                <li className="list"><a href="/">Posting Content</a></li>
                            </ul>
                        </div>

                        <div className="col text-left">
                            <ul className="list-unstyled">
                                <h5>How To</h5>
                                <li className="list"><a href="/">Creative Brief</a></li>
                                <li className="list"><a href="/">Establish An Identity</a></li>
                                <li className="list"><a href="/">Build Your Space</a></li>
                                <li className="list"><a href="/">Manage Your Work Flow</a></li>
                            </ul>
                        </div>

                        <div className="col text-left">
                            <ul className="list-unstyled">
                                <h5>About</h5>
                                <li className="list"><a href="/">CareerHub,Inc</a></li>
                                <li className="list"><a href="/">Policies</a></li>
                                <li className="list"><a href="/">Careers</a></li>
                                <li className="list"><a href="/">Media</a></li>
                            </ul>
                        </div>

                        <div className="col text-left">
                            <ul className="list-unstyled">
                                <h5>Help</h5>
                                <li className="list"><a href="/">Contact Us</a></li>
                                <li className="list"><a href="/">Forum</a></li>
                            </ul>

                            <div className="app-link">

                                <Button outline className="btn" size="small">
                                    <img src="./assets/images/creatorlogo.png" alt="creatorhub button" width="25" />
                                </Button>

                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className="btn btn-md btn-social-icon" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-md btn-social-icon" href="http://facebook.com/"><i
                                            className="fa fa-facebook-square"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-md btn-social-icon" href="http://twitter.com/"><i
                                            className="fa fa-twitter-square"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-md btn-social-icon" href="http://youtube.com/"><i className="fa fa-youtube-play"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;