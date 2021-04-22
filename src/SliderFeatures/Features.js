import React, {Component} from "react";
import Slider from 'react-slick';
import './features.css';

export default class SliderFeatures extends Component {
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
        };
        return (
                <Slider {...settings}>
                    <div className="card-features_content-slider">
                        <img className="card-features_content-img-slider" src="img/features/one.svg" alt="logo"/>
                        <p className="card-features_name-slider">Licensed & Regulated</p>
                        <p className="card-features_text-slider">We are fully regulated, licensed and meet the strictest safety standards by the Japan Financial Services Agency.</p>
                    </div>
                    <div className="card-features_content-slider">
                        <img className="card-features_content-img-slider" src="img/features/two.svg" alt="logo"/>
                        <p className="card-features_name-slider">Safe Storage</p>
                        <p className="card-features_text-slider">We manage digital assets using a combination of cold wallets & Multi-party computation (MPC) technology.</p>
                    </div>
                    <div className="card-features_content-slider">
                        <img className="card-features_content-img-slider" src="img/features/three.svg" alt="logo"/>
                        <p className="card-features_name-slider">Security First</p>
                        <p className="card-features_text-slider">We use the latest technologies to keep your funds safe, and stay ahead of vulnerabilities and exploitation attempts.</p>
                    </div>
                    <div className="card-features_content-slider">
                        <img className="card-features_content-img-slider" src="img/features/four.svg" alt="logo"/>
                        <p className="card-features_name-slider">Fast Withdrawals</p>
                        <p className="card-features_text-slider">Using multi-party computing we are able to offer fast round-the-clock withdrawals while maintaining our rigorous security standards.</p>
                    </div>
                    <div className="card-features_content-slider">
                        <img className="card-features_content-img-slider" src="img/features/five.svg" alt="logo"/>
                        <p className="card-features_name-slider">Fiat Gateway</p>
                        <p className="card-features_text-slider">We accept deposits of major fiat currencies including USD, JPY, EUR, SGD, HKD, and AUD.</p>
                    </div>
                    <div className="card-features_content-slider">
                        <img className="card-features_content-img-slider" src="img/features/six.svg" alt="logo"/>
                        <p className="card-features_name-slider">Fiat Gateway</p>
                        <p className="card-features_text-slider">We accept deposits of major fiat currencies including USD, JPY, EUR, SGD, HKD, and AUD.</p>
                    </div>
                </Slider>
        );
    }
}