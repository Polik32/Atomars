import React, {Component} from "react";
import Slider from 'react-slick';
import './tradeAnywhere.css';

export default class SliderTradeAnywhere extends Component {
    render() {
        const settings = {
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    arrows: true,
                  }
                },
                {
                    breakpoint: 540,
                    settings: {
                      arrows: false,
                    }
                  }
            ]
        }
        return (
                <Slider {...settings}>
                    <div className="card-anywhere_content-slider">
                        <img className="card-anywhere_content-img-slider" src="img/trade-anywhere/mobile.svg" alt="mobile"/>
                        <p className="card-anywhere_name-slider">Mobile</p>
                        <p className="card-anywhere_text-slider">All the power of Binance's cryptocurrency exchange, in the palm of your hand. Download the Binance mobile crypto trading app today.</p>
                    </div>
                    <div className="card-anywhere_content-slider">
                        <img className="card-anywhere_content-img-slider" src="img/trade-anywhere/desktop.svg" alt="desktop"/>
                        <p className="card-anywhere_name-slider">Desktop</p>
                        <p className="card-anywhere_text-slider">Powerful crypto trading platform for those who mean business. The Binance crypto trading experience, tailor-made for your Windows or MacOS device.</p>
                    </div>
                    <div className="card-anywhere_content-third-slider">
                        <img className="card-anywhere_content-img-slider" src="img/trade-anywhere/api.svg" alt="api"/>
                        <p className="card-anywhere_name-slider">API</p>
                        <p className="card-anywhere_text-slider">The Binance API is designed to provide an easy and efficient way to integrate your trading application into our platform.</p>
                        <div className="fork text-center-slider">
                        <img className="card-anywhere_img-second-slider" src="img/trade-anywhere/fork.svg" alt="fork"/>
                        <span className="card-anywhere-text-second-slider">Official Binance API Documentation</span>
                        </div>
                    </div>
                </Slider>
        );
    }
}