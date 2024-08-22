import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating';
import { useContext, useRef } from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { FaHeartCirclePlus } from "react-icons/fa6";
import QuantityBox from '../QuantityBox';
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';
import ProductZoom from '../ProductZoom';
import { BsCartCheckFill } from 'react-icons/bs';

const ProductModal = (props) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

    return (
        <>
            <Dialog open={true} className='productModal' onClose={()=>context.setisOpenProductModal(false)}>

                <Button className="close_" onClick={()=>context.setisOpenProductModal(false)}><IoMdClose /></Button>
                <h4 className='mb-1 font-weight-bold'>All Natural Italian Style Chicken Meatballs</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Brand:</span><span className='ml-2'><b>Welch's</b></span>
                    </div>

                    <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
                </div>

                <hr />
                <div className='row mt-2  prodDetailsModal'>
                    <div className='col-md-5'>
                        <ProductZoom/>
                    </div>
                    <div className='col-md-7'>
                        <div className='d-flex align-items-center info mb-3'>
                            <span className='oldPrice lg mr-2'>$9.35</span>
                            <span className='netPrice text-danger lg'>$7.25</span>
                        </div>

                        <span className='badge bg-success'>IN STOCK</span>
                        <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada
                             tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                        <div className='d-flex align-item-center'>
                            <QuantityBox/>
                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'><BsCartCheckFill className="mr-3"/>Add to Cart</Button>
                        </div>

                        <div className='d-flex align-items-center mt-4 actions'>
                            <Button className='btn-round btn-small' variant='outlined'><FaHeartCirclePlus/> &nbsp; ADD TO WISHLIST</Button>
                            <Button className='btn-round btn-small' variant='outlined'><MdOutlineCompareArrows/> &nbsp; Compare</Button>
                        </div>
                    </div>
                </div>

            </Dialog >
        </>
    )
}

export default ProductModal;