import React, {Component} from "react";
import Slider from 'react-slick';
import './mainslider.css';

export default class MainSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false
        };
        return (
            <div className="container p-0 mainSlider">
                <Slider {...settings}>
                    <img src="/img/slider-img/1.png" alt="img"/>
                    <img src="/img/slider-img/2.png" alt="img"/>
                    <img src="/img/slider-img/3.png" alt="img"/>
                    <img src="/img/slider-img/4.png" alt="img"/>
                    <img src="/img/slider-img/1.png" alt="img"/>
                    <img src="/img/slider-img/2.png" alt="img"/>
                    <img src="/img/slider-img/3.png" alt="img"/>
                    <img src="/img/slider-img/4.png" alt="img"/>
                </Slider>
            </div>
        );
    }
}