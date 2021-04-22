import React, {Component} from "react";
import Slider from 'react-slick';
import './slidergetintouch.css';

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
                            arrows: true
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
                   <div className="card-get-in-touch-slider">
                        <img className="card-get-in-touch_img-first-slider" src="img/get-in-touch/customer-service.svg" alt="24 / 7 Support"/>
                        <p className="card_service-name-first-slider">24 / 7 Support</p>
                        <p className="card_service-text-slider">Got a problem? Just get in touch. Our support team is available 24/7.</p>
                    </div>
                    <div className="card-get-in-touch-slider">
                        <img className="card-get-in-touch_img-slider" src="img/get-in-touch/writing.svg" alt="Binance Blog"/>
                        <p className="card_service-name-slider">Binance Blog</p>
                        <p className="card_service-text-slider">News and updates from the world’s leading cryptocurrency exchange.</p>
                    </div>
                    <div className="card-get-in-touch-slider">
                        <img className="card-get-in-touch_img-slider" src="img/get-in-touch/social-care.svg" alt="Community"/>
                        <p className="card_service-name-slider">Community</p>
                        <p className="card_service-text-slider">Binance is global. Join the discussion in our worldwide communities.</p>
                    </div>
                    <div className="card-get-in-touch-slider">
                        <img className="card-get-in-touch_img-slider" src="img/get-in-touch/success.svg" alt="Careers"/>
                        <p className="card_service-name-slider">Careers</p>
                        <p className="card_service-text-slider">Help build the future of technology. Start your new career at Binance.</p>
                    </div>
                </Slider>
        );
    }
}