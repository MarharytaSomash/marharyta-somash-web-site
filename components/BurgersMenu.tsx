import BurgerSvg from "../public/svg/hamburger_menu";
import CloseSvg from "../public/svg/close";
import { useState } from "react";
import Navbar from './Navbar_menu'
import styles from '../styles/Navbar_menu.module.scss';


const BurgersMenu = () => {
      const [toggle, setToggle] = useState(false);
    
      const showMenu = () => {
         return (
            setToggle(!toggle),
            showNavbar()
         )
      }
   
      const showNavbar = () => {
         return <Navbar/>
      }
  
   return (

      <button onClick={()=>showMenu()}
               //className={
              // toggle ? [styles.main_menu, styles.active].join(' ') : [styles.main_menu]
              //  }
       >
         {toggle ? <CloseSvg /> : <BurgerSvg/> }
      
         
      </button>
     
   )
 }

export default BurgersMenu