import React, { useState } from 'react'
import "./resturant.scss"
import menu from "../basics/menuApi"
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(menu.map((curElem) =>{
  return curElem.category;    
})),
"All",
];
console.log(uniqueList);
const Resturant = () => {
  const [menuData, setMenuData] =  useState(menu);
  const [menuList, setMEnuList] = useState(uniqueList);
  console.log(menuData);

  const filterItem = (category) =>{

    if(category === "All"){
      setMenuData(menu);
      return;
    }

    const updatedList = menu.filter( (curElem)=>{
      return  curElem.category === category;
    }
    );
    setMenuData(updatedList);
  }
  const handlleAll = () =>{
    setMenuData(menu)
  }


  return (
    <>
     <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
