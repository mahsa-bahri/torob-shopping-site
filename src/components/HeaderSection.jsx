import React,{useState} from "react";
import {NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfile from "./userProfile";
import image from '../download.png';

const HeaderSection = () => {
  const items = useSelector((state) => state.products.items);
//
const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
//

  return (
    <nav className="header-section">
      <div>
       <Link to={"/profile"}><img className="image" src={image}></img></Link> 
      </div>
      <Link to={"/signup"}><button className="button-signup">ثبت نام/ورود</button>  </Link>
      <Link to={"/home/smartphone&tablet"} className="button-link">
        <select>
          <option>موبایل و تبلت</option>
          <option>گوشی سامسونگ</option>
          <option>گوشی شیائومی</option>
          <option>گوشی اپل</option>
          <option>تبلت سامسونگ </option>
          <option>تبلت شیائومی</option>
          <option>تبلت اپل</option>
        </select>
      </Link>
      <Link to={"/home/notebook"} className="button-link">
       <select>
          <option>لپتاپ</option>
          <option >لپتاپ ایسوس</option>
          <option>لپتاپ لنوو</option>
          <option>لپتاپ اپل</option>

        </select> 
      </Link>
     



     
      <Link to="/cart-page" className="button-cart">
        <div className="button-cart-inner">
          سبد کالا
          {items.length > 0 && <div className="counter-badge fw-bold">{items.length}</div>}
        </div>
      </Link>

    </nav>
  );
};

export default HeaderSection;
