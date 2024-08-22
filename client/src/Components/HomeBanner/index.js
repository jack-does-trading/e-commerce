import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };


    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://mbluxury1.s3.amazonaws.com/2024/02/29161611/Luxury-Ads-faqs.jpeg" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://www.singlegrain.com/wp-content/uploads/2023/05/pasted-image-0-60.png" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://cdn.vectorstock.com/i/1000v/47/26/cosmetic-products-realistic-advertisement-poster-vector-19844726.jpg" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/luxury-beauty-product-ads-design-template-2855b69da8556ef443f08bf9ccf7f38b_screen.jpg?ts=1659084138" className="w-100" />
                </div>
            </Slider>
        </div>
        </div>
    )
}

export default HomeBanner;