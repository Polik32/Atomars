import React, {Component} from "react";
import {VscChevronRight} from "react-icons/vsc";
import MainSlider from '../../Slider/MainSlider';
import Exchange from '../Exchange/Exchange';
import './MainPage.css';

export default class MainPage extends Component {
    render() {
        return (
            <div className="main">
                <div className="container exp p-0">
                    <div className="row m-0">
                        <MainSlider/>
                            <section className="register-and-exchange">
                                <div className="col-6 px-0">
                                    <p className="register-and-exchange_title">Buy, Sell &<br/> Trade Crypto</p>
                                    <p className="register-and-exchange_text">Join the world’s most comprehensive
                                        and secure trading platform. Buy and sell Bitcoin, Ethereum, XRP and many other
                                        cryptocurrencies with fiat or crypto.</p>
                                    <button type="submit" className="register_button">Register</button>
                                </div>
                                <div className="col-6 px-0">
                                    <Exchange/>
                                </div>
                            </section>
                            <div className="container p-0">
                                <div className="row m-0">
                                    <div className="markets">
                                        <div className="markets-titles">
                                            <p className="markets-titles_item-first">Name</p>
                                            <p className="markets-titles_item-second">Last Price</p>
                                            <p className="markets-titles_item-third">Change</p>
                                            <p className="markets-titles_item-fourth">Markets</p>
                                        </div>
                                        <div className="markets_change">
                                            <div className="markets_change-wrapper">
                                                <a href="https://google.com" className="markets_change-item">1h</a>
                                                <a href="https://google.com" className="markets_change-item">4h</a>
                                                <a href="https://google.com" className="markets_change-item">12h</a>
                                                <a href="https://google.com" className="markets_change-item">24h</a>
                                            </div>
                                        </div>
                                        <div className="markets_line"></div>
                                        <div className="markets-items"> 
                                            <div className="markets-items_item">
                                                <img className="markets-items_item-logo" src="img/markets/Ethereum.svg" alt="logo"/>
                                                <p className="markets-items_item-abbreviation">ETH</p>
                                                <p className="markets-items_item-name-Ethereum">Ethereum</p>
                                                <p className="markets-items_item-sum-Ethereum">₽ 1,464.96</p>
                                                <p className="markets-items_item-percent">-2.88%</p>
                                                <img className="markets-items_item-graph" src="img/markets/graph.svg" alt="logo"/>
                                                <button className="markets-items_button">Trade</button>
                                                <div className="markets_line-second"></div>
                                            </div>
                                            <div className="markets-items_item">
                                                <img className="markets-items_item-logo" src="img/markets/Bitcoin.svg" alt="logo"/>
                                                <p className="markets-items_item-abbreviation">BTC</p>
                                                <p className="markets-items_item-name-BTC">Bitcoin</p>
                                                <p className="markets-items_item-sum-BTC">₽ 1,464.96</p>
                                                <p className="markets-items_item-percent">-2.88%</p>
                                                <img className="markets-items_item-graph" src="img/markets/graph.svg" alt="logo"/>
                                                <button className="markets-items_button">Trade</button>
                                                <div className="markets_line-second"></div>
                                            </div>
                                            <div className="markets-items_item">
                                                <img className="markets-items_item-logo" src="img/markets/BNB.svg" alt="logo"/>
                                                <p className="markets-items_item-abbreviation">BNB</p>
                                                <p className="markets-items_item-name-BNB">BNB</p>
                                                <p className="markets-items_item-sum-BNB">₽ 1,464.96</p>
                                                <p className="markets-items_item-percent">-2.88%</p>
                                                <img className="markets-items_item-graph" src="img/markets/graph.svg" alt="logo"/>
                                                <button className="markets-items_button">Trade</button>
                                                <div className="markets_line-second"></div>
                                            </div>
                                            <div className="markets-items_item">
                                                <img className="markets-items_item-logo" src="img/markets/LINK.svg" alt="logo"/>
                                                <p className="markets-items_item-abbreviation">LINK</p>
                                                <p className="markets-items_item-name-LINK">Chainlink</p>
                                                <p className="markets-items_item-sum-LINK">₽ 1,464.96</p>
                                                <p className="markets-items_item-percent">-2.88%</p>
                                                <img className="markets-items_item-graph" src="img/markets/graph.svg" alt="logo"/>
                                                <button className="markets-items_button">Trade</button>
                                                <div className="markets_line-second"></div>
                                            </div>
                                            <div className="markets-items_item">
                                                <img className="markets-items_item-logo" src="img/markets/1-INCH.svg" alt="logo"/>
                                                <p className="markets-items_item-abbreviation">1 INCH</p>
                                                <p className="markets-items_item-name-1-INCH">1 inch</p>
                                                <p className="markets-items_item-sum-1-INCH">₽ 1,464.96</p>
                                                <p className="markets-items_item-percent">-2.88%</p>
                                                <img className="markets-items_item-graph" src="img/markets/graph.svg" alt="logo"/>
                                                <button className="markets-items_button">Trade</button>
                                                <div className="markets_line-second"></div>
                                            </div>
                                        </div>
                                        <div className="markets-more-wrapper">
                                            <a className="markets-more" href="https://google.com">View more markets <VscChevronRight/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container p-0">
                                <div className="row m-0">
                                    <div className="statistics">
                                        <div className="statistics-item">
                                            <p className="statistics-item_money">$60,092,256,99</p>
                                            <p className="statistics-item_info">24 HOUR VOLUME</p>
                                        </div>
                                        <div className="statistics-item">
                                            <p className="statistics-item_money">$600,062,546,52</p>
                                            <p className="statistics-item_info">7 DAY VOLUME</p>
                                        </div>
                                        <div className="statistics-item">
                                            <p className="statistics-item_money">$1,612,812,676</p>
                                            <p className="statistics-item_info">30 DAY VOLUME</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container p-0">
                                <div className="row m-0">
                                <section className="features p-0 col-12">
                                <h1 className="features-title">Features</h1>
                                <div className="features_content">
                                    <div className="card-features_content">
                                        <img className="card-features_content-img" src="img/features/one.svg" alt="logo"/>
                                        <p className="card-features_name">Licensed & Regulated</p>
                                        <p className="card-features_text">We are fully regulated, licensed and meet the strictest safety standards by the Japan Financial Services Agency.</p>
                                    </div>
                                    <div className="card-features_content">
                                        <img className="card-features_content-img" src="img/features/two.svg" alt="logo"/>
                                        <p className="card-features_name">Safe Storage</p>
                                        <p className="card-features_text">We manage digital assets using a combination of cold wallets & Multi-party computation (MPC) technology.</p>
                                    </div>
                                    <div className="card-features_content">
                                        <img className="card-features_content-img" src="img/features/three.svg" alt="logo"/>
                                        <p className="card-features_name">Security First</p>
                                        <p className="card-features_text">We use the latest technologies to keep your funds safe, and stay ahead of vulnerabilities and exploitation attempts.</p>
                                    </div>
                                    <div className="card-features_content">
                                        <img className="card-features_content-img" src="img/features/four.svg" alt="logo"/>
                                        <p className="card-features_name">Fast Withdrawals</p>
                                        <p className="card-features_text">Using multi-party computing we are able to offer fast round-the-clock withdrawals while maintaining our rigorous security standards.</p>
                                    </div>
                                    <div className="card-features_content">
                                        <img className="card-features_content-img" src="img/features/five.svg" alt="logo"/>
                                        <p className="card-features_name">Fiat Gateway</p>
                                        <p className="card-features_text">We accept deposits of major fiat currencies including USD, JPY, EUR, SGD, HKD, and AUD.</p>
                                    </div>
                                    <div className="card-features_content">
                                        <img className="card-features_content-img" src="img/features/six.svg" alt="logo"/>
                                        <p className="card-features_name">Fiat Gateway</p>
                                        <p className="card-features_text">We accept deposits of major fiat currencies including USD, JPY, EUR, SGD, HKD, and AUD.</p>
                                    </div>
                                </div>
                                </section>
                                </div>
                            </div>
                            <div className="container p-0">
                                <div className="row m-0">
                                    <section className="trade-anywhere p-0 col-12">
                                    <h1 className="trade-anywhere-title">Trade. Anywhere.</h1>
                                    <div className="trade-anywhere_content">
                                        <div className="card-anywhere_content">
                                            <img className="card-anywhere_content-img" src="img/trade-anywhere/mobile.svg" alt="mobile"/>
                                            <p className="card-anywhere_name">Mobile</p>
                                            <p className="card-anywhere_text">All the power of Binance's cryptocurrency exchange, in the palm of your hand. Download the Binance mobile crypto trading app today.</p>
                                        </div>
                                        <div className="card-anywhere_content">
                                            <img className="card-anywhere_content-img" src="img/trade-anywhere/desktop.svg" alt="desktop"/>
                                            <p className="card-anywhere_name">Desktop</p>
                                            <p className="card-anywhere_text">Powerful crypto trading platform for those who mean business. The Binance crypto trading experience, tailor-made for your Windows or MacOS device.</p>
                                        </div>
                                        <div className="card-anywhere_content-third m-0">
                                            <img className="card-anywhere_content-img" src="img/trade-anywhere/api.svg" alt="api"/>
                                            <p className="card-anywhere_name">API</p>
                                            <p className="card-anywhere_text">The Binance API is designed to provide an easy and efficient way to integrate your trading application into our platform.</p>
                                            <div className="fork text-center">
                                            <img className="card-anywhere_img-second" src="img/trade-anywhere/fork.svg" alt="fork"/>
                                            <span className="card-anywhere-text-second">Official Binance API Documentation</span>
                                            </div>
                                        </div>
                                    </div>
                                    </section>
                                </div>
                            </div>
                            <div className="container p-0">
                                <div className="row get-in-touch_row">
                                    <section className="get-in-touch p-0 col-12">
                                    <h1 className="get-in-touch-title">Get in touch. Stay in touch.</h1>
                                    <div className="get-in-touch_content p-0">
                                        <div className="card-get-in-touch">
                                            <img className="card-get-in-touch_img-first" src="img/get-in-touch/customer-service.svg" alt="24 / 7 Support"/>
                                            <p className="card_service-name-first">24 / 7 Support</p>
                                            <p className="card_service-text">Got a problem? Just get in touch. Our support team is available 24/7.</p>
                                        </div>
                                        <div className="card-get-in-touch">
                                            <img className="card-get-in-touch_img" src="img/get-in-touch/writing.svg" alt="Binance Blog"/>
                                            <p className="card_service-name">Binance Blog</p>
                                            <p className="card_service-text">News and updates from the world’s leading cryptocurrency exchange.</p>
                                        </div>
                                        <div className="card-get-in-touch">
                                            <img className="card-get-in-touch_img" src="img/get-in-touch/social-care.svg" alt="Community"/>
                                            <p className="card_service-name">Community</p>
                                            <p className="card_service-text">Binance is global. Join the discussion in our worldwide communities.</p>
                                        </div>
                                        <div className="card-get-in-touch m-0">
                                            <img className="card-get-in-touch_img" src="img/get-in-touch/success.svg" alt="Careers"/>
                                            <p className="card_service-name">Careers</p>
                                            <p className="card_service-text">Help build the future of technology. Start your new career at Binance.</p>
                                        </div>
                                    </div>
                                    </section>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}