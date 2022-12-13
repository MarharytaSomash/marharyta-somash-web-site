import Link from "next/link";
import styles from '../styles/Social.module.scss'

const SocailItemWrapper = ({ route, children }) => {
  return (<div>
                <Link href={route} >
                    {children}  
                </Link>

         </div>
           
  )
}
export default SocailItemWrapper;