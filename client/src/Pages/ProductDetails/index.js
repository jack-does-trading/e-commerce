import ProductZoom from "../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import { Button } from "@mui/material";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {

    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);
    const isActive = (index) => {
        setActiveSize(index);
    }

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <div className="productImage"><ProductZoom /></div>
                        </div>
                        <div className="col-md-7 pl-5 pr-5">
                            <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light mr-2">Brands : </span>
                                        <span>Welch's</span>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                        <span className="text-light ml-2 cursor">1 Review</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex info mb-3">
                                <span className="old-price">$20.00</span>
                                <span className="netPrice text-danger ml-2">$14.00</span>
                            </div>

                            <span className="badge badge-success">IN STOCK</span>
                            <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                                Class aptent taciti sociosqu ad litora torquentVivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                                Class aptent taciti sociosqu ad litora torquent</p>

                            <div className="productSize d-flex align-items-center">
                                <span>Size / Weight:</span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>50g</a></li><li className="list-inline-item">
                                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>100g</a></li><li className="list-inline-item">
                                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>200g</a></li><li className="list-inline-item">
                                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>300g</a></li><li className="list-inline-item">
                                        <a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>500g</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <QuantityBox />
                                <Button className="btn-blue btn-lg btn-big btn-round"><LuShoppingCart /> &nbsp; Add To Cart</Button>
                                <Tooltip title="Add to Wishlist" placement="top-end">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-4"><FaRegHeart /></Button>
                                </Tooltip>
                                <Tooltip title="Add to Compare" placement="top-end">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-4"><MdCompareArrows /></Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => { setActiveTabs(0) }}>Description</Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => { setActiveTabs(1) }}>Additional Info</Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => { setActiveTabs(2) }}>Reviews</Button>
                                </li>
                            </ul>
                            <br />

                            {
                                activeTabs === 0 &&
                                <div className="tabContent">
                                    <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
                                        Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.</p>
                                </div>

                            }
                            {
                                activeTabs === 1 &&
                                <div className="tabContent">
                                    <table class="woocommerce-product-attributes shop_attributes">
                                        <tbody><tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_brands">
                                            <th class="woocommerce-product-attributes-item__label">Brands</th>
                                            <td class="woocommerce-product-attributes-item__value"><p>Welch's</p>
                                            </td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            }
                            {
                                activeTabs === 2 &&
                                <div id="comments">
                                    <h2 class="woocommerce-Reviews-title">
                                        1 review for <span>All Natural Italian-Style Chicken Meatballs</span>		</h2>

                                    <ol class="commentlist">
                                        <li class="review byuser comment-author-bacola bypostauthor even thread-even depth-1" id="li-comment-66">

                                            <div id="comment-66" class="comment_container">

                                                
                                                <div class="comment-text">

                                                    <div class="star-rating" role="img" aria-label="Rated 4 out of 5"><span style={{width:'80%'}}>Rated <strong class="rating">4</strong> out of 5</span></div>
                                                    <p class="meta">
                                                        <strong class="woocommerce-review__author">admin </strong>
                                                        <span class="woocommerce-review__dash"></span> <time class="woocommerce-review__published-date" datetime="2021-05-01T10:07:26+00:00">May 1, 2021</time>
                                                    </p>

                                                    <div class="description"><p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>

                                </div>

                            }
                        </div>
                    </div>

                    <RelatedProducts title="Related Products"/>
                    <RelatedProducts title="Recently Viewed Products"/>
                </div>
            </section>
        </>
    )
}
export default ProductDetails;