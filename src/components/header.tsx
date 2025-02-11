import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";

const Header = () => {
    return (
        <header>
            <IoMenuOutline />
            <h1>Dashboard</h1>
            <SlRefresh />
        </header>
    )
}

export default Header;