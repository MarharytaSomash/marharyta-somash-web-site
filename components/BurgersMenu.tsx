import BurgerSvg from "../public/svg/hamburger_menu";
import CloseSvg from "../public/svg/close";

import Navbar from './Navbar_menu'
import styles from '../styles/Navbar_menu.module.scss';


const BurgersMenu = ({ setToggle, toggle }: any) => {
  
   return (
// 
      <button onClick={()=>setToggle(!toggle)}>
         {toggle ? <CloseSvg /> : <BurgerSvg/> }
        
      
        
      </button>
     
   )
 }

export default BurgersMenu