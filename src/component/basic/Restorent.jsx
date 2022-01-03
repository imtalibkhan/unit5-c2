import React from "react";
import {Menu} from './Menuapp';
import { useState } from "react";
import MenuCard from './MenuCard';

const Restorent = ()=>{
    const[MenuData,setMenuData] = useState(Menu);

    return (
        <>
        <MenuCard MenuData={MenuData}></MenuCard>
        </>
    )
}
export default Restorent