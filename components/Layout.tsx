import Navbar from "./Navbar_menu";
import Sound from "./Sound";

const Layout = ({children}) => (

   
   <>
    <Sound/>
    <Navbar />
    {children}
   
  </>

)
export default Layout;