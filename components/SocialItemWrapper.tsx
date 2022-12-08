import Link from "next/link";
import styles from '../styles/Social.module.scss'

const SocailItemWrapper = ({ route, children }) => {
  return (
            <Link href={route} className={styles.social}>
                  {children}  
            </Link>
  )
}
export default SocailItemWrapper;