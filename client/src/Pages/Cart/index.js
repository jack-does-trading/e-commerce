import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { BsCartCheckFill } from "react-icons/bs";


const Cart = () => {
    return (
        <>
            <section className="section cartPage">
                <div className="container">
                    <h2 className="hd mb-1">Your Cart</h2>
                    <p>There are <b className="text-red">3</b> in your cart</p>

                    <div className="row">
                        <div className="col-md-9 pr-5">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="40%" className="d-flex align-items-center justify-content-center w-100">Product</th>
                                            <th width="15%">Price</th>
                                            <th width="20%"className="d-flex align-items-center justify-content-center w-100">Quantitiy</th>
                                            <th width="15%" className="d-flex align-items-center justify-content-center w-100">Subtotal</th>
                                            <th width="10%">Remove</th>
                                        </tr></thead>
                                        <tbody>
                                    <tr>
                                        <td width="40%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" className="w-100" />
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Angie's Boomchickapop Sweet & Salty Kettle Corn</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td  width="15%">$7.25</td>
                                        <td width="20%"><QuantityBox/></td>
                                        <td width="15%">$7.25</td>
                                        <td width="10%"><span className="remove"><IoIosClose/></span></td>
                                    </tr>
                                    <tr>
                                        <td width="40%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" className="w-100" />
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Angie's Boomchickapop Sweet & Salty Kettle Corn</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td  width="15%">$7.25</td>
                                        <td width="20%"><QuantityBox/></td>
                                        <td width="15%">$7.25</td>
                                        <td width="10%"><span className="remove"><IoIosClose/></span></td>
                                    </tr>
                                    <tr>
                                        <td width="40%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" className="w-100" />
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Angie's Boomchickapop Sweet & Salty Kettle Corn</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td  width="15%">$7.25</td>
                                        <td width="20%"><QuantityBox/></td>
                                        <td width="15%">$7.25</td>
                                        <td width="10%"><span className="remove"><IoIosClose/></span></td>
                                    </tr>
                                    <tr>
                                        <td width="40%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" className="w-100" />
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Angie's Boomchickapop Sweet & Salty Kettle Corn</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td  width="15%">$7.25</td>
                                        <td width="20%"><QuantityBox/></td>
                                        <td width="15%">$7.25</td>
                                        <td width="10%"><span className="remove"><IoIosClose/></span></td>
                                    </tr>
                                    <tr>
                                        <td width="40%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" className="w-100" />
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Angie's Boomchickapop Sweet & Salty Kettle Corn</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td  width="15%">$7.25</td>
                                        <td width="20%"><QuantityBox/></td>
                                        <td width="15%">$7.25</td>
                                        <td width="10%"><span className="remove"><IoIosClose/></span></td>
                                    </tr>
                                </tbody>
                                </table>
                                
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-3 cartDetails">
                                <h4>CART TOTALS</h4>

                                <div className="d-flex align-items-center mb-3">
                                    <span>SUBTOTAL</span>
                                    <span className="ml-auto text-red font-weight-bold">$12.31</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>SHIPPING</span>
                                    <span className="ml-auto"><b>FREE</b></span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Estimate</span>
                                    <span className="ml-auto"><b>United Kingdon</b></span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span>TOTAL</span>
                                    <span className="ml-auto text-red font-weight-bold">$12.31</span>
                                </div>
                                <br/>
                                <Button className='btn-blue btn-lg btn-big '><BsCartCheckFill className="mr-3"/>Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;