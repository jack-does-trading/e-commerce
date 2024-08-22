import React, { useState } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#feefea',
        '#fffceb',
        '#fffcea',
        '#ecffec',
        '#feefea',
        '#fff3eb'
    ])

    return (
        <section className="homeCat">
            <div className="container">
                <h3 className="mb-4 hd">FEATURED CATEGORIES</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={8}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        itemBg?. map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className="item text-center cursor" style={{background:item}}>
                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                                        <h6>Red Apple</h6>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <SwiperSlide>
                        <div className="item">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>

    )
}

export default HomeCat;