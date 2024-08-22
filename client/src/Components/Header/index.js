import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'

import CountryDropdown from '../CountryDropdown';
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigations';
import { useContext } from 'react';
import { MyContext } from '../../App';


const Header = () => {

    const context = useContext(MyContext);

    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-beige">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center ">
                            Due to <b>large amout of orders</b> ,your order may face a delay in delivery.
                        </p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src='https://www.shutterstock.com/shutterstock/photos/2288900053/display_1500/stock-vector-modern-logo-vegetable-in-shopping-cart-for-grocery-delivery-logo-design-vector-2288900053.jpg' alt='Logo'/></Link>
                            </div>

                            <div className="col-sm-10 d-flex align-items-center part2">
                                {
                                    context.countryList.length!==0 && <CountryDropdown />
                                }

                                <SearchBox/>

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    {
                                        context.isLogin !== true ? <Link to='/signIn'><Button className='btn-blue btn-lg btn-big btn-round mr-3'>Sign In</Button></Link> :
                                        <Button className='circle mr-3'><FiUser/></Button>
                                    }
                                    
                                
                                <div className='ml-auto cartTab d-flex align-items-center'>
                                    <span className='price'>$3.04</span>
                                    <div className='position-relative ml-2'>
                                    <Link to='/cart'><Button className='circle'><IoBagOutline/></Button></Link>
                                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>

                <Navigation/>
                
            </div>
        </>
    )
}

export default Header;