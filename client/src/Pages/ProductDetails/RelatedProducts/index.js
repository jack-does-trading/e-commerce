import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation } from 'swiper/modules';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@mui/material";
import ProductItem from "../../../Components/ProductItem";

const RelatedProducts = (props) =>{
    return (
        <>
         <div className="d-flex align-items-center mt-4">
                                <div className="info w-75"><h3 className="mb-0 hd">{props.title}</h3>
                                    <p className="text-light text-sml mb-0">do not miss the currrent offers until the end of the month</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={6}
                                    spaceBetween={0}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>


                                </Swiper>
                            </div>
        </>
    )
}

export default RelatedProducts;