import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import Slide from '@mui/material/Slide';
import React from "react";
import { MyContext } from "../../App";
import { FilterList } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {

    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);

    const [countryList, setcountryList] = useState([]);
    useEffect(() => {
        setcountryList(context.countryList);
    }, [])

    const context = useContext(MyContext);
    const selectCountry = (index, country) => {
        setselectedTab(index);
        setisOpenModal(false);
        context.setselectedCountry(country);
    }

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        if (keyword !== "") {
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            });
            setcountryList(list);
        } else {
            setcountryList(context.countryList);
        }


    }

    return (
        <>
            <Button className='countryDrop' onClick={() => setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">{context.selectedCountry !== "" ? context.selectedCountry?.length>10
                    ? context.selectedCountry?.substr(0,10)+'...' : context.selectedCountry : 'Select Location'}</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>
            <Dialog TransitionComponent={Transition} open={isOpenModal} onClose={() => setisOpenModal(false)} className="locationModel">
                <h4 className="mb-0">Choose Your Delivery Location</h4>
                <p>Enter you country of residence</p>
                <Button className="close_" onClick={() => setisOpenModal(false)}><IoMdClose /></Button>
                <div className="headerSearch w-100">
                    <input type='text' placeholder='Search your area...' onChange={filterList} />
                    <Button> <IoSearch /></Button>
                </div>

                <ul className="countryList mt-3">
                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (<li key={index}><Button onClick={() => selectCountry(index, item.country)}
                                className={`${selectedTab === index ? 'active' : ''}`}
                            >{item.country}</Button></li>)
                        })
                    }

                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;