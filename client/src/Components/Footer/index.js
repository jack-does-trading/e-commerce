import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt /></span>
                        <span className="ml-2">Everyday fresh products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery /></span>
                        <span className="ml-2">Free delivery for orders over $70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine /></span>
                        <span className="ml-2">Daily mega discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><LuShirt /></span>
                        <span className="ml-2">Best prices on the market</span>
                    </div>
                </div>

                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>FRUITS & VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasoning</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sproouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Vegetables</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Patty Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>BREAKFAST & DAIRY</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasoning</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sproouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Vegetables</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Patty Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>MEAT & SEAFOOD</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasoning</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sproouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Vegetables</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Patty Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>BEVERAGES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasoning</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sproouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Vegetables</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Patty Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>BREADS & BAKERY</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasoning</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sproouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Vegetables</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Patty Trays</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright mt-3 pb-3 pt-3 d-flex">
                    <p className="mb-0">Copyright 2024 © Bhavyadeep Creations. All Rights Reserved. Powered by Mern Stack.</p>
                    <ul className="list list-inline ml-auto mb-0 socials">
                        <li className="list-inline-item">
                            <Link to="#" ><FaFacebook /></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#" ><FaSquareXTwitter /></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#" ><PiInstagramLogoFill /></Link>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer;