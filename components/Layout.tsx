import Navbar from "./Navbar_menu";
import Sound from "./Sounds/Sound";
import style from '../styles/Layout.module.scss';

const Layout = ({ children }:any) => {

   return (
         <div className={style.wrap_layout}>
            <Sound />
            <Navbar />
            {children}   
         </div>
          )
   }

export default Layout;