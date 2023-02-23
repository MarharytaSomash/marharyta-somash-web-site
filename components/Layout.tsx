import Navbar from "./Navbar_menu";
import Sound from "./Sounds/Sound";
import styles from '../styles/Layout.module.scss';
import BurgersMenu from "./BurgersMenu";
import MobileMenu from "./MobileMenu";
import { useSelector} from "react-redux";

const Layout = ({ children }: any) => {
   
   const toggle = useSelector((state) =>state.toggle.toggle);
    console.log({ toggle })
   return (
         <div className={styles.wrap_layout}>
            <Sound />
            <Navbar />
          
         <BurgersMenu toggle={toggle} />
         {toggle? <MobileMenu /> : null}
            {children}   
         </div>
          )
   }
export default Layout;