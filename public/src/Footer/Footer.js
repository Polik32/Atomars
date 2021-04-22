import React, {Component} from "react";
/*import { NavLink } from "react-router-dom";*/
import {FaTelegram, FaInstagram, FaFacebook, FaViber} from "react-icons/fa";
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container p-0">
                    <div className="row m-0">
                        <h1 className="footer-title">Start trading now</h1>
                    </div>
                    <div className="row m-0">
                        <div className="buttons col-12">
                            <button type="submit" className="footer_button">Trade Now</button>
                            <button type="submit" className="footer_button_second">Register Now</button>
                        </div>
                    </div>
                    <div className="row m-0 footer_href">
                        <div className="footer-info">
                            <ul>
                                <li>
                                    <h5>About</h5>
                                </li>
                                <li>Atomars.io</li>
                                <li>Atomars News</li>
                                <li>Careers</li>
                                <li>User Agreement</li>
                                <li>Free</li>
                                <li>VIP discound</li>
                                <li>LOGO download</li>
                                <li>100% Collateral</li>
                                <li>GT user privileges</li>
                                <li>About USDG</li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <ul>
                                <li>
                                    <h5>Product</h5>
                                </li>
                                <li>Atomars.io</li>
                                <li>Atomars News</li>
                                <li>Careers</li>
                                <li>User Agreement</li>
                                <li>Free</li>
                                <li>VIP discound</li>
                                <li>LOGO download</li>
                                <li>100% Collateral</li>
                                <li>GT user privileges</li>
                                <li>About USDG</li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <ul>
                                <li>
                                    <h5>Services</h5>
                                </li>
                                <li>Atomars.io</li>
                                <li>Atomars News</li>
                                <li>Careers</li>
                                <li>User Agreement</li>
                                <li>Free</li>
                                <li>VIP discound</li>
                                <li>LOGO download</li>
                                <li>100% Collateral</li>
                                <li>GT user privileges</li>
                                <li>About USDG</li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <ul>
                                <li>
                                    <h5>Help</h5>
                                </li>
                                <li>Atomars.io</li>
                                <li>Atomars News</li>
                                <li>Careers</li>
                                <li>User Agreement</li>
                                <li>Free</li>
                                <li>VIP discound</li>
                                <li>LOGO download</li>
                                <li>100% Collateral</li>
                                <li>GT user privileges</li>
                                <li>About USDG</li>
                            </ul>
                        </div>
                        <div className="footer-contact-us footer-info">
                            <h5>Contact us</h5>
                            <p>Email us:<a className="footer-contact-us_mail" href="mailto:email@gmail.com">email@gmail.com</a>
                            </p>
                            <p className="footer-contact-us_bussiness-p">Bussines:<a className="footer-contact-us_bussiness" href="mailto:email@gmail.com">email@gmail.com</a>
                            </p>
                            <div className="social-icons">
                                <span>
                                    <a className="fab foot" href="http://telegram.com"><FaTelegram/></a>
                                </span>
                                <span>
                                    <a className="fab foot" href="http://instagram.com"><FaInstagram/></a>
                                </span>
                                <span>
                                    <a className="fab foot" href="http://telegram.com"><FaTelegram/></a>
                                </span>
                                <span>
                                    <a className="fab foot" href="http://facebook.com"><FaFacebook/></a>
                                </span>
                                <span>
                                    <a className="fab foot" href="http://viber.com"><FaViber/></a>
                                </span>
                            </div>
                            <div className="sel">
                                <select className="footer-language" size="1">
                                    <option className="footer-language_option" value="1">English</option>
                                    <option className="footer-language_option" value="2">Russian</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer-copy">&copy; 2013-2021 Gate Technology Incorporated. All Rights Reserved.</p>
            </footer>
        );
    }
}