import { Button } from "@mui/material";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import { IoMailOutline } from "react-icons/io5";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import newsLetterImage from "../../assets/images/newsletter.png"
import Footer from "../../Components/Footer";


const Home = () => {
    return (
        <>
            <HomeBanner />
            <HomeCat />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                            <div className="banner">
                                <img src={banner1} className="cursor w-100" />
                            </div>
                            <div className="banner">
                                <img src={banner2} className="cursor w-100 mt-4" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75"><h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">do not miss the currrent offers until the end of the month</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
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


                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75"><h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">new products with updated stocks</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>
                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner">
                                    <img src={banner3} className="cursor w-100" />
                                </div>
                                <div className="banner">
                                    <img src={banner4} className="cursor w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">20% discount on your first order</p>
                            <h3 className="text-white">Join the newsletter and get...</h3>
                            <p className="text-light">Join our email subscription now to get updates<br/> on promotion and coupons.</p>

                            <form>
                                <IoMailOutline/>
                                <input type="text" placeholder="Your email address"/>
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={newsLetterImage}/>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default Home;