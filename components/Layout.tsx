import Navbar from "./Navbar_menu";
import Sound from "./Sound";

const Layout = ({children}) => {

   return (
      <div>
          <Sound/>
         
          {children}
     </div>
   )
  
   }

export default Layout;