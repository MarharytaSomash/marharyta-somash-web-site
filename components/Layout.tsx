import Navbar from "./Navbar_menu";
import Sound from "./Sound";
import style from '../styles/Layout.module.scss';

const Layout = ({ children }) => {

   return (
         <div className={style.wrap_layout}>
            <Sound />
            <Navbar />
            {children}   
         </div>
          )
   }

export default Layout;