import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { AiFillGoogleCircle } from "react-icons/ai";


const SignIn = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);
    }, []);

    return (
        <section className="section signInPage">
            <div className="shape-bottom">
                <svg viewBox="0 0 1440 320">
                    <path fill="#fff" fillOpacity="1" d="M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,144C672,139,768,149,864,149.3C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-center">
                        <img src='https://www.shutterstock.com/shutterstock/photos/2288900053/display_1500/stock-vector-modern-logo-vegetable-in-shopping-cart-for-grocery-delivery-logo-design-vector-2288900053.jpg' alt='Logo' />
                    </div>

                    <form className="mt-3">
                        <h2 className="mb-3">Sign In</h2>
                        <div className="form-group">
                            <TextField id="standard-basic" label="Email" required variant="standard" className="w-100" />
                        </div>
                        <div className="form-group">
                            <TextField id="standard-basic" label="Password" type="password" required variant="standard" className="w-100"/>
                        </div>

                        <a className="border-effect cursor txt">Forgot Passpord?</a>
                        <div className="d-flex align-items-center mt-3 mb-3 d-flex">
                        <Button className="btn-blue btn-lg col btn-big w-100 mt-3 mb-3">Sign In</Button>
                        <Link to='/'> <Button className="btn-lg btn-big col ml-3" onClick={()=>context.setisHeaderFooterShow(true)} variant="outlined">Cancel</Button></Link>
                        </div>
                        <p className="txt">Not Registered?<Link to='/signUp' className="border-effect">Sign Up</Link> </p>
                        <h6 className="mt-3 text-center font-weight-bold mt-4">Or continue with social account</h6>

                        <div className="copyright mt-2 pb-3 pt-3 d-flex socials">
                    
                    <ul className="list list-inline mb-0 mx-auto mt-0">
                        <li className="list-inline-item">
                            <Link to="#" ><AiFillGoogleCircle /></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#" ><FaSquareXTwitter /></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#" ><PiInstagramLogoFill /></Link>
                        </li>
                    </ul>
                </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn;