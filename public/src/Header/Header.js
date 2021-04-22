import React, { Component } from "react";
import Quotation from '../Quotation/Quotation';
import {FaCaretDown} from "react-icons/fa";
import './header.css';


export default class Header extends Component {
    render() {
        return (
            <header>
                    <div className="container-fluid">
                    <div className="row quotation">
                        <div className="marquee">
                            <Quotation data_card_info={this.props.data_quotation}/>
                        </div>
                    </div>
                    </div>
                    <div className="container horizon p-1">
                    <div className="row">
                        <div className="col-6">
                        <nav>
                            <ul class="topmenu">
                                <img className="menu-left-logo" src="img/header-logo.svg" alt="logo-header"/>
                                <div class="vertical-line"></div>
                                <a className="what-we-do" href="https://google.com"><img src="img/what-we-do.svg" alt="logo"/></a>
                                <li><a href="https://google.com">Trade<FaCaretDown /></a></li>
                                <li><a href="https://google.com">Markets</a></li>
                                <li><a href="https://google.com">Finance</a></li>
                                <li><a href="https://google.com">News<FaCaretDown /></a></li>
                            </ul>
                        </nav>
                        </div>
                        <div className="menu-right col-6 pl-5 pr-0 m-0">
                               <ul className="menu-right_items float-right">
                                    <button className="menu-right_button">Log In</button>
                                    <button className="menu-right_button">Register</button>
                                    <li><a href="https://google.com"><img src="img/svg/app-icon.svg" alt="app-icon"/></a></li>
                                    <li><a href="https://google.com"><img src="img/svg/man-icon.svg" alt="app-icon"/></a></li>
                                    <li><a href="https://google.com"><img src="img/svg/settings-icon.svg" alt="app-icon"/></a></li>
                                    <li><a href="https://google.com"><img src="img/svg/questions-icon.svg" alt="app-icon"/></a></li>
                                    <li><a href="https://google.com"><img src="img/svg/mail-icon.svg" alt="app-icon"/></a></li>
                                    <li><select className="language" size="1">
                                        <option className="language_option" value="1">EN</option>
                                        <option className="language_option" value="2">RU</option>
                                        </select>
                                    </li>
                                    <li><a href="https://google.com"><img src="img/svg/gear.svg" alt="app-icon"/></a></li>
                               </ul> 
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}