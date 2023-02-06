import Navbar from "./Navbar_menu";
import Sound from "./Sounds/Sound";
import styles from '../styles/Layout.module.scss';
import BurgersMenu from "./BurgersMenu";
import { useState } from "react";
import SomeMenu from "./SomeMenu";



const Layout = ({ children }:any) => {
   const [toggle, setToggle] = useState(false);
   
   return (
         <div className={styles.wrap_layout}>
            <Sound />
         <Navbar />
           {toggle&&<SomeMenu /> }
         <BurgersMenu toggle={toggle} setToggle={setToggle} />
            {children}   
         </div>
          )
   }

export default Layout;