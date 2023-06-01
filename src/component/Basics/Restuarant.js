import React, { useState } from 'react'
import './style.css'
import Menu from './MenuApi.js'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [...new Set(Menu.map((currEle) => {
    return currEle.category
})), "All"];

const Restuarant = () => {
    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData)
    const [menuList, setMuneList] = useState(uniqueList);
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu)
            return;
        }
        const updatedList = Menu.filter((item) => {
            return item.category === category;
        })
        setMenuData(updatedList)
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restuarant