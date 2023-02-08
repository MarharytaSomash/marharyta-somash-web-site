import BurgerSvg from "../public/svg/hamburger_menu";
import CloseSvg from "../public/svg/close";

const BurgersMenu = ({ setToggle, toggle }: any) => {
  
   return (
      <button onClick={()=>setToggle(!toggle)} >
         {toggle ? <CloseSvg /> : <BurgerSvg/> }
      </button>
     
   )
 }

export default BurgersMenu