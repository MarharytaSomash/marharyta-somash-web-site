import BurgerSvg from "../public/svg/hamburger_menu";
import CloseSvg from "../public/svg/close";
import { showMenuBurger } from "../store/actions/showMenuBurger";
import { useDispatch } from "react-redux";

const BurgersMenu = ({ toggle }) => {
 const dispatch = useDispatch();
   
   return (
      <>
         <button onClick={ ()=>dispatch(showMenuBurger(toggle))} >
               {toggle ? <CloseSvg /> : <BurgerSvg />} 
         </button>   
      </>
   )
 }
export default BurgersMenu

