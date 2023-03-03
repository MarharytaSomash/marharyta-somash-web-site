import Navbar from "./Navbar_menu";
import Sound from "./Sounds/Sound";
import styles from "../styles/Layout.module.scss";
import BurgersMenu from "./BurgersMenu";
import MobileMenu from "./MobileMenu";
import { useSelector } from "react-redux";
import { LayoutProps } from "./types";
import { RootState } from "../store/reducers/rootReducer";

const Layout = ({ children }: LayoutProps) => {
    const toggle = useSelector((state: RootState) => state.toggle.toggle);

    return (
        <div className={styles.wrap_layout}>
            <Sound />
            <Navbar />
            <BurgersMenu toggle={toggle} />
            {toggle ? <MobileMenu /> : null}
            {children}
        </div>
    );
};
export default Layout;
